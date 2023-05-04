using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace HostelManagement.Model
{
    public class ComplaintModel
    {
        [Key]
        public int ComplaintID { get; set; }

        public string ComplaintType { get; set; }

        public string Details { get; set; }

        public DateTime CreatedDate { get; set; }

        public string status { get; set; }

        [AllowNull]
        public HostellerModel? hosteller { get; set; }
    }
}
