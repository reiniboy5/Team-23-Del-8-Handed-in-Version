using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Bookings;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.BookingsRepositories
{
    public class BookingNotificationRepository : IAppRepository<BookingNotification>
    {
        readonly ArtechDbContext _artechDb;


        public BookingNotificationRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(BookingNotification bookingNotification)
        {
            _artechDb.BookingNotification.Add(bookingNotification);
            _artechDb.SaveChanges();
        }

        public void Delete(BookingNotification bookingNotification)
        {
            _artechDb.BookingNotification.Remove(bookingNotification);
            _artechDb.SaveChanges();
        }

        public BookingNotification Get(long id)
        {
            return _artechDb.BookingNotification.FirstOrDefault(s => s.BookingNotificationID == id);
        }

        public IEnumerable<BookingNotification> GetAll()
        {
            return _artechDb.BookingNotification.ToList();
        }

        public BookingNotification GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(BookingNotification bookingNotification, BookingNotification entity)
        {
            bookingNotification.BookNotificationDescription = entity.BookNotificationDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<BookingNotification> IAppRepository<BookingNotification>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
