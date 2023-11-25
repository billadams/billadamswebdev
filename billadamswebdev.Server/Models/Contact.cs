namespace billadamswebdev.Server.Models
{
    public class Contact(string name, string email, string message)
    {
        public string Name { get; set; } = name;
        public string Email { get; set; } = email;
        public string Message { get; set; } = message;
    }
}
