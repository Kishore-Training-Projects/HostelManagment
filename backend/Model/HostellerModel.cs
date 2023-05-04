using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace HostelManagement.Model
{
    public class HostellerModel
    {
        [Key]

        public int HostellerId { get; set; }
        public string Name { get; set; }

        public string Gender { get; set; }

        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }

        public int Age { get; set;}

        public string BloodGroup { get; set; }

        public String Mobile { get; set; }

        public String Email { get; set; }

        public String FatherName { get; set; }

        public String FatherMobile { get; set; }

        public string Occupation { get; set; }

        public string OccupationName { get; set; }

        public string OccupationLocation { get;set; }


        public string Address { get; set; }

        [AllowNull]
        public virtual RoomModel? Room { get; set; }


    }
}
