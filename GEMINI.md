# Gemini Project Context: Nuxt.js E-commerce Frontend

This document provides a summary of the project to be used as context for future AI-assisted development sessions.

## Project Overview

This is a frontend for an e-commerce application named "Sayur" (as per `package.json`). It is built using the Nuxt.js 3 framework (a Vue.js framework). The application features user authentication (signup, signin, forgot password), profile management, and is structured to interact with a backend API for user data and other e-commerce functionalities.

### Key Technologies

*   **Framework**: [Nuxt.js](https://nuxt.com/) v3
*   **UI Library**: [Vue.js](https://vuejs.org/) v3 (using the Composition API with `<script setup>`)
*   **State Management**: [Pinia](https://pinia.vuejs.org/) for centralized state management. The `stores/auth.js` file contains the logic for authentication and user state.
*   **Styling**:
    *   [Tailwind CSS](https://tailwindcss.com/) is the primary utility-first CSS framework. Configuration is in `tailwind.config.js`.
    *   [Nuxt UI](https://ui.nuxt.com/) is used for pre-built UI components.
    *   A legacy stylesheet (`assets/css/theme.min.css`) and Bootstrap are also included.
*   **Icons**: [Tabler Icons](https://tabler-icons.io/)
*   **Language**: The project uses both TypeScript and JavaScript.

### Architecture

The project follows the standard Nuxt 3 directory-based structure:

*   `pages/`: Contains the application's pages and defines the routing (e.g., `index.vue`, `auth/signin.vue`).
*   `layouts/`: Defines the main layouts for pages (e.g., `default.vue`, `auth.vue`). The default layout includes a common `Header` and `Footer`.
*   `components/`: Stores reusable Vue components.
*   `stores/`: Contains Pinia store modules for global state management. `auth.js` is a key file that manages user authentication state and actions by calling a backend API.
*   `nuxt.config.ts`: The main configuration file for the Nuxt application, where modules, CSS, and runtime configurations are defined.
*   `app.vue`: The main entrypoint component for the application.

## Building and Running

The project uses `npm` as the package manager. The following commands are available in `package.json`:

*   **Run development server:**
    ```bash
    npm run dev
    ```
    The server will be available at `http://localhost:3000`.

*   **Build for production:**
    ```bash
    npm run build
    ```

*   **Preview production build:**
    ```bash
    npm run preview
    ```

*   **Static site generation:**
    ```bash
    npm run generate
    ```

## Development Conventions

*   **API Interaction**: The application communicates with a backend API. The base URL for the user-related API is configured in `nuxt.config.ts` via the runtime environment variable `NUXT_USER_API_BASE_URL`.
*   **Authentication**: Authentication is handled by the `stores/auth.js` Pinia store. It performs API calls for sign-in, sign-up, etc., and stores the user's authentication token and profile information in browser cookies (`token` and `user`).
*   **Styling**: New components should be styled using Tailwind CSS classes.
*   **State Management**: For new global state, create a new Pinia store file in the `stores/` directory or add to an existing one.
