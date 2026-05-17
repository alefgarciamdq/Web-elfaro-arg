export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imagePosition?: string;
  date: string;
  author: string;
  category: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'cuando-algo-no-va-bien',
    title: 'Cuando algo no va bien pero no sabés cómo llamarlo',
    excerpt: 'Hay momentos en que sabés que algo no está bien, pero no podés nombrarlo. No es una crisis, no es algo concreto. Es un malestar difuso que cuesta explicar y que, sin embargo, está ahí todo el tiempo.',
    metaTitle: 'Cuando algo no va bien pero no sabés cómo llamarlo · El Faro',
    metaDescription: 'Hay un malestar que cuesta nombrar. Ni crisis ni diagnóstico: algo que simplemente no está bien. En El Faro podemos ayudarte a entenderlo mejor.',
    date: '10 de Mayo, 2025',
    author: 'Equipo El Faro',
    category: 'Malestar emocional',
    imageUrl: 'https://i.postimg.cc/C1rNBHjW/Psicólogo_valencia.jpg',
    content: `
Hay un tipo de malestar que no hace ruido.

No es una crisis, no es una ruptura, no es algo que puedas señalar y decir "pasó esto". Es algo más difuso: un cansancio que no se va con dormir, una irritabilidad sin causa clara, una sensación de que algo falta o sobra sin saber qué.

Es el malestar que cuesta nombrarlo. Y precisamente porque cuesta nombrarlo, también cuesta pedir ayuda para él.

## Por qué cuesta nombrar lo que sentimos

La cultura del diagnóstico nos enseñó a pedir ayuda cuando hay algo identificable. Una fobia, una depresión, un trastorno. Pero hay muchas personas que llegan a consulta sin ninguna de esas etiquetas, con algo que simplemente *no está bien* y que sin embargo no tienen palabras para describirlo.

Eso no significa que no sea real. Significa que todavía no tiene nombre.

Y a veces, darle nombre es ya parte del proceso.

## Las señales que a veces ignoramos

Hay formas de malestar que normalizamos hasta que se vuelven invisibles:

- Levantarse cansado aunque hayas dormido bien
- Perder el interés en cosas que antes te gustaban
- Sentir que estás "de paso" en tu propia vida
- Una irritabilidad o impaciencia que no podés explicar
- La sensación de que estás haciendo todo bien pero algo falta

Ninguna de esas señales necesita llegar a un punto límite para merecer atención.

## Lo que puede hacer una primera conversación

En El Faro no esperamos que llegues con un diagnóstico ni con un problema bien definido. Una primera conversación sirve para empezar a ordenar lo que está pasando: ponerle palabras, entender de dónde viene, ver si hay un camino posible.

A veces eso es suficiente para que algo empiece a moverse.

> ¿Algo de esto resuena con lo que estás viviendo? Podés escribirnos sin necesidad de explicar todo de entrada.

---

*Lecturas del Faro · El Faro, Mar del Plata*
    `,
  },
  {
    id: 'adicciones-y-familia',
    title: 'Adicciones y familia: cuando el entorno también necesita ayuda',
    excerpt: 'Cuando alguien en la familia atraviesa consumos problemáticos, el entorno también carga con un peso enorme. La orientación familiar no es un complemento del tratamiento: es parte del proceso desde el primer momento.',
    metaTitle: 'Adicciones y familia: cuando el entorno también necesita ayuda · El Faro',
    metaDescription: 'La familia de quien tiene consumos problemáticos también necesita orientación. En El Faro trabajamos con todo el entorno afectivo desde el primer momento.',
    date: '3 de Abril, 2025',
    author: 'Equipo El Faro',
    category: 'Familias y vínculos',
    imageUrl: 'https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg',
    content: `
Cuando alguien en la familia atraviesa un consumo problemático, el entorno raramente aparece en el centro de la escena.

Todo el foco —comprensiblemente— va hacia la persona que consume. La familia se convierte en sostén, en contención, en la que aguanta. Y en ese rol de sostén, muchas veces pierde de vista que ella también está necesitando ayuda.

## El costo invisible del entorno

Las personas cercanas a alguien con consumos problemáticos suelen cargar con formas de malestar específicas que no siempre se reconocen como tales:

- Hipervigilancia constante: estar pendiente de cada señal, cada cambio de humor
- Culpa: "¿qué hice mal?", "¿qué tendría que haber hecho diferente?"
- Vergüenza: la dificultad de hablar de lo que pasa con otros
- Agotamiento emocional: el desgaste de sostener sin que nadie te sostenga a vos
- Soledad: la sensación de que nadie que no haya pasado por esto puede entenderte

Ese peso existe aunque no se nombre. Y tiene consecuencias.

## Por qué trabajar con la familia

En El Faro trabajamos con la red afectiva desde el primer momento, no porque sea "un complemento del tratamiento", sino porque entendemos que el entorno es parte constitutiva del proceso.

Cuando la familia entiende mejor lo que está pasando, puede acompañar de manera más saludable. Cuando aprende a poner límites sin culpa, el vínculo tiene más posibilidad de sostenerse. Cuando alguien en el entorno deja de agotarse solo, toda la trama relacional cambia.

## Un espacio para vos también

No es necesario que la persona con consumos esté en tratamiento para que vos puedas pedir orientación. Muchas veces el camino empieza desde el entorno: alguien que no sabe cómo actuar, que está agotado, que necesita entender mejor lo que está pasando.

Ese es un punto de partida válido.

> Si sos familiar o pareja de alguien con consumos problemáticos y necesitás un espacio para ordenar lo que estás viviendo, en El Faro podemos acompañarte.

---

*Lecturas del Faro · El Faro, Mar del Plata*
    `,
  },
  {
    id: 'psicodrama-que-es',
    title: 'Psicodrama: qué es y por qué funciona',
    excerpt: 'El psicodrama es una de las herramientas más antiguas y más potentes en el trabajo terapéutico grupal. Pero ¿qué pasa realmente en un espacio de psicodrama? ¿Por qué la acción dramática puede llegar donde la palabra sola no alcanza?',
    metaTitle: 'Psicodrama: qué es y por qué funciona · El Faro Mar del Plata',
    metaDescription: 'El psicodrama utiliza la acción dramática como herramienta terapéutica. En El Faro trabajamos con psicodrama desde nuestros inicios.',
    date: '15 de Marzo, 2025',
    author: 'Equipo El Faro',
    category: 'Talleres y expresión',
    imageUrl: 'https://i.postimg.cc/KjK5nkNw/Terapia_online.jpg',
    content: `
Jacob Levy Moreno, el creador del psicodrama, decía que el ser humano es un ser en acción.

No solo un ser que piensa o que habla. Un ser que actúa, que se mueve, que se relaciona con otros desde el cuerpo, la emoción y el gesto. Y que cuando algo duele o se estanca, a veces el camino de soltura no pasa por nombrarlo, sino por *actuarlo*.

## Qué es el psicodrama

El psicodrama es un método terapéutico grupal que utiliza la acción dramática como herramienta de trabajo. A través de la escenificación de situaciones —pasadas, presentes, imaginadas o deseadas—, se trabaja con emociones, vínculos y conflictos de un modo que trasciende lo verbal.

No es teatro en el sentido performativo. No hay un guion, no hay un público, no hay una actuación. Es un espacio donde las personas *encarnan* situaciones propias con el apoyo del grupo y de un coordinador formado, y desde esa encarnación pueden ver, sentir y transformar algo que de otra manera quedaría encerrado en la cabeza.

## Por qué funciona

El psicodrama trabaja con algo que la neurociencia confirma cada vez más: que el cuerpo guarda memorias que la palabra no siempre puede acceder.

Cuando alguien *actúa* una situación difícil en un espacio protegido —con distancia dramática, con el apoyo del grupo, con un coordinador presente—, pueden moverse cosas que años de conversación habían dejado intactas.

No porque la palabra sea inútil. Sino porque a veces el cuerpo necesita moverse antes de que la mente encuentre las palabras.

## El psicodrama en El Faro

En El Faro trabajamos con psicodrama desde nuestros inicios. Es uno de los pilares de nuestra propuesta: un espacio grupal donde la acción dramática se cruza con el trabajo terapéutico de un modo que, para muchos de los que lo han transitado, fue transformador.

Si tenés curiosidad o querés saber más, podés escribirnos.

---

*Lecturas del Faro · El Faro, Mar del Plata*
    `,
  },
];
