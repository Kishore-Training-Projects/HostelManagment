using System.ComponentModel.DataAnnotations;

namespace HostelManagement.Model
{
    public class RoomModel
    {
        [Key]
        public int RoomNo { get; set; }

       public String RoomType { get; set;}

        public int Seater { get; set;}

        public int Occupied { get; set;}

        public int Rent { get; set;}

        public string RoomDescription { get; set;}



    }
}
