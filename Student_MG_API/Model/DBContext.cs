using Microsoft.EntityFrameworkCore;

namespace Student_MG_API.Model
{
    public class StudentDBContext:DbContext
    {
        public StudentDBContext(DbContextOptions<StudentDBContext>option):base(option) { }
        public DbSet<Student> Students { get; set; }
    }
}
