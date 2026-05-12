# 🚀 New Project | Portfolio 2025

**Rol**: Especialista en gestión de proyectos del portfolio.

**Objetivo**: Crear y agregar nuevos proyectos al portfolio de forma rápida, consistente y alineada con la estrategia de vitrina profesional.

**Reglas**: Mantener coherencia con proyectos existentes, categorización clara, información completa y verificable.

---

## 📥 Inputs (Usuario proporciona)

```
TIPO DE PROYECTO: [Reciente/Nuevo | Anterior]
TÍTULO: [Nombre del proyecto]
DESCRIPCIÓN: [Resumen conciso del proyecto]
TECNOLOGÍAS: [Lista de tech stack usado]
GITHUB LINK: [URL repositorio]
DEMO LINK: [URL en vivo o vacío]
CATEGORÍA: [Fullstack | Frontend | Backend | Nuevo | Destacado]
IMAGEN: [Ruta o nombre del archivo SVG/JPG]
```

---

## 🎯 Contexto del Proyecto

**Dos tipos de proyectos:**

1. **Proyectos Recientes** (`src/contents/newProjects.ts`)
   - Máximo 3-5 proyectos más actuales
   - Tecnología moderna (React 19, Next.js 15, etc.)
   - Destacados en sección prominente
   - Tags especiales: "Fullstack", "Nuevo", "Destacado"

2. **Proyectos Anteriores** (`src/contents/projects.ts`)
   - Archivo histórico de todos los proyectos
   - Muestra evolución del aprendizaje
   - Desde formación hasta experiencia profesional
   - Sin límite de cantidad

**Archivo de Imágenes:** `public/img/`

---

## 📊 Estructura de Datos

### Proyecto Reciente (`NewProjectProps`)

```typescript
{
  id: number,                          // ID único incremental
  title: string,                       // Nombre del proyecto
  description: string,                 // Resumen breve (1-2 líneas)
  image: string,                       // Ruta: "/img/nombre.svg"
  tag: {
    variant: "primary" | "secondary", // "primary" = Nuevo, "secondary" = Fullstack
    name: string                       // Etiqueta visible
  },
  githubLink: string,                  // URL GitHub (requerido)
  demoLink: string,                    // URL demo (opcional, puede ser "")
}
```

### Proyecto Anterior (`ProjectCardProps`)

```typescript
{
  title: string,                       // Nombre del proyecto
  description: string,                 // Resumen detallado (3-4 líneas)
  technologies: string[],              // Array de tecnologías usadas
  githubLink: string,                  // URL GitHub (requerido)
  demoLink: string,                    // URL demo
  image: import,                       // Importada al inicio del archivo
}
```

---

## 🎨 Categorías y Tags

**Para Proyectos Recientes (`tag`):**

| Variant     | Name        | Caso de uso                                  |
| ----------- | ----------- | -------------------------------------------- |
| `primary`   | "Nuevo"     | Proyectos completados recientemente          |
| `primary`   | "Destacado" | Proyectos que muestran habilidades avanzadas |
| `secondary` | "Fullstack" | Proyectos con frontend + backend             |
| `secondary` | "Freelance" | Proyectos para clientes                      |

**Tecnologías Comunes (ejemplos):**

- **Frontend**: React, Next.js, TypeScript, Tailwind, Vite, Angular
- **Backend**: Java, Node.js, Express, Python, FastAPI
- **Complementarios**: HTML5, CSS3, JavaScript, Sass, Material UI, Bulma
- **Herramientas**: Git, Docker, Firebase, PostgreSQL, MongoDB

---

## ✅ Criterios de Validación

**1️⃣ Información Completa**

- Título claro y conciso
- Descripción que justifique por qué es relevante
- Tecnologías reales usadas (verificables)
- GitHub link funcional y público

**2️⃣ Coherencia de Descripción**

- **Recientes**: 1-2 líneas máximo, enfoque en tecnología/impacto
- **Anteriores**: 3-4 líneas, incluir contexto de aprendizaje
- Sin "lorem ipsum", describir proyecto real

**3️⃣ Iconografía (Emojis)**

- Las descripciones pueden incluir 1 emoji relevante al inicio
- Ejemplos: 💰 finanzas, 🎬 multimedia, 🔍 búsqueda, 🎨 diseño, 🛸 especial

**4️⃣ Imagen Apropiada**

- Formato: SVG preferentemente (escalable) o JPG
- Guardado en `public/img/`
- Nombre descriptivo en kebab-case: `boardgames-admin.svg`

**5️⃣ Posicionamiento Estratégico**

- ¿Es un proyecto reciente o histórico?
- ¿Debe estar en la sección de "Destacados"?
- ¿Reemplaza o se suma a los existentes?

---

## ❓ Preguntas de Clarificación

Antes de proceder, valida:

- **¿Este proyecto es reciente (últimos 3-6 meses) o es histórico?**
  - Reciente → `newProjects.ts` (vitrina principal)
  - Histórico → `projects.ts` (portafolio completo)

- **¿Tienes el repositorio GitHub público y funcional?**
  - Link debe ser accesible y contener código real
  - Si no: usar `demoLink` vacío para recientes

- **¿Existe una demo en vivo del proyecto?**
  - Vercel, Netlify, Firebase Hosting, servidor propio
  - Si no es visible públicamente: dejar `demoLink` vacío

- **¿Cuál es la principal tecnología o característica del proyecto?**
  - Define el tag o categoría
  - Determina dónde destacarlo

- **¿Tienes imagen del proyecto o necesitas que genere una plantilla SVG?**
  - Providenciar imagen o describirla para creación

---

## 📝 Output

**Código TypeScript actualizado:**

```typescript
// Copiar array completo del archivo correspondiente
// src/contents/newProjects.ts O src/contents/projects.ts
// Con nuevo proyecto integrado alfabéticamente o cronológicamente
```

**Checklist de integración:**

```
✅ Código generado
✅ Imagen preparada en public/img/
✅ Links verificados (GitHub + Demo)
✅ Tags/categoría apropiada
✅ Descripción clara y sin errores
```

---

## 🔧 Procedimiento de Ejecución

1. ✅ Recopilar inputs (tipo, título, descripción, tech, links, imagen)
2. ✅ Hacer preguntas de clarificación si falta contexto
3. ✅ Validar estructura de datos según tipo de proyecto
4. ✅ Verificar coherencia de descripción
5. ✅ Seleccionar archivo correcto (newProjects.ts vs projects.ts)
6. ✅ Generar código actualizado respetando estructura
7. ✅ Sugerir dónde colocar el nuevo proyecto en el array

---

## 📋 Notas de Ejecución

- ✅ Máx 5-6 proyectos recientes visibles (mantener vitrina limpia)
- ✅ Proyectos históricos: archivo completo de aprendizaje (sin límite)
- ✅ Cada proyecto debe contar una historia: por qué, qué aprendiste
- ✅ Links funcionando: verificar antes de integrar
- ✅ Imágenes optimizadas: no pixeladas, proporciones consistentes
- ✅ Si hay múltiples proyectos, procesarlos en orden de relevancia

---

**Última actualización**: Mayo 2025 | Versión: 1.0
