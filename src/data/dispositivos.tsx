import { Clock, Users, HeartHandshake, Laptop } from 'lucide-react';
import type { ReactNode } from 'react';

export interface DispositivoBase {
  icon: ReactNode;
  title: string;
  desc: string;
}

export const dispositivosBase: DispositivoBase[] = [
  {
    icon: <Clock size={24} />,
    title: 'Centro de Día',
    desc: 'Estructura de mayor contención con 8 o más horas diarias. Espacios grupales e individuales de lunes a viernes.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Centro de Mediodía',
    desc: 'Media jornada para quienes sostienen responsabilidades cotidianas. Grupos, talleres y terapia familiar.',
  },
  {
    icon: <Users size={24} />,
    title: 'Ambulatorio',
    desc: 'Para procesos no complejos o post-tratamiento intensivo. Psicoterapia individual y grupal.',
  },
  {
    icon: <Laptop size={24} />,
    title: 'Online',
    desc: 'Acompañamiento a distancia para personas y familias. Encuentros individuales, familiares y orientación.',
  },
];
