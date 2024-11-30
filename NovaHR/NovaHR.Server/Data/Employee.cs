using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NovaHR.Server.Data
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployeeID { get; set; }

        [Required]
        [StringLength(5)]
        public string WorkerNumber { get; set; }

        [Required]
        [StringLength(100)]
        public string FirstName { get; set; }

        [StringLength(100)]
        public string MiddleName { get; set; }

        [Required]
        [StringLength(100)]
        public string Surname { get; set; }

        [Required]
        [StringLength(10)]
        public string Prefix { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DateOfHire { get; set; }

        [Required]
        [EmailAddress]
        public string WorkEmail { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CurrentStartDate { get; set; }

        [Column(TypeName = "date")]
        public DateTime? LeaveDate { get; set; }

        [Column(TypeName = "date")]
        public DateTime? LastDateOfWork { get; set; }

        [StringLength(100)]
        public string CurrentJobTitle { get; set; }

        public int? CurrentLineManagerId { get; set; }

        [StringLength(100)]
        public string CurrentLineManagerName { get; set; }

        [EmailAddress]
        public string CurrentLineManagerEmail { get; set; }

        [Range(0, 12)]
        public int NoticePeriod { get; set; }
    }
}
