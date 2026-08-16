import React from 'react';
import { RouteObject } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import { blogPostsMeta } from './data/blogPostsMeta';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'adicciones-mar-del-plata',
        lazy: async () => {
          const { default: AdiccionesMarDelPlata } = await import('./components/AdiccionesMarDelPlata');
          return { Component: AdiccionesMarDelPlata };
        }
      },
      {
        path: 'psicologo-mar-del-plata',
        lazy: async () => {
          const { default: PsicologoMarDelPlata } = await import('./components/PsicologoMarDelPlata');
          return { Component: PsicologoMarDelPlata };
        }
      },
      {
        path: 'como-pedir-ayuda-psicologia-mar-del-plata',
        lazy: async () => {
          const { default: ComoPedirAyudaPsicologiaMarDelPlata } = await import('./components/ComoPedirAyudaPsicologiaMarDelPlata');
          return { Component: ComoPedirAyudaPsicologiaMarDelPlata };
        }
      },
      {
        path: 'terapia-mar-del-plata',
        lazy: async () => {
          const { default: TerapiaMarDelPlata } = await import('./components/TerapiaMarDelPlata');
          return { Component: TerapiaMarDelPlata };
        }
      },
      {
        path: 'argentina',
        lazy: async () => {
          const { default: Argentina } = await import('./components/Argentina');
          return { Component: Argentina };
        }
      },
      {
        path: 'valencia',
        lazy: async () => {
          const { default: Valencia } = await import('./components/Valencia');
          return { Component: Valencia };
        }
      },
      {
        path: 'psicologo-valencia',
        lazy: async () => {
          const { default: PsicologoValencia } = await import('./components/PsicologoValencia');
          return { Component: PsicologoValencia };
        }
      },
      {
        path: 'psicologo-adolescentes-valencia',
        lazy: async () => {
          const { default: PsicologoAdolescentesValencia } = await import('./components/PsicologoAdolescentesValencia');
          return { Component: PsicologoAdolescentesValencia };
        }
      },
      {
        path: 'adicciones-valencia',
        lazy: async () => {
          const { default: AdiccionesValenciaNueva } = await import('./components/AdiccionesValenciaNueva');
          return { Component: AdiccionesValenciaNueva };
        }
      },
      {
        path: 'terapia-pareja-valencia',
        lazy: async () => {
          const { default: TerapiaParejaValencia } = await import('./components/TerapiaParejaValencia');
          return { Component: TerapiaParejaValencia };
        }
      },
      {
        path: 'psicologo-online-valencia',
        lazy: async () => {
          const { default: PsicologoOnlineValencia } = await import('./components/PsicologoOnlineValencia');
          return { Component: PsicologoOnlineValencia };
        }
      },
      {
        path: 'ansiedad-valencia',
        lazy: async () => {
          const { default: AnsiedadValencia } = await import('./components/AnsiedadValencia');
          return { Component: AnsiedadValencia };
        }
      },
      {
        path: 'orientacion-familias-adicciones-valencia',
        lazy: async () => {
          const { default: OrientacionFamiliasValencia } = await import('./components/OrientacionFamiliasValencia');
          return { Component: OrientacionFamiliasValencia };
        }
      },
      {
        path: 'terapia-familiar-valencia',
        lazy: async () => {
          const { default: TerapiaFamiliarValencia } = await import('./components/TerapiaFamiliarValencia');
          return { Component: TerapiaFamiliarValencia };
        }
      },
      {
        path: 'cuando-pedir-ayuda-psicologica-valencia',
        lazy: async () => {
          const { default: CuandoPedirAyudaPsicologicaValencia } = await import('./components/CuandoPedirAyudaPsicologicaValencia');
          return { Component: CuandoPedirAyudaPsicologicaValencia };
        }
      },
      {
        path: 'cuando-pedir-ayuda-pareja-valencia',
        lazy: async () => {
          const { default: CuandoPedirAyudaParejaValencia } = await import('./components/CuandoPedirAyudaParejaValencia');
          return { Component: CuandoPedirAyudaParejaValencia };
        }
      },
      {
        path: 'no-hace-falta-tocar-fondo',
        lazy: async () => {
          const { default: NoHaceFaltaTocarFondo } = await import('./components/NoHaceFaltaTocarFondo');
          return { Component: NoHaceFaltaTocarFondo };
        }
      },
      {
        path: 'como-saber-si-es-una-adiccion-valencia',
        lazy: async () => {
          const { default: GuiaAdicciones } = await import('./components/GuiaAdicciones');
          return { Component: GuiaAdicciones };
        }
      },
      {
        path: 'pantallas-ninos-cuando-preocuparse',
        lazy: async () => {
          const { default: PantallasNinosCuandoPreocuparse } = await import('./components/PantallasNinosCuandoPreocuparse');
          return { Component: PantallasNinosCuandoPreocuparse };
        }
      },
      {
        path: 'historia',
        lazy: async () => {
          const { default: Historia } = await import('./components/Historia');
          return { Component: Historia };
        }
      },
      {
        path: 'quienes-lo-hacemos',
        lazy: async () => {
          const { default: QuienesSomos } = await import('./components/QuienesSomos');
          return { Component: QuienesSomos };
        }
      },
      {
        path: 'recursos',
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Recursos } = await import('./components/Recursos');
              return { Component: Recursos };
            }
          },
          {
            path: 'voces',
            children: [
              {
                index: true,
                lazy: async () => {
                  const { default: RecursosVoces } = await import('./components/RecursosVoces');
                  return { Component: RecursosVoces };
                }
              },
              {
                path: ':id',
                loader: async (args) => {
                  const module = await import('./components/BlogPost');
                  return module.loader(args);
                },
                lazy: async () => {
                  const { default: BlogPost } = await import('./components/BlogPost');
                  return { Component: BlogPost };
                },
                // @ts-ignore - vite-react-ssg custom property
                getStaticPaths: () => blogPostsMeta.filter(post => post.category === 'Las Voces del Faro').map(post => post.id)
              }
            ]
          },
          {
            path: 'alcohol-familia-como-ayudar-valencia',
            lazy: async () => {
              const { default: AlcoholFamiliaValencia } = await import('./components/AlcoholFamiliaValencia');
              return { Component: AlcoholFamiliaValencia };
            }
          },
          {
            path: 'juego-apuestas-como-ayudar-valencia',
            lazy: async () => {
              const { default: JuegoApuestasValencia } = await import('./components/JuegoApuestasValencia');
              return { Component: JuegoApuestasValencia };
            }
          },
          {
            path: 'cannabis-como-ayudar-valencia',
            lazy: async () => {
              const { default: CannabisValencia } = await import('./components/CannabisValencia');
              return { Component: CannabisValencia };
            }
          },
          {
            path: 'ansioliticos-como-ayudar-valencia',
            lazy: async () => {
              const { default: AnsioliticosValencia } = await import('./components/AnsioliticosValencia');
              return { Component: AnsioliticosValencia };
            }
          },
          {
            path: ':id',
            loader: async (args) => {
              const module = await import('./components/BlogPost');
              return module.loader(args);
            },
            lazy: async () => {
              const { default: BlogPost } = await import('./components/BlogPost');
              return { Component: BlogPost };
            },
            // @ts-ignore - vite-react-ssg custom property
            getStaticPaths: () => blogPostsMeta.filter(post => post.category !== 'Las Voces del Faro').map(post => post.id)
          },
        ]
      },
      {
        path: 'asociacion',
        lazy: async () => {
          const { default: Asociacion } = await import('./components/Asociacion');
          return { Component: Asociacion };
        }
      },
      {
        path: 'contacto',
        lazy: async () => {
          const { default: Contacto } = await import('./components/Contacto');
          return { Component: Contacto };
        }
      },
      {
        path: 'cita',
        lazy: async () => {
          const { default: Cita } = await import('./components/Cita');
          return { Component: Cita };
        }
      },
      {
        path: 'aviso-legal',
        lazy: async () => {
          const { default: AvisoLegal } = await import('./components/AvisoLegal');
          return { Component: AvisoLegal };
        }
      },
      {
        path: 'privacidad',
        lazy: async () => {
          const { default: Privacidad } = await import('./components/Privacidad');
          return { Component: Privacidad };
        }
      },
      {
        path: 'cookies',
        lazy: async () => {
          const { default: Cookies } = await import('./components/Cookies');
          return { Component: Cookies };
        }
      },
      {
        path: 'colabora',
        lazy: async () => {
          const { default: Colabora } = await import('./components/Colabora');
          return { Component: Colabora };
        }
      },
      {
        path: '*',
        lazy: async () => {
          const { default: NotFound } = await import('./components/NotFound');
          return { Component: NotFound };
        }
      },
    ],
  },
];
