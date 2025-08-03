// Types
import { ProjectCardProps } from "@/types/index";
//Images
import Expense_control from '../../public/img/expense_control.svg'
import Movie from '../../public/img/movies.svg'
import Search from '../../public/img/search.svg'
import MemeGenerator from '../../public/img/meme_generator.svg'
import Portfolio from '../../public/img/portfolio.jpg'
import SearchRickMorty from '../../public/img/app.svg'
import Code from '../../public/img/code.svg'
import ImgUTC from '../../public/img/utc.svg'


export const projects: ProjectCardProps[] = [
  {
    title: 'Controlador de gastos',
    description: 'Ahorradas 💰 es una aplicación web que permite registrar ingresos y egresos, organizar gastos por categoría y visualizar balances y reportes dinámicos. Utiliza almacenamiento local y cuenta con diseño responsive. Participé activamente en el desarrollo, la gestión de tareas y el control de versiones, trabajando en equipo bajo metodología ágil.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bulma'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/AhorrAdas',
    demoLink: 'https://nataliasoledadnavarro.github.io/AhorrAdas',
    image: Expense_control,
  },
  {
    title: 'Buscador de Películas & Series',
    description: 'PeliSeries 🎬 es una app responsive creada como proyecto final en Ada ITW. Permite explorar películas y series por categoría, ver detalles, y buscar por título o actor, con navegación fluida y filtros por idioma. Consume datos de la API de The Movie DB',
    technologies: ['React', 'Sass'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Series-y-Peliculas',
    demoLink: 'https://buscadorpeliculasyseries.netlify.app/',
    image: Movie, 
  },
  {
    title: 'Buscador de Brawl Stars',
    description: 'Brawl Stars 🔍 es una web responsive que muestra todos los personajes del juego con filtros por nombre, rareza y orden alfabético. Permite acceder a detalles como habilidades, gadgets, modos de juego y mapas. Consume datos de la API de brawlapi.com y fue desarrollada como parte de mi formación en Ada ITW.',
    technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Brawl-Stars',
    demoLink: 'https://nataliasoledadnavarro.github.io/Brawl-Stars/',
    image: Search,
  },
  {
    title: 'Editor de Memes ',
    description: 'Memes 🎨 es una web accesible y responsive que permite cargar imágenes, aplicar filtros, agregar texto personalizado y descargar tu propio meme. Incluye modo claro/oscuro y múltiples opciones de edición visual. Fue nuestro primer proyecto grupal, planificado con Trello y versionado en GitHub, desarrollado durante la formación en Ada ITW.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Editor-de-Memes',
    demoLink: 'https://nataliasoledadnavarro.github.io/Editor-de-Memes/',
    image: MemeGenerator,
  },
  {
    title: 'Mi primer portfolio ',
    description: 'Mi primer proyecto 💻 es una web desarrollada con HTML, CSS y JavaScript donde comparto mis primeros proyectos, aprendizajes y formas de contacto. Lo mantengo como reflejo del inicio de mi camino como desarrolladora, destacando la evolución en el proceso de aprendizaje.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Portfolio',
    demoLink: 'https://nataliasoledadnavarro.github.io/Portfolio/',
    image: Portfolio,
  },
  {
    title: 'Buscador de Rick and Morty ',
    description: 'Rick and Morty 🛸 es una app para explorar personajes, ver detalles y buscar por nombre. Fue un proyecto que desarrollé para seguir practicando durante mi proceso de aprendizaje.',
    technologies: ['React', 'MUI'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Rick-and-Morty',
    demoLink: 'https://buscador-rick-and-morty.netlify.app/',
    image: SearchRickMorty,
  },
  {
    title: 'Traductor de Código Murciélago',
    description: 'El traductor🦇 es un mini proyecto creado por curiosidad, que permite encriptar y desencriptar mensajes con el código Murciélago. Incluye una breve explicación del sistema y dos traductores interactivos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/codigo-Murcielago',
    demoLink: 'https://nataliasoledadnavarro.github.io/codigo-Murcielago/',
    image: Code, 
  },
  {
    title: 'Calculador UTC',
    description: 'Calculador de Fecha Universal 🌕 es una herramienta simple que convierte una fecha y hora local a formato UTC. Surgió de una necesidad real para personalizar regalos con la fase lunar exacta de un momento especial.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bulma'],
    githubLink: 'https://github.com/Nataliasoledadnavarro/Caculadora-UTC',
    demoLink: 'https://nataliasoledadnavarro.github.io/Caculadora-UTC/',
    image: ImgUTC,
  }
];
