using Microsoft.AspNetCore.Mvc;
using CarRent.Backend.Services;
using CarRent.Backend.Models;

namespace CarRent.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IWebHostEnvironment _env;

        public CarsController(IFileService fileService, IWebHostEnvironment env)
        {
            _fileService = fileService;
            _env = env;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            // Calea către fișierul JSON (pe care îl vom popula cu datele tale din JS)
            var path = Path.Combine(_env.ContentRootPath, "Data", "cars.json");
            
            var data = await _fileService.LoadDataAsync<List<CategoryWrapper>>(path);
            
            if (data == null) return NotFound("Nu s-au găsit mașini.");
            
            return Ok(data);
        }
    }
}