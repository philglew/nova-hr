targetScope = 'resourceGroup'

// Create Resource Group (run this manually or as a separate step if needed)

// App Service Plan for Frontend and Backend
resource appServicePlan 'Microsoft.Web/serverfarms@2021-03-01' = {
  name: 'novahr-appserviceplan'
  location: 'UK South'
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
}

// Frontend Web App
resource frontendAppService 'Microsoft.Web/sites@2021-03-01' = {
  name: 'novahr-webapp'
  location: 'UK South'
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// Backend API App Service
resource backendAppService 'Microsoft.Web/sites@2021-03-01' = {
  name: 'novahr-backend-api'
  location: 'UK South'
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// SQL Server
resource sqlServer 'Microsoft.Sql/servers@2022-05-01-preview' = {
  name: 'novahr-sqlserver'
  location: 'UK South'
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: 'P@ssword1234!'  // Replace this with a secure password
  }
}

// SQL Database
resource sqlDatabase 'Microsoft.Sql/servers/databases@2022-05-01-preview' = {
  parent: sqlServer
  name: 'novahr-sqldb'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
  }
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}
