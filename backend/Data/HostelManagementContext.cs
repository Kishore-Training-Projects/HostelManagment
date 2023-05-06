using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HostelManagement.Model;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace HostelManagement.Data
{
    public class HostelManagementContext : DbContext
    {
        public HostelManagementContext (DbContextOptions<HostelManagementContext> options)
            : base(options)
        {

            try
            {
                var databaseCreater = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if(databaseCreater != null)
                {
                    if (!databaseCreater.CanConnect()) databaseCreater.Create();
                    if (!databaseCreater.HasTables()) databaseCreater.CreateTables();

                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public DbSet<RoomModel> RoomModel { get; set; } = default!;

        public DbSet<HostelManagement.Model.HostellerModel>? HostellerModel { get; set; }

        public DbSet<HostelManagement.Model.UserModel>? UserModel { get; set; }

        public DbSet<HostelManagement.Model.ComplaintModel>? ComplaintModel { get; set; }

        public DbSet<HostelManagement.Model.NoticeBoardModel>? NoticeBoardModel { get; set; }
    }
}
