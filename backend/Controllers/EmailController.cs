using HostelManagement.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace HostelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendMail(string user)
        {
            string emailsubject = "Registeration Confirmation";
            string username = "kishore D";
            string message = "Dear " + username + "\n"
                    + "Thank you for registering in our application";
            EmailSender email = new EmailSender();
            email.SendEmail(emailsubject, "kishore.ct19@bitsathy.ac.in", username, message).Wait();

                return Ok();

        }
    }
}
