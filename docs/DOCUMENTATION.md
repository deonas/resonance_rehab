# 📖 Documentation & Architecture

## Project Structure

This project follows a **Feature-First Architecture** to ensure scalability and maintainability.

```
src/
├── assets/          # Static assets (images, icons)
├── features/        # Feature-based modules (THE CORE)
│   ├── approach/    # Logic & UI for "Our Approach"
│   ├── contact/     # Contact forms and logic
│   ├── landing/     # Landing page components
│   └── ...
├── shared/          # Shared utilities and components
│   ├── components/  # Reusable UI components (Buttons, Inputs)
│   ├── hooks/       # Global custom hooks
│   └── utils/       # Helper functions
├── styles/          # Global styles (Tailwind, etc.)
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

## 🆕 Tech Stack Details

### React 19
We leverage the latest React 19 features for improved performance and simpler state management. Functional components and Hooks are strictly used.

### Vite
Vite is used as the build tool for lightning-fast HMR (Hot Module Replacement) and optimized production builds.
- Configured in `vite.config.js` (if present) or default Vite config.

### Tailwind CSS v4
We use Tailwind CSS v4 for utility-first styling.
- **Configuration**: Native CSS configuration.
- **Best Practices**: heavily relies on `shared/components/ui` for consistency.

### Animation
- **Framer Motion**: Used for complex component transitions and gesture-based animations.
- **GSAP**: Used for high-performance timeline-based animations.

## 🧩 Key Conventions

1.  **Component Colocation**: Keep components, hooks, and utils related to a specific feature inside that feature's folder.
2.  **Shared UI**: Generic components (buttons, cards) belong in `src/shared/components/ui`.
3.  **Naming**:
    - Components: `PascalCase.jsx`
    - Hooks: `useCamelCase.js`
    - Utils: `camelCase.js`

## 🚀 Deployed Environment
(Add deployment details here, e.g., Vercel, Netlify, or custom server)
