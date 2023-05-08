using HostelManagement.Model;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace HostelManagement.Services
{
    public class EmailSender
    {
        public async Task SendEmail(string subject, string toemail, string username, string message)
        {
            var apiKey = Environment.GetEnvironmentVariable("EMAIL_API");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("kishoredurai7@gmail.com", "Hostel Management");
            var to = new EmailAddress(toemail, username);
            var plainTextContent = message;
            var htmlContent = $"<strong>{message}</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }

        public async Task sendGroupEmail(string subject, List<HostellerModel> hostel, string message)
        {
            var apiKey = Environment.GetEnvironmentVariable("EMAIL_API");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("kishoredurai7@gmail.com", "Hostel Management");
            var plainTextContent = message;
            var htmlContent = $"<strong>{message}</strong>";


            foreach (var hosteller in hostel)
            {
                var to = new EmailAddress(hosteller.Email, hosteller.Name);
                var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
                var response = await client.SendEmailAsync(msg);

            }

        }
    }
}
