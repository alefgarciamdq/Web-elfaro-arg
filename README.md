# El Faro Argentina — programaelfaro.com.ar

Sitio web de **El Faro**, centro de salud mental y adicciones en Mar del Plata, Argentina. Fundado en 1993 por Alejandro García.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **React Helmet Async** (SEO)
- **vite-react-ssg** (static site generation)
- **Vercel** (hosting)

## Estructura de páginas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Home` | Página principal |
| `/dispositivos` | `Dispositivos` | Centro de Día, Mediodía, Ambulatorio, Online |
| `/talleres` | `Talleres` | Psicodrama, NIP, Teatro, Podcast |
| `/historia` | `Historia` | Historia desde 1993 |
| `/quienes-lo-hacemos` | `QuienesSomos` | Equipo interdisciplinario |
| `/espana` | `Espana` | Mi Faro Valencia — proyección en España |
| `/recursos` | `Recursos` | Blog / artículos |
| `/recursos/:id` | `BlogPost` | Artículo individual |
| `/contacto` | `Contacto` | Formulario de contacto |

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

## Conexión con Mi Faro España

El sitio referencia a [mifaro.es](https://mifaro.es) como la proyección española de El Faro, de la misma forma en que mifaro.es referencia a El Faro Argentina.

## Contacto técnico

GitHub: [alefgarciamdq](https://github.com/alefgarciamdq)

---

© El Faro · Mar del Plata, Argentina · Desde 1993
