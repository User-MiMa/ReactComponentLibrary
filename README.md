# React Component Library

**Español:** Biblioteca de componentes reutilizables en React: Button, Menu (compuesto + contexto), Avatar, Star y Toggle/MenuWithToggle. Construida con Vite + React 19.
> **Nota:** Este proyecto es un ejercicio de aprendizaje diseñado principalmente para demostrar **componentes compuestos, Context API y hooks personalizados** en React, con **testing** con Vitest y Testing Library.

**English:** Reusable React component library: Button, Menu (compound + Context), Avatar, Star and Toggle/MenuWithToggle. Built with Vite + React 19.
> **Note:** This project is a learning exercise designed primarily to demonstrate **compound components, Context API and custom hooks** in React, with **testing** using Vitest and Testing Library.

---

<details>
<summary>🏁 Inicio Rápido / Quick Start</summary>

**Español:**
1. Clona el repositorio (HTTPS, SSH o GitHub CLI).
2. Ejecuta `pnpm install` para instalar dependencias.
3. Para desarrollo local: `pnpm dev`

**English:**
1. Clone repository (HTTPS, SSH or GitHub CLI).
2. Run `pnpm install` to install dependencies.
3. For local development: `pnpm dev`

</details>

<details>
<summary>📁 Archivos del proyecto / Project files</summary>

**Español:**
- `src/index.html` — Archivo HTML principal (dentro de `src/` gracias a `root` en Vite)
- `src/index.jsx` — Punto de entrada React (`createRoot`)
- `src/App.jsx` — Componente raíz que compone Button, Menu, Avatar, Toggle/MenuWithToggle y Star (demo con arrays `sports`/`food`)
- `src/components/Button/Button.jsx` — Botón genérico que renderiza `props.children`
- `src/components/Menu/Menu.jsx` + `MenuContext.js` + `MenuButton.jsx` + `MenuDropdown.jsx` + `MenuDropdownItem.jsx` — Patrón compound: `Menu` provee `{open,toggleOpen}` vía Context
- `src/components/Toggle/Toggle.jsx` + `ToggleContext.jsx` + `ToggleButton.jsx` + `ToggleDisplay.jsx` — Patrón compound: provee `{display,toggle}`
- `src/components/MenuWithToggle/MenuWithToggle.jsx` + `MenuWithToggleButton.jsx` + `MenuDropdownWithToggle.jsx` — Variante de Menu integrada con Toggle (composición en `App.jsx:42-55`)
- `src/components/Avatar/Avatar.jsx` — 3 variantes: con `src` (imagen), con `children` (iniciales), o icono por defecto (`IoPersonSharp`)
- `src/components/Star/Star.jsx` — Estrella toggleable (`BsStar`/`BsStarFill`) usando `useToggle`
- `src/hooks/useToggle.js` — Hook personalizado que devuelve `[toggled, hookToggleFunction]`
- `src/index.css` — Estilos globales (layout flex, botones, `.menu*`, `.avatar*`, `.star.filled`)
- `src/imgs/pfp.png` — Imagen de ejemplo para Avatar
- `src/test-setup.js` — Configuración de jest-dom para Vitest
- `src/components/{Button,Menu,MenuWithToggle,Toggle,Star,Avatar}/*.test.jsx` — Tests de cada componente (5-6 suites)
- `vite.config.js` — Configuración de Vite: `root: 'src'`, plugin React, `outDir: '../dist'`, Vitest (`jsdom`, `globals`, `v8`)
- `package.json` / `pnpm-lock.yaml` — Dependencias del proyecto
- `LICENSE` — MIT

