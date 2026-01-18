# ⚡ Quick Start

Get the **Resonance Rehab** project up and running locally in minutes.

## Prerequisites

- **Node.js**: Version 18.0 or higher.
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`.

## 1. Clone the Repository

```bash
git clone https://github.com/incial/resonance.git
cd resonance
```

## 2. Install Dependencies

We use `pnpm` for efficient package management.

```bash
pnpm install
```

## 3. Run Development Server

Start the local development server with Vite.

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app.

## 4. Build for Production

Create an optimized build for deployment.

```bash
pnpm build
```

The output will be in the `dist/` directory. You can preview the production build locally:

```bash
pnpm preview
```

## 5. Project Scripts

| Script | Description |
| :--- | :--- |
| `dev` | Starts the Vite development server |
| `build` | Builds the app for production |
| `lint` | Runs ESLint to check for code quality issues |
| `preview` | Serves the production build locally for testing |
