using billadamswebdev.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace billadamswebdev.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public JsonResult Contact(Contact contact)
        {

            return new JsonResult(contact);
        }
    }
}
