resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-novahr'
  location: 'UK South'
}

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: 'novahr-appserviceplan'
  location: rg.location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
}

resource frontEndAppService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'novahr-webapp'
  location: rg.location
  serverFarmId: appServicePlan.id
  identity: {
    type: 'SystemAssigned'
  }
}

resource backEndAppService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'novahr-api'
  location: rg.location
  serverFarmId: appServicePlan.id
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    httpsOnly: true
  }
}

resource sqlServer 'Microsoft.Sql/servers@2021-02-01' = {
  name: 'novahr-sqlserver'
  location: rg.location
  administratorLogin: 'sqladmin'
  administratorLoginPassword: 'P@ssword1234!'
  version: '12.0'
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2021-02-01' = {
  name: 'novahr-sqldb'
  parent: sqlServer
  location: rg.location
  sku: {
    name: 'Basic'
    tier: 'Basic'
    capacity: 5
  }
}
