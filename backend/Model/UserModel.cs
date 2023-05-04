using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations;

namespace HostelManagement.Model
{
    public class UserModel
    {
        [Key]
        public int UserID { get; set; }

        
        public string UserName { get; set; }

        
        public string UserEmail { get; set; }

        
        public string Password { get; set; }
    }
}
