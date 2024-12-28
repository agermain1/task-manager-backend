# 🌟 Task Manager Backend

¡Bienvenido al backend de **Task Manager**! Este proyecto proporciona las API necesarias para gestionar tareas, incluyendo funcionalidades como crear, leer, actualizar y eliminar tareas.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido usando las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para construir APIs RESTful.
- **MongoDB**: Base de datos NoSQL para almacenar tareas.
- **Swagger**: Documentación interactiva de las API.
- **Express-Validator**: Validación de datos en las solicitudes HTTP.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MongoDB](https://www.mongodb.com/) (local o en la nube)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

---

## ⚙️ Configuración del Entorno

Para ejecutar este proyecto de manera local, debes crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/task_manager


📌 Explicación de las Variables:
PORT: Define el puerto en el que se ejecutará el servidor (puedes cambiarlo si es necesario).
MONGO_URI: URL de conexión para la base de datos MongoDB.
🛠️ Instalación y Ejecución Local
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

Clona el Repositorio:


git clone https://github.com/tu-usuario/task-manager-backend.git
cd task-manager-backend
Instala las Dependencias:


npm install
Configura el Entorno: Crea el archivo .env como se indicó anteriormente.

Ejecuta el Servidor:


npm start
El servidor se ejecutará en http://localhost:4000 (o el puerto que hayas definido).


Instalación de MongoDB
Para que este proyecto funcione correctamente, necesitas tener MongoDB instalado y ejecutándose en tu computadora.

Recomendamos visitar la página oficial de MongoDB para encontrar las instrucciones más actualizadas y específicas para tu sistema operativo:

👉 Guía de Instalación de MongoDB: https://www.mongodb.com/docs/manual/installation/

Nota Importante:
Asegúrate de que MongoDB esté ejecutándose localmente antes de iniciar el backend del proyecto.
Por defecto, el proyecto utiliza la siguiente configuración para conectarse a MongoDB en el archivo .env:



📜 Documentación de las API
Este proyecto incluye documentación interactiva generada con Swagger. Una vez que el servidor esté en funcionamiento, accede a la documentación en la siguiente URL:


http://localhost:4000/api-docs
Funcionalidades Principales:
Visualización de los endpoints disponibles.
Ejecución de pruebas directamente desde la interfaz.
Detalles sobre las respuestas y parámetros requeridos.
🛤️ Rutas Principales
📌 Tareas
Método	Endpoint	Descripción
GET	/tasks	Obtiene todas las tareas.
POST	/tasks	Crea una nueva tarea.
PATCH	/tasks/:id	Actualiza una tarea existente.
DELETE	/tasks/:id	Elimina una tarea por ID.
✅ Validación de Datos
El backend utiliza Express-Validator para garantizar que los datos enviados por los clientes sean válidos y seguros. Esto incluye:

Validación de campos requeridos (por ejemplo, título de la tarea).
Validación de formatos (por ejemplo, IDs válidos de MongoDB).
Generación de mensajes de error claros en caso de fallos.
📦 Scripts Disponibles
npm start: Inicia el servidor en modo de producción.
npm run dev: Inicia el servidor en modo de desarrollo con recarga automática (usa nodemon).
npm test: Ejecuta pruebas (si están configuradas).
🛡️ Buenas Prácticas
No subas tu archivo .env al repositorio.
Usa variables de entorno diferentes para desarrollo y producción.
Configura la base de datos en un entorno seguro.
👨‍💻 Contribuciones
¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request si tienes alguna mejora o solución para este proyecto.

📝 Licencia
Este proyecto está bajo la Licencia MIT.
