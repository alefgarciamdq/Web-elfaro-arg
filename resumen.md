# Resumen Técnico y Estado del Proyecto · El Faro Argentina

Documento de contexto técnico y arquitectura para el proyecto **El Faro Argentina** (`elfaro-argentina`), copia independiente para el sitio de Mar del Plata (`https://programaelfaro.com.ar`).

---

## 1. Arquitectura y Estructura de Carpetas

El proyecto está estructurado como una **Single Page Application (SPA)** con capacidades de **Generación de Sitios Estáticos (SSG)** mediante `vite-react-ssg`.

```
elfaro-argentina/
├── scripts/                        # Scripts de automatización y post-procesamiento de build
│   ├── fetch-reviews.mjs           # Pre-build: Obtención de testimonios y valoraciones
│   ├── sanitize-content.mjs        # Sanitización de contenidos antes de renderizado SSG
│   ├── generate-sitemap.ts         # Generador automático de sitemap.xml
│   ├── patch-vite-react-ssg.mjs    # Parche post-instalación de paquete SSG
│   └── post-build-fix.mjs          # Corrección de script hash SSG al <head> en HTMLs de dist/
├── src/                            # Código fuente principal
│   ├── components/                 # Componentes React (Páginas, Secciones y UI)
│   │   ├── guide/                  # Componentes guía e interactivos
│   │   │   └── AnimatedStepLoop.tsx # Bucle animado para secuencias de pasos
│   │   ├── Home.tsx                # Página principal (Home) adaptada a Argentina
│   │   ├── Layout.tsx              # Estructura principal (Header / Nav / Footer / WhatsApp)
│   │   ├── Asociacion.tsx          # Historia y orígenes comunitarios en Mar del Plata (1993)
│   │   ├── Historia.tsx            # Trayectoria de 30 años en salud mental
│   │   ├── Contacto.tsx            # Formulario de contacto y datos de sede Garay 2073
│   │   ├── QuienesSomos.tsx        # Presentación del equipo interdisciplinar (diseño claro)
│   │   ├── AdiccionesMarDelPlata.tsx                  # Ruta /adicciones-mar-del-plata
│   │   ├── PsicologoMarDelPlata.tsx                   # Ruta /psicologo-mar-del-plata
│   │   ├── ComoPedirAyudaPsicologiaMarDelPlata.tsx    # Ruta /como-pedir-ayuda-psicologia-mar-del-plata
│   │   ├── TerapiaMarDelPlata.tsx                     # Ruta /terapia-mar-del-plata
│   │   └── ...                     # Otros componentes y artículos del blog
│   ├── data/                       # Almacenes de datos y metadatos
│   │   ├── blogPosts.ts            # Entradas de blog y recursos
│   │   ├── blogPostsMeta.ts        # Metadatos para sitemap y rutas estáticas
│   │   └── reviews.json            # Opiniones y testimonios
│   ├── utils/                      # Utilidades de frontend
│   │   ├── animations.ts           # Variantes reutilizables de Framer Motion
│   │   └── telemetry.ts            # Seguimiento de clics (WhatsApp, Teléfono, Formulario)
│   ├── App.tsx                     # Wrapper de aplicación principal (<Layout><Outlet /></Layout>)
│   ├── index.css                   # Sistema de diseño global y tokens Tailwind v4
│   ├── main.tsx                    # Punto de entrada SSG / SPA (`ViteReactSSG`)
│   ├── routes.tsx                  # Definición centralizada de rutas React Router + SSG
│   └── types.ts                    # Interfaces y tipos de TypeScript
├── package.json                    # Dependencias y scripts del proyecto
├── vite.config.ts                  # Configuración de Vite, Tailwind v4 y Vite React SSG
└── tsconfig.json                   # Configuración del compilador TypeScript
```

---

## 2. Stack Tecnológico

| Capa / Herramienta | Tecnología / Versión | Descripción / Uso |
| :--- | :--- | :--- |
| **Librería Core** | React 19.0.0 | Interfaz de usuario interactiva y componentes basados en Hooks. |
| **Lenguaje** | TypeScript ~5.8.2 | Tipado estático estricto. Análisis continuo con `tsc --noEmit`. |
| **Build Tool / Bundler** | Vite ^6.2.0 | Servidor de desarrollo ultra rápido y empaquetado de producción. |
| **SSG (Static Site Generator)** | `vite-react-ssg` ^0.9.1-beta.1 | Prerrenderizado de HTML estático por ruta para optimización SEO. |
| **Critical CSS** | `beasties` ^0.1.0 | Inyección de CSS crítico en el `<head>` durante el proceso de build. |
| **Estilos & UI** | Tailwind CSS v4 (`@tailwindcss/vite`) | Framework utility-first configurado mediante `@import "tailwindcss"` y `@theme`. |
| **Enrutado** | `react-router-dom` ^6.28.0 | Enrutado del cliente con soporte para `lazy` loading y `getStaticPaths`. |
| **Animaciones** | `framer-motion` ^12.35.1 | Transiciones de página, componentes interactivos y animaciones al hacer scroll. |
| **Iconografía** | `lucide-react` ^0.546.0 | Set de íconos vectoriales SVG. |
| **SEO & Metadatos** | `react-helmet-async` 3.0.0 | Gestión dinámica de `<title>`, `<meta>` og/twitter y `<link canonical>`. |

