targetScope = 'resourceGroup'

// Parameter to control Key Vault deployment
param keyVaultOnly bool = false

// App Service Plan for Frontend and Backend
resource appServicePlan 'Microsoft.Web/serverfarms@2021-03-01' = if (!keyVaultOnly) {
  name: 'novahr-appserviceplan'
  location: resourceGroup().location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
}

// Frontend Web App
resource frontendAppService 'Microsoft.Web/sites@2021-03-01' = if (!keyVaultOnly) {
  name: 'novahr-webapp'
  location: resourceGroup().location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// Backend API App Service
resource backendAppService 'Microsoft.Web/sites@2021-03-01' = if (!keyVaultOnly) {
  name: 'novahr-backend-api'
  location: resourceGroup().location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// SQL Server
resource sqlServer 'Microsoft.Sql/servers@2022-05-01-preview' = if (!keyVaultOnly) {
  name: 'novahr-sqlserver'
  location: resourceGroup().location
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: 'P@ssword1234!'  // Replace this with a secure password
  }
}

// SQL Database
resource sqlDatabase 'Microsoft.Sql/servers/databases@2022-05-01-preview' = if (!keyVaultOnly) {
  parent: sqlServer
  name: 'novahr-sqldb'
  location: resourceGroup().location
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
  }
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}

// Azure Key Vault
resource keyVault 'Microsoft.KeyVault/vaults@2022-11-01' = {
  name: 'novahr-keyvault'
  location: resourceGroup().location
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    accessPolicies: []
  }
}

// Secret in Key Vault for SQL Connection String
resource sqlConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2022-11-01' = {
  parent: keyVault
  name: 'sql-connection-string'
  properties: {
    value: 'Server=tcp:novahr-sqlserver.database.windows.net,1433;Initial Catalog=novahr-sqldb;Persist Security Info=False;User ID=sqladmin;Password=P@ssword1234!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30'
  }
}

// Combined Key Vault Access Policy for Frontend and Backend App Service
resource combinedAccessPolicy 'Microsoft.KeyVault/vaults/accessPolicies@2022-11-01' = {
  parent: keyVault
  name: 'add'
  properties: {
    accessPolicies: [
      {
        tenantId: subscription().tenantId
        objectId: frontendAppService.identity.principalId
        permissions: {
          secrets: [
            'get'
          ]
        }
      },
      {
        tenantId: subscription().tenantId
        objectId: backendAppService.identity.principalId
        permissions: {
          secrets: [
            'get'
          ]
        }
      }
    ]
  }
  dependsOn: [
    frontendAppService
    backendAppService
  ]
}
