using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Payments;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.PaymentsRepositories
{
    public class PaymentStatusRepository : IAppRepository<PaymentStatus>
    {
        readonly ArtechDbContext _artechDb;

        public PaymentStatusRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(PaymentStatus paymentStatus)
        {
            _artechDb.PaymentStatus.Add(paymentStatus);
            _artechDb.SaveChanges();
        }

        public void Delete(PaymentStatus paymentStatus)
        {
            _artechDb.PaymentStatus.Remove(paymentStatus);
            _artechDb.SaveChanges();
        }

        public PaymentStatus Get(long id)
        {
            return _artechDb.PaymentStatus.FirstOrDefault(s => s.PaymentStatusID == id);
        }

        public IEnumerable<PaymentStatus> GetAll()
        {
            return _artechDb.PaymentStatus.ToList();
        }

        public PaymentStatus GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(PaymentStatus paymentStatus, PaymentStatus entity)
        {
            paymentStatus.PaymentStatusDescription = entity.PaymentStatusDescription;
            _artechDb.SaveChanges();
        }

        IEnumerable<PaymentStatus> IAppRepository<PaymentStatus>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
