using Microsoft.EntityFrameworkCore.Migrations;

namespace BinaryBrainsAPI.Migrations
{
    public partial class sp_GetBooking : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE OR ALTER PROCEDURE [dbo].sp_GetBooking(
                    @BookingID int)

                AS
                BEGIN
                        SELECT *
                                FROM [dbo].[Booking]

                                    WHERE BookingID = @BookingID 
                END";

            migrationBuilder.Sql(sp);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