**English:**
- `src/index.html` — Main HTML file (inside `src/` thanks to `root` in Vite)
- `src/index.jsx` — React entry point (`createRoot`)
- `src/App.jsx` — Root component composing Button, Menu, Avatar, Toggle/MenuWithToggle and Star (demo with `sports`/`food` arrays)
- `src/components/Button/Button.jsx` — Generic button rendering `props.children`
- `src/components/Menu/...` — Compound pattern: `Menu` provides `{open,toggleOpen}` via Context
- `src/components/Toggle/...` — Compound pattern: provides `{display,toggle}`
- `src/components/MenuWithToggle/...` — Menu variant integrated with Toggle (composition in `App.jsx:42-55`)
- `src/components/Avatar/Avatar.jsx` — 3 variants: `src` (image), `children` (initials), or default icon (`IoPersonSharp`)
- `src/components/Star/Star.jsx` — Toggleable star (`BsStar`/`BsStarFill`) using `useToggle`
- `src/hooks/useToggle.js` — Custom hook returning `[toggled, hookToggleFunction]`
- `src/index.css` — Global styles (flex layout, buttons, `.menu*`, `.avatar*`, `.star.filled`)
- `src/imgs/pfp.png` — Sample image for Avatar
- `src/test-setup.js` — jest-dom setup for Vitest
- `src/components/*/*.test.jsx` — Tests for each component (5-6 suites)
- `vite.config.js` — Vite configuration: `root: 'src'`, React plugin, `outDir: '../dist'`, Vitest (`jsdom`, `globals`, `v8`)
- `package.json` / `pnpm-lock.yaml` — Project dependencies
- `LICENSE` — MIT

</details>

<details>
<summary>▶️ Cómo empezar a usarlo / How to start using it</summary>

### Opción 1: Localmente (servidor de desarrollo) / Option 1: Locally (dev server)

```bash
pnpm install
pnpm dev
```

**Español:**
- Inicia el servidor de desarrollo de Vite con recarga en caliente
- Disponible en `http://localhost:5173`

**English:**
- Starts Vite development server with hot reload
- Available at `http://localhost:5173`

### Opción 2: Build de producción / Option 2: Production build

```bash
pnpm build
pnpm preview
```

</details>

<details>
<summary>📦 ¿Qué necesitas? / What you need?</summary>

**Español:**
- Node.js 20+ (para desarrollo local)
- pnpm (gestor de paquetes)

**English:**
- Node.js 20+ (for local development)
- pnpm (package manager)

</details>

<details>
<summary>⚙️ Cómo funciona / How it works</summary>

**Español:**
1. `Menu` guarda `open` con `useState` y expone `toggleOpen` vía `MenuContext` (`src/components/Menu/Menu.jsx:6`). `MenuButton` consume `toggleOpen` y `MenuDropdown` renderiza condicionalmente según `open`.
2. `Toggle` hace lo mismo con `display`/`toggle` vía `ToggleContext` (`src/components/Toggle/Toggle.jsx:6`). `ToggleButton` dispara `toggle` y `ToggleDisplay` muestra `children` solo si `display` es true.
3. `MenuWithToggle` reutiliza las clases `.menu`/`.menu-dropdown` pero se anida dentro de `Toggle` para combinar ambos contextos, como se ve en `App.jsx:42-55`.
4. `Star` y otros componentes simples (`Button`, `Avatar`) usan `useToggle` o props directas para variantes visuales.

**English:**
1. `Menu` stores `open` with `useState` and exposes `toggleOpen` via `MenuContext` (`src/components/Menu/Menu.jsx:6`). `MenuButton` consumes `toggleOpen` and `MenuDropdown` conditionally renders based on `open`.
2. `Toggle` does the same with `display`/`toggle` via `ToggleContext` (`src/components/Toggle/Toggle.jsx:6`). `ToggleButton` triggers `toggle` and `ToggleDisplay` shows `children` only when `display` is true.
3. `MenuWithToggle` reuses `.menu`/`.menu-dropdown` classes but nests inside `Toggle` to combine both contexts, as shown in `App.jsx:42-55`.
4. `Star` and simple components (`Button`, `Avatar`) use `useToggle` or direct props for visual variants.

</details>

<details>
<summary>🧱 Estructura de archivos / File structure</summary>

Entry points:
```
├── src/index.jsx          → Punto de entrada (renderiza App en #root)
├── src/index.html         → Archivo HTML principal
└── src/App.jsx            → Componente raíz: demo de todos los componentes
```

