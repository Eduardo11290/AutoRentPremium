using Microsoft.AspNetCore.Mvc;
using CarRent.Backend.Services;
using CarRent.Backend.Models;

namespace CarRent.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingsController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IWebHostEnvironment _env;
        private readonly string _filePath;

        public BookingsController(IFileService fileService, IWebHostEnvironment env)
        {
            _fileService = fileService;
            _env = env;
            // Calea unde se va salva fișierul cu rezervări
            _filePath = Path.Combine(_env.ContentRootPath, "Data", "bookings.json");
        }

        // POST: api/bookings
        // Primește o rezervare de la React și o salvează
        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] Booking booking)
        {
            // 1. Încărcăm rezervările existente
            var existingBookings = await _fileService.LoadDataAsync<List<Booking>>(_filePath) ?? new List<Booking>();

            // 2. Adăugăm noua rezervare
            existingBookings.Add(booking);

            // 3. Salvăm lista actualizată înapoi în fișier
            await _fileService.SaveDataAsync(_filePath, existingBookings);

            return Ok(new { message = "Rezervare salvată cu succes!", bookingId = booking.Id });
        }

        // GET: api/bookings
        // (Opțional) Dacă vrei să vezi istoricul rezervărilor
        [HttpGet]
        public async Task<IActionResult> GetBookings()
        {
            var bookings = await _fileService.LoadDataAsync<List<Booking>>(_filePath) ?? new List<Booking>();
            return Ok(bookings);
        }
    }
}