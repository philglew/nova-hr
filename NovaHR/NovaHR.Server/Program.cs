var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("https://novahr-webapp.azurewebsites.net")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
