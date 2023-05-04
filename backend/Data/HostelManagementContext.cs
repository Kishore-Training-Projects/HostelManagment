using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HostelManagement.Model;

namespace HostelManagement.Data
{
    public class HostelManagementContext : DbContext
    {
        public HostelManagementContext (DbContextOptions<HostelManagementContext> options)
            : base(options)
        {
        }

        public DbSet<HostelManagement.Model.RoomModel> RoomModel { get; set; } = default!;

        public DbSet<HostelManagement.Model.HostellerModel>? HostellerModel { get; set; }

        public DbSet<HostelManagement.Model.UserModel>? UserModel { get; set; }

        public DbSet<HostelManagement.Model.ComplaintModel>? ComplaintModel { get; set; }

        public DbSet<HostelManagement.Model.NoticeBoardModel>? NoticeBoardModel { get; set; }
    }
}
