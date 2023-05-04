using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HostelManagement.Migrations
{
    public partial class complaintnoticeboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ComplaintModel",
                columns: table => new
                {
                    ComplaintID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ComplaintType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HostellerId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComplaintModel", x => x.ComplaintID);
                    table.ForeignKey(
                        name: "FK_ComplaintModel_HostellerModel_HostellerId",
                        column: x => x.HostellerId,
                        principalTable: "HostellerModel",
                        principalColumn: "HostellerId");
                });

            migrationBuilder.CreateTable(
                name: "NoticeBoardModel",
                columns: table => new
                {
                    NoticeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NoticeDetails = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoticeDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NoticeBoardModel", x => x.NoticeId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ComplaintModel_HostellerId",
                table: "ComplaintModel",
                column: "HostellerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ComplaintModel");

            migrationBuilder.DropTable(
                name: "NoticeBoardModel");
        }
    }
}
