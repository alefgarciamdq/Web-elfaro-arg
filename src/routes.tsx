import React from 'react';
import { RouteObject } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Dispositivos from './components/Dispositivos';
import Talleres from './components/Talleres';
import Espana from './components/Espana';
import Historia from './components/Historia';
import QuienesSomos from './components/QuienesSomos';
import Recursos from './components/Recursos';
import BlogPost from './components/BlogPost';
import Contacto from './components/Contacto';
import AvisoLegal from './components/AvisoLegal';
import Privacidad from './components/Privacidad';
import Cookies from './components/Cookies';
import NotFound from './components/NotFound';

import { blogPosts } from './data/blogPosts';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dispositivos', element: <Dispositivos /> },
      { path: 'talleres', element: <Talleres /> },
      { path: 'espana', element: <Espana /> },
      { path: 'historia', element: <Historia /> },
      { path: 'quienes-lo-hacemos', element: <QuienesSomos /> },
      {
        path: 'recursos',
        children: [
          { index: true, element: <Recursos /> },
          {
            path: ':id',
            element: <BlogPost />,
            // @ts-ignore
            getStaticPaths: () => blogPosts.map(post => post.id)
          },
        ]
      },
      { path: 'contacto', element: <Contacto /> },
      { path: 'aviso-legal', element: <AvisoLegal /> },
      { path: 'privacidad', element: <Privacidad /> },
      { path: 'cookies', element: <Cookies /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
