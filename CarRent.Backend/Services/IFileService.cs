namespace CarRent.Backend.Services
{
    // Interfața permite Dependency Injection și Testare (Cerință Bonus)
    public interface IFileService
    {
        Task SaveDataAsync<T>(string filePath, T data);
        Task<T> LoadDataAsync<T>(string filePath);
    }
}