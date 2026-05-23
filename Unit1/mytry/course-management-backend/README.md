# Node/Express Backend Strukur
```bash
course-management-backend/
  src/
    controllers/     # Request/Response handling (wie @RestController)
    services/        # Business-Logik (wie @Service)
    repositories/    # DB-Zugriff (wie @Repository)
    models/          # Datentypen/Interfaces
    middleware/      # Auth, Logging, Error-Handling
  __tests__/         # alle Tests zentral
  .env               # wie application.properties
  package.json
  tsconfig.json
```