using Azure.Identity;
using Microsoft.EntityFrameworkCore;
using NovaHR.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Retrieve Key Vault URI from configuration
string keyVaultUri = builder.Configuration["KeyVault:VaultUri"];

// Configure Azure Key Vault with managed identity authentication
if (!string.IsNullOrEmpty(keyVaultUri))
{
    builder.Configuration.AddAzureKeyVault(
        new Uri(keyVaultUri),
        new DefaultAzureCredential());
}

// Configure DbContext with the connection string retrieved from Key Vault
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services for MVC controllers, etc., if needed
builder.Services.AddControllers();

var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
