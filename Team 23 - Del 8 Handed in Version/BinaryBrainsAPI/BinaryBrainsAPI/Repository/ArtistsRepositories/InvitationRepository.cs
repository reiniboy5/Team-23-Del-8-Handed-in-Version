using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Artists;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtistsRepositories
{
    public class InvitationRepository : IAppRepository<Invitation>
    {
        readonly ArtechDbContext _artechDb;


        public InvitationRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Invitation invitation)
        {
            _artechDb.Invitation.Add(invitation);
            _artechDb.SaveChanges();
        }

        public void Delete(Invitation invitation)
        {
            _artechDb.Invitation.Remove(invitation);
            _artechDb.SaveChanges();
        }

        public Invitation Get(long id)
        {
            return _artechDb.Invitation.FirstOrDefault(s => s.InvitationID == id);
        }

        public IEnumerable<Invitation> GetAll()
        {
            return _artechDb.Invitation.ToList();
        }

        public Invitation GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Invitation invitation, Invitation entity)
        {
            invitation.InvitationDetails = entity.InvitationDetails;
            invitation.InvitationDate = entity.InvitationDate;
            _artechDb.SaveChanges();
        }

        IEnumerable<Invitation> IAppRepository<Invitation>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
