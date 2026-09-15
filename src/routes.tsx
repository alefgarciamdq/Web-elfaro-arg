import React from 'react';
import { RouteObject } from 'react-router-dom';
import App from './App';
import Home from './components/Home';

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
        path: 'asociacion',
        lazy: async () => {
          const { default: Asociacion } = await import('./components/Asociacion');
          return { Component: Asociacion };
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
        path: 'contacto',
        lazy: async () => {
          const { default: Contacto } = await import('./components/Contacto');
          return { Component: Contacto };
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
        path: '*',
        lazy: async () => {
          const { default: NotFound } = await import('./components/NotFound');
          return { Component: NotFound };
        }
      },
    ],
  },
];

