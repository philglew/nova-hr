using Microsoft.EntityFrameworkCore;

namespace NovaHR.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Add DbSet property for Employees table
        public DbSet<Employee> Employees { get; set; }
    }
}
