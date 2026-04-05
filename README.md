# ELMNT Backend 
**ELMNT** es una solución Full Stack diseñada para una marca de skincare minimalista. Este backend actúa como el núcleo del sistema, gestionando de forma segura el inventario de productos, la autenticación de usuarios y la persistencia de datos en la nube.

Se enfocó en la **escalabilidad** y la **integridad de los datos**, asegurando que cada entrada de producto cumpla con estrictas validaciones antes de impactar en la base de datos NoSQL.

----------

##  Funcionalidades Destacadas:

-   **Arquitectura Desacoplada:** Diseñado para integrarse perfectamente con un frontend en **Next.js**, utilizando una comunicación basada en JSON y cabeceras de seguridad.
    
-   **Gestión de Inventario Dinámica:** Endpoints optimizados para el manejo de stock, precios y metadatos de productos.
    
-   **Seguridad por Capas:** 
     -  **Auth:** Implementación de persistencia de sesión mediante JWT (JSON Web Tokens).
    
    -   **Cifrado de Credenciales:** Hashing de contraseñas de alta seguridad con `bcryptjs`.
        

    -    **Sanitización de Consultas:** Implementación de `mongo-sanitize` para mitigar ataques de inyección NoSQL.
    -   **Control de Acceso (CORS):** Configuración de políticas de origen cruzado restringidas a entornos de producción y desarrollo seguros.
        
-   **Validación de Esquemas:** Integración de **Joi** para espejar las validaciones de **Zod** del frontend, garantizando que el servidor nunca procese datos corruptos o incompletos.
    

----------

## Tech Stack
* **Entorno:** Node.js (ES Modules)
* **Framework:** Express.js 5
* **Base de Datos:** MongoDB Atlas (Mongoose)
* **Validación:** Joi
* **Seguridad:** JSON Web Tokens (JWT), Bcryptjs, CORS Policy, Mongo-Sanitize.
* **Logs:** Morgan (dev mode)

---
##  Estructura del Proyecto

```text
backend/
├── src/
│   ├── controllers/      # Lógica de manejo de peticiones (Auth, Products)
│   ├── middleware/       # Validaciones Joi y verificación de JWT
│   ├── models/           # Esquemas de Mongoose (User, Product)
│   ├── routes/           # Definición de endpoints de la API
│   ├── app.js            # Configuración de Express y Middlewares
│   └── index.js          # Punto de entrada y conexión a la DB
├── .env                  # Variables sensibles (No incluido en Git)
├── .env.example          # Plantilla de variables de entorno
├── .gitignore            # Archivos excluidos del repositorio
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del sistema
```
---

##  Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/PauDev1/elmnt-api.git
    ```
2.  **Instalar dependencias:**
    
    ```bash
    pnpm install
    ```
3.  **Variables de Entorno:**
    Crea un archivo `.env` basado en `.env.example` y completa los campos necesarios:
    - `MONGO_URI`: String de conexión de Atlas.
    - `JWT_SECRET`: Llave privada para los tokens.
    - `FRONTEND_URL`: URL permitida por CORS.

---

##  Endpoints Principales

### Autenticación (`/api/auth`)
* `POST /login` - Inicio de sesión y entrega de Token.

### Productos (`/api/products`)
* `GET /` - Listar todos los productos.
* `POST /` - Crear producto (**Protegido con JWT**).
* `PUT /:id` - Editar producto (**Protegido con JWT**).
* `DELETE /:id` - Eliminar producto (**Protegido con JWT**).

---
##  Contacto

Si tenés alguna duda sobre el proyecto o simplemente querés charlar sobre desarrollo, ¡no dudes en escribirme!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paola-lizarriba/)   [![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=astro&logoColor=white)](https://pao-portfolio.vercel.app/)

**Paola** - Full Stack Developer 