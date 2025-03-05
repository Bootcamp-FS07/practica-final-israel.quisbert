# practica-final-israel.quisbert

## Folder Explanation

1. **`core/`**: Contains application-wide singleton services (e.g., `AuthService`, `ApiService`), models, and utilities. This folder is loaded once and remains in memory throughout the app's lifecycle.
2. **`features/`**: Contains feature-specific folders, each encapsulating its functionality (e.g., a `dashboard` or `user-profile`). These folders often include their own components, services, and routing configuration.
3. **`shared/`**: Contains reusable components (e.g., buttons, headers), directives, and pipes that can be shared across the project.
4. **`environments/`**: Manages environment-specific configurations, like API URLs for development and production.
5. **`styles/`**: Holds global styles applied across the entire application.

# Setup project

## Copy environment files

```bash
cp src/environments/environment.development.sample.ts src/environments/environment.development.ts
```

## Install dependencies

Use nodejs 22.12.0 (LTS) to install dependencies (`nvm use 22.12.0`)

```bash
npm install
```

# Run project

## Development

```bash
ng serve
```