### Configuración del Sistema de Color (Tailwind CSS v4 en `src/index.css`)

El proyecto incluye dos sistemas de color integrados en `@theme`:

1. **Paleta Clásica (Light Theme)**:
   - Sand (`#E6DFD3`), Olive (`#5A5A40`), Gold (`#D4AF37`), Terra (`#C06C55`), Offwhite (`#FBF8F1`), Ink (`#1A1A1A`).

2. **Paleta Oscura (El Faro Argentina)**:
   - `--color-faro-ink: #F6F2EA` (Texto principal claro/crema)
   - `--color-faro-bg: #1F2A22` (Fondo verde oscuro principal)
   - `--color-faro-bg-alt: #33402F` (Fondo secundario / tarjetas / navbar)
   - `--color-faro-olive: #4F5D49` (Acentos verdes)
   - `--color-faro-olive-light: #6F7C63` (Verde claro)
   - `--color-faro-gold: #A98B5A` (Dorado accesible de acento)
   - `--color-faro-terra: #7A6355` (Tierra / Terracota suave)

---

## 3. Componentes Principales y Convenciones de Diseño/Código

### Componentes Clave

1. **`src/components/Layout.tsx`**:
   - **Navbar**: Estilizado con `bg-faro-bg-alt/80 backdrop-blur-md`, marca "El Faro Argentina", teléfono fijo de Mar del Plata (`+54 223 4921953`) y botón CTA "HABLEMOS".
   - **Floating WhatsApp**: Botón flotante desplegable adaptado a Mar del Plata (`+54 9 2235 60-7009`).
   - **Footer**: Información institucional de la sede en Garay 2073, Mar del Plata, enlaces legales y navegación principal.

2. **`src/components/Home.tsx`**:
   - Totalmente adaptado al **tema oscuro** (`bg-faro-bg text-faro-ink`).
   - **Hero**: Fotografía aclarada (`opacity-55 mix-blend-luminosity`), título de orientación y acompañamiento humano.
   - **Trayectoria**: Frase destacada `"30 años cerca de vos, de la ciudad y su gente"`.
   - **Proceso**: Integración del componente interactivo `<AnimatedStepLoop steps={processSteps} variant="dark" />`.

3. **`src/components/Asociacion.tsx`**:
   - Orígenes institucionales de 1993 (Pastoral de Drogadependencia, Hospital Materno Infantil de Mar del Plata).
   - Adaptada al tema oscuro de Argentina.

4. **`src/components/Historia.tsx`**:
   - Cronología institucional de 30 años. Adaptada a la paleta oscura de Argentina y datos locales.

5. **`src/components/Contacto.tsx`**:
   - Formulario de contacto integrado con Formspree, prioridad a WhatsApp Mar del Plata y datos de la sede Garay 2073. Adaptado al tema oscuro.

6. **`src/components/QuienesSomos.tsx`**:
   - Presentación del equipo profesional interdisciplinar. Mantenido intencionalmente con el diseño claro original.

7. **Rutas Locales de Mar del Plata**:
   - `AdiccionesMarDelPlata.tsx`, `PsicologoMarDelPlata.tsx`, `ComoPedirAyudaPsicologiaMarDelPlata.tsx`, `TerapiaMarDelPlata.tsx`.

---

## 4. Tareas y Secciones Pendientes

- [ ] **Estructura Legal/Asociativa en `Asociacion.tsx`**:
  - *Pendiente de confirmación*: Definir el texto relativo a la figura jurídica (fundación vs. asociación civil) y composición actual del equipo directivo. (Nota registrada en el archivo).
- [ ] **Poblado de Contenido en Rutas Locales de Mar del Plata**:
  - Completar los textos y guías detalladas en las 4 páginas de servicio local recién registradas (`/adicciones-mar-del-plata`, `/psicologo-mar-del-plata`, `/como-pedir-ayuda-psicologia-mar-del-plata`, `/terapia-mar-del-plata`).
- [ ] **Depuración de Rutas Heredadas de España**:
  - Evaluar la transición o redirección de rutas heredadas del proyecto anterior (`/valencia`, `/adicciones-valencia`, etc.) según la estrategia de dominio propio de Argentina (`programaelfaro.com.ar`).

---

*Fecha de actualización: 16 de Agosto de 2026*
