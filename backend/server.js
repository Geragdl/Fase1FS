const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/projects", (req, res) => {
  console.log("✅ Solicitud recibida");
  res.json({
    status: "success",
    data: [{ id: 1, name: "Proyecto Demo" }]
  });
});

const server = app.listen(PORT, () => {
  console.log(`\n✅ Servidor activo en http://localhost:${PORT}`);
  console.log("🔍 Prueba en tu navegador: http://localhost:3001/api/projects\n");
});

server.on("error", (error) => {
  console.error("🛑 Error al iniciar el servidor:");
  console.error(error);
  if (error.code === "EADDRINUSE") {
    console.error(`⚠️  El puerto ${PORT} está en uso`);
  }
});
