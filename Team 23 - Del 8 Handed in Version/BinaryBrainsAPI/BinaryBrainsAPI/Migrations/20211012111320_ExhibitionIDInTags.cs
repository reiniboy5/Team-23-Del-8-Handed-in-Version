using Microsoft.EntityFrameworkCore.Migrations;

namespace BinaryBrainsAPI.Migrations
{
    public partial class ExhibitionIDInTags : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ExhibitionID",
                table: "ApplicationTag",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationTag_ExhibitionID",
                table: "ApplicationTag",
                column: "ExhibitionID");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationTag_Exhibition_ExhibitionID",
                table: "ApplicationTag",
                column: "ExhibitionID",
                principalTable: "Exhibition",
                principalColumn: "ExhibitionID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationTag_Exhibition_ExhibitionID",
                table: "ApplicationTag");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationTag_ExhibitionID",
                table: "ApplicationTag");

            migrationBuilder.DropColumn(
                name: "ExhibitionID",
                table: "ApplicationTag");
        }
    }
}
