var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(p =>
  p
    .AllowAnyHeader()
    .AllowAnyOrigin()
    .AllowAnyMethod()
);

app.MapGet("/", () => "Hello World!");

var fileString = "";

app.MapPost("/fileUpload", (FileUploadRequestBody body) =>
{
  Console.WriteLine("in file upload");
  Console.WriteLine(body.Base64File);
  fileString = body.Base64File;
});

app.MapGet("/file", () =>
{
  return fileString;
});

app.Run();

record FileUploadRequestBody(
  string Base64File, string Name
);