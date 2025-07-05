import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    title: 'Plataforma E-commerce',
    description: 'Plataforma de comercio electrónico full-stack desarrollada con Next.js, TypeScript y Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/e-commerce-website.png',
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación colaborativa para la gestión de tareas con actualizaciones en tiempo real.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/task-manager.webp',
  },
  {
    title: 'Sitio de Portfolio Personal',
    description: 'Mi sitio web personal donde muestro mis proyectos, habilidades y experiencia profesional.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/portfolio-website.jpg',
  },
  {
    title: 'Plataforma de Blog',
    description: 'Plataforma para escribir y publicar artículos, con autenticación de usuarios y soporte para Markdown.',
    technologies: ['Gatsby', 'GraphQL', 'Contentful'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/blog-website.jpeg',
  },
  {
    title: 'App del Clima',
    description: 'Aplicación para consultar el estado del tiempo en tiempo real, utilizando datos de OpenWeatherMap.',
    technologies: ['React', 'OpenWeatherMap API'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/weather-app.png',
  },
  {
    title: 'Aplicación de Chat',
    description: 'Aplicación de mensajería instantánea con soporte en tiempo real utilizando WebSockets.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/chat-app.png',
  },
  {
    title: 'Buscador de Recetas',
    description: 'Aplicación para buscar recetas de cocina usando la API de Edamam.',
    technologies: ['React', 'Edamam API'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/recipe-finder.png',
  },
  {
    title: 'Controlador de Gastos',
    description: 'Aplicación personal para llevar un control de ingresos y egresos.',
    technologies: ['React', 'Firebase'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/projects/expense-tracker.webp',
  }
];
