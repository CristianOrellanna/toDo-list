# Aplicación Web de Lista de Tareas

Una aplicación web simple para gestionar tareas.

## Introducción

Este proyecto es una aplicación web de lista de tareas diseñada para ayudar a los usuarios a organizar y gestionar sus tareas de manera eficiente. Proporciona una interfaz amigable para crear, actualizar y eliminar tareas, así como marcar tareas como completadas.

## Características

- Autenticación de usuario: Permite a los usuarios registrarse, iniciar sesión y cerrar sesión de manera segura.
- Gestión de tareas: Los usuarios pueden crear nuevas tareas, actualizar tareas existentes, marcar tareas como completadas y eliminar tareas.
- Diseño adaptable: La aplicación está diseñada para funcionar sin problemas en dispositivos de todos los tamaños, incluidos ordenadores de sobremesa, tabletas y teléfonos inteligentes.
- Persistencia de datos: Las tareas se almacenan en una base de datos, garantizando que los datos del usuario se conserven incluso después de que el usuario cierre la sesión o cierre el navegador.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Base de Datos**: MySQL
- **Gestión de Sesiones**: cookie-session
- **Cifrado de Contraseñas**: bcrypt.js

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/CristianOrellanna/toDo-list.git
```

2. Navegar al directorio del proyecto:

```bash
cd toDo-list
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar la base de datos MySQL:

- Crear una base de datos MySQL llamada `todo_list`.
- Importar el esquema de la base de datos desde `db/database.sql`.


5. Iniciar la aplicación:

```bash
npm start
```

6. Acceder a la aplicación en tu navegador web en

```bash 
http://localhost:3000
```

## Uso

1. Registrarse para una cuenta nueva o iniciar sesión con una cuenta existente.
2. Una vez iniciada la sesión, serás redirigido a la página de inicio donde podrás ver, crear, actualizar y eliminar tareas.
3. Para crear una nueva tarea, haz clic en el botón "Agregar Tarea" y completa los detalles de la tarea.
4. Para actualizar o eliminar una tarea existente, haz clic en los botones respectivos junto a la tarea.
5. También puedes marcar tareas como completadas marcando la casilla junto a la tarea.

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias para mejoras, por favor abre un issue o envía un pull request.

## Contacto

Para cualquier consulta o comentario, por favor contacta a [Cristian Orellana](https://github.com/CristianOrellanna).

