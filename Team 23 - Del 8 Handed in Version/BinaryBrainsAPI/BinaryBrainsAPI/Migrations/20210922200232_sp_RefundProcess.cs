using Microsoft.EntityFrameworkCore.Migrations;

namespace BinaryBrainsAPI.Migrations
{
    public partial class sp_RefundProcess : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE OR ALTER PROCEDURE [dbo].sp_UpdateBookingAndPayment(
                    @PaymentID int,
					@RefundID int,
					@retVal int out)

                AS
                BEGIN
                    SET NOCOUNT ON;

					update dbo.Payment set PaymentStatus = 'Refund Requested',RefundID =@RefundID 
					where PaymentID = @PaymentID;

					update dbo.Booking 
					set BookingStatus = 'Pending Refund' 
					where BookingID in (select BookingID from dbo.Payment where PaymentID = @PaymentID);
					      ---check for number of rows affected
                                        IF(@@ROWCOUNT > 0)
                                        BEGIN
                                            SET @retVal = 200 -- command was executed successfully
                                        END
                                        ELSE
                                        BEGIN
                                            SET @retVal = 500  -- nothing is updated
                                        END
                END";

            migrationBuilder.Sql(sp);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("drop procedure sp_UpdateBookingAndPayment");
        }
    }
}
