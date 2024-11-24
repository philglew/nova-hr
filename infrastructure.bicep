resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-novahr'
  location: 'UK South'
}

resource appServicePlan 'Microsoft.Web/serverfarms@2021-03-01' = {
  name: 'novahr-appserviceplan'
  location: rg.location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
}

resource appService 'Microsoft.Web/sites@2021-03-01' = {
  name: 'novahr-webapp'
  location: rg.location
  serverFarmId: appServicePlan.id
  identity: {
    type: 'SystemAssigned'
  }
}

resource sqlServer 'Microsoft.Sql/servers@2022-05-01-preview' = {
  name: 'novahr-sqlserver'
  location: rg.location
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: 'P@ssword1234!'
  }
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2022-05-01-preview' = {
  name: 'novahr-sqldb'
  parent: sqlServer
  location: rg.location
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}
