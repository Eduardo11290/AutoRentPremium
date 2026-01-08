namespace CarRent.Backend.Models
{
    public class CarCategory
    {
        public string Category { get; set; } = string.Empty;
        public List<Car> Cars { get; set; } = new();
    }
}