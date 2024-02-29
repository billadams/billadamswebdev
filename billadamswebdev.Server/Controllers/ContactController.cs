using billadamswebdev.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;

namespace billadamswebdev.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;
        private readonly SMTPSettings _smtpSettings;

        public ContactController(ILogger<ContactController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _smtpSettings = new SMTPSettings();
            configuration.GetSection("SMTP_Settings").Bind(_smtpSettings);
        }

        [HttpPost]
        public JsonResult Contact(Contact contact)
        {
            SmtpClient client = new(_smtpSettings.Host, _smtpSettings.Port)
            {
                Credentials = new NetworkCredential(_smtpSettings.Username, _smtpSettings.Password),
                EnableSsl = true,
            };
            MailAddress from = new(contact.Email, $"{contact.Name}", System.Text.Encoding.UTF8);
            MailAddress to = new("billadams1977@gmail.com", "Bill Adams");
            MailMessage message = new(from, to)
            {
                Body = contact.Message,
                BodyEncoding = System.Text.Encoding.UTF8,
                Subject = "Contact Form Submission",
                SubjectEncoding = System.Text.Encoding.UTF8
            };

            client.SendCompleted += new SendCompletedEventHandler(SendCompletedCallback);

            string userState = "contact form message";
            client.SendAsync(message, userState);

            return new JsonResult(contact);
        }

        private static void SendCompletedCallback(object sender, AsyncCompletedEventArgs e)
        {
            if (e.Cancelled)
            {
                Console.WriteLine("Send canceled.");
            }
            if (e.Error != null)
            {
                Console.WriteLine(e.Error.ToString());
            }
            else
            {
                Console.WriteLine("Message sent.");
            }
        }
    }
}
