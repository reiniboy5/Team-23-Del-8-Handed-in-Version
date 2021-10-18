using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtClassesRepositories
{
    public class FeedbackRepository : IAppRepository<Feedback>
    {
        readonly ArtechDbContext _artechDb;


        public FeedbackRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(Feedback feedback)
        {
            _artechDb.Feedback.Add(feedback);
            _artechDb.SaveChanges();
        }

        public void Delete(Feedback feedback)
        {
            _artechDb.Feedback.Remove(feedback);
            _artechDb.SaveChanges();
        }

        public Feedback Get(long id)
        {
            return _artechDb.Feedback.FirstOrDefault(u => u.FeedbackID == id);
        }

        public IEnumerable<Feedback> GetAll()
        {
            return _artechDb.Feedback.ToList();
        }

        public Feedback GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(Feedback feedback, Feedback entity)
        {
            feedback.FeedbackComment = entity.FeedbackComment;
            feedback.TeacherRating = entity.TeacherRating;
            feedback.DifficultyRating = entity.DifficultyRating;
            feedback.OverallRating = entity.OverallRating;
            _artechDb.SaveChanges();
        }

        IEnumerable<Feedback> IAppRepository<Feedback>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
