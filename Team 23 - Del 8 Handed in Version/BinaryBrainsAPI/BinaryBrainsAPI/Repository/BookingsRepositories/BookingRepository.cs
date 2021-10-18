using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Entities.Bookings;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.BookingsRepositories
{
    public class BookingRepository : IAppRepository<Booking>
    {
        readonly ArtechDbContext _artechDb;


        public BookingRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Booking booking)
        {
            _artechDb.Booking.Add(booking);
            _artechDb.SaveChanges();
        }

        public void Delete(Booking booking)
        {
            _artechDb.Booking.Remove(booking);
            _artechDb.SaveChanges();
        }

        public Booking Get(long id)
        {
            
            
            Booking booking = _artechDb.Booking.FirstOrDefault(s => s.BookingID == id);

            ArtClass artClass = _artechDb.ArtClass.FirstOrDefault(b => b.ArtClassID == booking.ArtClassID);

            booking.ArtClass = artClass;

            return booking;

        }

      
        public IEnumerable<Booking> GetAll()
        {
            var bookings = _artechDb.Booking.Where(b => b.BookingDateTime >= DateTime.Parse("2021-02-01")).ToList();

            return _artechDb.Booking.ToList();
        }


     
        public IEnumerable<Booking> GetByString(string str)
        {

            if (str.Contains("stringartclassid"))
            {
                string artclassid = str.Replace("stringartclassid", "");

                return _artechDb.Booking.Where(s => s.ArtClassID == Int32.Parse(artclassid)).ToList();

            }

            if (str.Contains("stringuserid"))
            {
                string stringuserid = str.Replace("stringuserid", "");

                return _artechDb.Booking.Where(s => s.UserID == Int32.Parse(stringuserid)).ToList();

            }

            return null;
        }

        public void Update(Booking booking, Booking entity)
        {
            booking.BookingDateTime = entity.BookingDateTime;
            booking.BookingStatus = entity.BookingStatus;
            _artechDb.SaveChanges();
        }
    }
}
