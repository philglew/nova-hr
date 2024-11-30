using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NovaHR.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddEmployeesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmployeeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WorkerNumber = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Prefix = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "date", nullable: false),
                    DateOfHire = table.Column<DateTime>(type: "date", nullable: false),
                    WorkEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CurrentStartDate = table.Column<DateTime>(type: "date", nullable: true),
                    LeaveDate = table.Column<DateTime>(type: "date", nullable: true),
                    LastDateOfWork = table.Column<DateTime>(type: "date", nullable: true),
                    CurrentJobTitle = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CurrentLineManagerId = table.Column<int>(type: "int", nullable: true),
                    CurrentLineManagerName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CurrentLineManagerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoticePeriod = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmployeeID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
