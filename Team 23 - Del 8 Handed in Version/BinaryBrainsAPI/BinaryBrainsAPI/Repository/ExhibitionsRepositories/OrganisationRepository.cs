using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.Exhibitions;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ExhibitionsRepositories
{
    public class OrganisationRepository : IAppRepository<Organisation>
    {
        readonly ArtechDbContext _artechDb;


        public OrganisationRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Organisation organisation)
        {
            _artechDb.Organisation.Add(organisation);
            _artechDb.SaveChanges();
        }

        public void Delete(Organisation organisation)
        {
            _artechDb.Organisation.Remove(organisation);
            _artechDb.SaveChanges();
        }

        public Organisation Get(long id)
        {
            return _artechDb.Organisation.FirstOrDefault(s => s.OrganisationID == id);
        }

        public IEnumerable<Organisation> GetAll()
        {
            return _artechDb.Organisation.ToList();
        }

        public Organisation GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Organisation organisation, Organisation entity)
        {
            organisation.OrganisationalAddress = entity.OrganisationalAddress;
            organisation.OrganisationalName = entity.OrganisationalName;
            _artechDb.SaveChanges();
        }

        IEnumerable<Organisation> IAppRepository<Organisation>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
