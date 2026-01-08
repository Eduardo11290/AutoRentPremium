using CarRent.Backend.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Configurare Dependențe (Generic Host)
// Aici înregistrăm serviciile noastre (Dependency Injection)
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Înregistrăm Wrapper-ul nostru pentru fișiere
builder.Services.AddSingleton<IFileService, FileService>();

// Configurare CORS (Ca să permită frontend-ului React de pe portul 5173 să ceară date)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // Portul frontend-ului tău
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// 2. Configurare Pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run(); // Rulează aplicația (Loop-ul principal)