Componentes:
```
├── components/
│   ├── Button/Button.jsx
│   ├── Menu/{Menu.jsx, MenuContext.js, MenuButton.jsx, MenuDropdown.jsx, MenuDropdownItem.jsx}
│   ├── MenuWithToggle/{MenuWithToggle.jsx, MenuWithToggleButton.jsx, MenuDropdownWithToggle.jsx}
│   ├── Toggle/{Toggle.jsx, ToggleContext.jsx, ToggleButton.jsx, ToggleDisplay.jsx}
│   ├── Avatar/Avatar.jsx
│   └── Star/Star.jsx
├── hooks/useToggle.js     → Hook personalizado
└── imgs/pfp.png
```

Estilos:
```
├── src/index.css          → Estilos globales (flex, menu, avatar, star)
```

Testing:
```
├── src/test-setup.js      → Configuración jest-dom
├── src/components/Button/Button.test.jsx
├── src/components/Menu/Menu.test.jsx
├── src/components/MenuWithToggle/MenuWithToggle.test.jsx
├── src/components/Toggle/Toggle.test.jsx
├── src/components/Star/Star.test.jsx
└── src/components/Avatar/Avatar.test.jsx
```

Configuración:
```
├── vite.config.js         → Root: 'src', plugin React, outDir: '../dist', Vitest
├── package.json
└── pnpm-lock.yaml
```

**Español:**
- `index.jsx` es el punto de entrada que renderiza `<App/>` en `#root`
- `App.jsx` compone todos los componentes como catálogo/demo
- `Menu` y `Toggle` son ejemplos de compound components con Context
- `vite.config.js` usa `root: 'src'` por lo que `index.html` vive dentro de `src/`

**English:**
- `index.jsx` is the entry point that renders `<App/>` into `#root`
- `App.jsx` composes all components as a catalog/demo
- `Menu` and `Toggle` are examples of compound components with Context
- `vite.config.js` uses `root: 'src'` so `index.html` lives inside `src/`

</details>

<details>
<summary>🧪 Testing</summary>

**Español:**
Usa **Vitest** junto con **Testing Library** y **jest-dom** (sin MSW, no hay fetch).

- **`src/test-setup.js`** — Importa `@testing-library/jest-dom/vitest` para matchers en jsdom.
- **`src/components/Button/Button.test.jsx`**, **`Menu.test.jsx`**, **`MenuWithToggle.test.jsx`**, **`Toggle.test.jsx`**, **`Star.test.jsx`**, **`Avatar.test.jsx`** — Verifican renderizado, toggle de dropdowns y variantes de Avatar/Star.
- Configuración en `vite.config.js:10`: `environment: 'jsdom'`, `globals: true`, `coverage: {provider:'v8', reporter:['text','html']}`.

**Ejecutar tests:**
```bash
pnpm test               # ejecuta la suite una vez
pnpm test:coverage      # ejecuta los tests con cobertura (proveedor v8)
```

> La carpeta `coverage/` está en `.gitignore` (generada en raíz); `src/coverage/` actual está trackeada y debería moverse/ignorarse.

**English:**
It uses **Vitest** along with **Testing Library** and **jest-dom** (no MSW, no fetch).

- **`src/test-setup.js`** — Imports `@testing-library/jest-dom/vitest` for jsdom matchers.
- **`Button.test.jsx`**, **`Menu.test.jsx`**, **`MenuWithToggle.test.jsx`**, **`Toggle.test.jsx`**, **`Star.test.jsx`**, **`Avatar.test.jsx`** — Verify rendering, dropdown toggling and Avatar/Star variants.
- Config in `vite.config.js:10`: `environment: 'jsdom'`, `globals: true`, `coverage: {provider:'v8', reporter:['text','html']}`.

**Running tests:**
```bash
pnpm test               # runs the suite once
pnpm test:coverage      # runs tests with coverage (v8 provider)
```

> The `coverage/` folder is in `.gitignore` (generated at root); current `src/coverage/` is tracked and should be moved/ignored.

</details>
