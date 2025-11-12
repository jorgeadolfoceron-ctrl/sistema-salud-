# Sistema de Salud Web

## Descripción
Este proyecto es un **sistema web de salud** desarrollado en **HTML, CSS y JavaScript**, diseñado para la gestión básica de pacientes y citas médicas. Está pensado como un prototipo funcional que permite:

- Login de usuarios.
- Registro y visualización de pacientes.
- Gestión de citas médicas.
- Navegación entre módulos de pacientes y citas.

El proyecto utiliza **`localStorage`** para almacenar datos de forma local, simulando una base de datos.

---

## Estructura del Proyecto
sistema-salud/
│
├── index.html # Página principal / login
├── css/
│ └── styles.css # Estilos generales
├── js/
│ └── app.js # Funcionalidades JS: login, pacientes y citas
├── modules/
│ ├── pacientes.html # Gestión de pacientes
│ └── citas.html # Gestión de citas
├── database/
│ └── db.json # Base de datos simulada en JSON
└── README.md # Documentación del proyecto

---

## Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/sistema-salud.git
Abrir index.html en un navegador web.

Iniciar sesión con usuarios de prueba:

Usuario: admin | Contraseña: 1234

Usuario: doctor | Contraseña: abcd

Navegar entre módulos:

Pacientes → agregar, ver y listar pacientes.

Citas → agregar y listar citas médicas.

Tecnologías Usadas

HTML5: Estructura de las páginas.

CSS3: Estilos y diseño responsivo.

JavaScript: Funcionalidad de login, gestión de pacientes y citas.

localStorage: Almacenamiento local de datos simulando base de datos.

Funcionalidades Futuras

Conexión a base de datos real (MySQL, MongoDB, SQLite).

Módulo de órdenes médicas.

Sistema de roles: administrador, doctor, enfermería.

Generación de reportes en PDF.

Diseño profesional y responsivo avanzado.

Autor

Jorge Adolfo Calambás Cerón
Ingeniero de Sistemas | Especialista en gestión de proyectos y desarrollo web

Correo: p20_89@hotmail.com

Ubicación: Popayán, Colombia

