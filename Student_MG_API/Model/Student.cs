using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.ComTypes;

namespace Student_MG_API.Model
{
    public class Student
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required, StringLength(40)]
        public string Name { get; set; }
        [Required, DataType(DataType.DateTime)]
        public DateTime DOB { get; set; }
        [StringLength(250)]
        public string Address { get; set; }
        [Required, StringLength(20)]
        public string Phone { get; set; }
        [Required, DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
