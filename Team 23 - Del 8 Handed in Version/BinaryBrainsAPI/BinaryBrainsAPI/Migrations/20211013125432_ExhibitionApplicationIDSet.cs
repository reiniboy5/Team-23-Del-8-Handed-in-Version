using Microsoft.EntityFrameworkCore.Migrations;

namespace BinaryBrainsAPI.Migrations
{
    public partial class ExhibitionApplicationIDSet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ExhibitionApplicationID",
                table: "ApplicationTag",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationTag_ExhibitionApplicationID",
                table: "ApplicationTag",
                column: "ExhibitionApplicationID");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationTag_ExhibitionApplication_ExhibitionApplicationID",
                table: "ApplicationTag",
                column: "ExhibitionApplicationID",
                principalTable: "ExhibitionApplication",
                principalColumn: "ExhibitionApplicationID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationTag_ExhibitionApplication_ExhibitionApplicationID",
                table: "ApplicationTag");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationTag_ExhibitionApplicationID",
                table: "ApplicationTag");

            migrationBuilder.AlterColumn<int>(
                name: "ExhibitionApplicationID",
                table: "ApplicationTag",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
