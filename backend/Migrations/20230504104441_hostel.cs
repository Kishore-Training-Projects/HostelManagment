using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HostelManagement.Migrations
{
    public partial class hostel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RoomModel",
                columns: table => new
                {
                    RoomNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Seater = table.Column<int>(type: "int", nullable: false),
                    Occupied = table.Column<int>(type: "int", nullable: false),
                    Rent = table.Column<int>(type: "int", nullable: false),
                    RoomDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomModel", x => x.RoomNo);
                });

            migrationBuilder.CreateTable(
                name: "UserModel",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModel", x => x.UserID);
                });

            migrationBuilder.CreateTable(
                name: "HostellerModel",
                columns: table => new
                {
                    HostellerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FatherName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FatherMobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Occupation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OccupationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OccupationLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomNo = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HostellerModel", x => x.HostellerId);
                    table.ForeignKey(
                        name: "FK_HostellerModel_RoomModel_RoomNo",
                        column: x => x.RoomNo,
                        principalTable: "RoomModel",
                        principalColumn: "RoomNo");
                });

            migrationBuilder.CreateIndex(
                name: "IX_HostellerModel_RoomNo",
                table: "HostellerModel",
                column: "RoomNo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HostellerModel");

            migrationBuilder.DropTable(
                name: "UserModel");

            migrationBuilder.DropTable(
                name: "RoomModel");
        }
    }
}
