targetScope = 'subscription'

// Create Resource Group
resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-novahr'
  location: 'UK South'
}

// App Service Plan for Frontend and Backend
resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: 'novahr-appserviceplan'
  location: resourceGroup.location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
}

// Frontend Web App
resource frontendAppService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'novahr-webapp'
  location: resourceGroup.location
  serverFarmId: appServicePlan.id
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    httpsOnly: true
  }
}

// Backend API App Service
resource backendAppService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'novahr-backend-api'
  location: resourceGroup.location
  serverFarmId: appServicePlan.id
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    httpsOnly: true
  }
}

// SQL Server
resource sqlServer 'Microsoft.Sql/servers@2021-02-01' = {
  name: 'novahr-sqlserver'
  location: resourceGroup.location
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: 'P@ssword1234!'  // Replace this with a secure password
  }
  tags: {
    environment: 'production'
  }
}

// SQL Database
resource sqlDatabase 'Microsoft.Sql/servers/databases@2021-02-01' = {
  name: 'novahr-sqldb'
  parent: sqlServer
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
  }
  sku: {
    name: 'Basic'
    tier: 'Basic'
    capacity: 5
  }
}
