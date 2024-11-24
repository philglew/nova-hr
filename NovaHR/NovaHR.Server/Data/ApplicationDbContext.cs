using Microsoft.EntityFrameworkCore;

namespace NovaHR.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // We'll add DbSet properties here once you provide the questionnaire questions
    }
}