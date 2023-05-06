using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using HostelManagement.Data;
namespace HostelManagement
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //database cobtext dependecy injection
            /*    var dbHost = Environment.GetEnvironmentVariable("DB_HOST");
                var dbName = Environment.GetEnvironmentVariable("DB_NAME");
                var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD");*/

            //database cobtext dependecy injection
            var dbHost = "localhost";
            var dbName = "Hostels";
            var dbPassword = "1234";

            var connectionString =$"Data Source={dbHost};Initial Catalog={dbName};User ID=sa;Password={dbPassword}";

            builder.Services.AddDbContext<HostelManagementContext>(opt => opt.UseSqlServer(connectionString));


       /*     builder.Services.AddDbContext<HostelManagementContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("HostelManagementContext") ?? throw new InvalidOperationException("Connection string 'HostelManagementContext' not found.")));
*/
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(p=>p.AddPolicy("corspolicy", build =>
            {
                build.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
            }));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("corspolicy");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}