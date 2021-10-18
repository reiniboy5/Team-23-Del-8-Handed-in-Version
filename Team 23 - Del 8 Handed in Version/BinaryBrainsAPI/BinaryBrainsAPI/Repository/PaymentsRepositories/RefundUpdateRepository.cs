using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using BinaryBrainsAPI.Entities.Bookings;

namespace BinaryBrainsAPI.Repository.PaymentsRepositories
{
    public class RefundUpdateRepository : IRefundRepository<Booking>
    {
        readonly ArtechDbContext _artechDb;

       
        public RefundUpdateRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;


        }

        public async Task<int> UpdateRefund(int paymentID, int refundID)
        {
           
      
                    var parameter = new List<SqlParameter>();

                    parameter.Add(new SqlParameter("@PaymentID", paymentID));
                    parameter.Add(new SqlParameter("@RefundID", refundID));
                    parameter.Add(new SqlParameter
                    {
                        ParameterName = "@retVal",
                        DbType = DbType.Int32,
                        Direction = ParameterDirection.Output
                    });

                    var result = await Task.Run(() => _artechDb.Refund.FromSqlRaw(@"exec sp_UpdateBookingAndPayment 
                                                                    @PaymentID,
                                                                    @RefundID,
                                                                    @retVal OUT",
                                                                  parameter.ToArray()
                                                                  ));

                    int retVal = int.Parse(parameter[2].Value.ToString()); //get @retVal return value

                    return retVal;

        }

        public Booking GetBooking(int bookingID)
        {


            var parameter = new List<SqlParameter>();

            parameter.Add(new SqlParameter("@BookingID", bookingID));

            Booking booking;

            string execsp = "exec sp_GetBooking @BookingID";

            booking =  _artechDb.Booking.FromSqlRaw<Booking>(execsp
                                                                    ,
                                                          parameter.ToArray()
                                                          ).AsEnumerable().FirstOrDefault();

         

            return booking;

        }


    }
}
