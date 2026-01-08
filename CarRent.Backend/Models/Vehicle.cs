namespace CarRent.Backend.Models
{
    // Abstractizare: Nu poți instanția un "Vehicul" generic
    public abstract class Vehicle
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public decimal Cost { get; set; }
        public string Description { get; set; } = string.Empty;
        
        // Polimorfism: Metodă virtuală ce poate fi suprascrisă
        public virtual string GetSummary()
        {
            return $"{Name} - {Cost} EUR/zi";
        }
    }
}