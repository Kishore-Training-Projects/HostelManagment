using System.ComponentModel.DataAnnotations;

namespace HostelManagement.Model
{
    public class NoticeBoardModel
    {
        [Key]
        public int NoticeId { get; set; }

        public string NoticeDetails { get; set; }

        public DateTime NoticeDate { get; set; }
    }
}
