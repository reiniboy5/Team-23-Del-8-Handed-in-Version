using BinaryBrainsAPI.Data;
using BinaryBrainsAPI.Entities.ArtClasses;
using BinaryBrainsAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BinaryBrainsAPI.Repository.ArtClassesRepositories
{
    public class ClassTeacherRepository : IAppRepository<ClassTeacher>
    {
        readonly ArtechDbContext _artechDb;


        public ClassTeacherRepository(ArtechDbContext artechDb)
        {
            _artechDb = artechDb;
        }

        public void Add(ClassTeacher classTeacher)
        {
            _artechDb.ClassTeacher.Add(classTeacher);
            _artechDb.SaveChanges();
        }

        public void Delete(ClassTeacher classTeacher)
        {
            _artechDb.ClassTeacher.Remove(classTeacher);
            _artechDb.SaveChanges();
        }

        public ClassTeacher Get(long id)
        {
            return _artechDb.ClassTeacher.FirstOrDefault(u => u.ClassTeacherID == id);
        }

        public IEnumerable<ClassTeacher> GetAll()
        {
            //return _artechDb.ClassTeacher.ToList();
            return _artechDb.ClassTeacher.Include(x => x.TeacherType).ToList();
           // return db.Pizza.Include(x => x.PizzaType).ToList();
        }

        public ClassTeacher GetByString(string str)
        {
            throw new NotImplementedException();
        }

        public void Update(ClassTeacher classTeacher, ClassTeacher entity)
        {
            classTeacher.TeacherName = entity.TeacherName;
            classTeacher.TeacherSurname = entity.TeacherSurname;
            classTeacher.TeacherEmail = entity.TeacherEmail;
            classTeacher.TeacherPhoneNumber = entity.TeacherPhoneNumber;
            classTeacher.TeacherTypeID = entity.TeacherTypeID;
            _artechDb.SaveChanges();
        }

        IEnumerable<ClassTeacher> IAppRepository<ClassTeacher>.GetByString(string str)
        {
            throw new NotImplementedException();
        }
    }
}
