using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.PaymentsRepositories
{
    public class PaymentRepository : IAppRepository<Payment>
    {
        readonly ArtechDbContext _artechDb;
        public PaymentRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Payment payment)
        {
            _artechDb.Payment.Add(payment);
            _artechDb.SaveChanges();
        }

        public void Delete(Payment payment)
        {
            _artechDb.Payment.Remove(payment);
            _artechDb.SaveChanges();
        }

        public Payment Get(long id)
        {
            return _artechDb.Payment.FirstOrDefault(s => s.PaymentID == id);
        }

        public IEnumerable<Payment> GetAll()
        {
            return _artechDb.Payment.ToList();
        }

        public void Update(Payment payment, Payment entity)
        {
            payment.Amount = entity.Amount;
            payment.PaymentDateTime = entity.PaymentDateTime;
            payment.PaymentStatus = entity.PaymentStatus;
            payment.RefundID = entity.RefundID;
            _artechDb.SaveChanges();
        }

        IEnumerable<Payment> IAppRepository<Payment>.GetByString(string str)
        {
            return _artechDb.Payment.Where(s => s.BookingID == Int32.Parse(str)).ToList();
        }
    }
}
