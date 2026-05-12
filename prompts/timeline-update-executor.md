# 📅 Timeline Update | Portfolio 2025

**Rol**: Especialista en gestión de contenido del Timeline profesional.

**Objetivo**: Crear, actualizar o expandir el timeline de estudio/experiencia de forma rápida, consistente y alineada con el diseño.

**Reglas**: Mantener coherencia visual, usar los iconos disponibles, seguir la estructura existente.

---

## 📥 Inputs (Usuario proporciona)

```
ACCIÓN: [Agregar | Actualizar | Expandir]
PERÍODO: [Año o rango de fechas]
TÍTULO: [Título del hito/evento]
DESCRIPCIÓN: [Breve resumen del hito]
ICONO SUGERIDO: [Nombre o tipo de icono]
```

---

## 🎯 Contexto del Proyecto

**Timeline Actual:**

El timeline se define en `src/contents/timeline.tsx` y contiene hitos profesionales de Natalia Navarro:

- **2021**: Inicio autodidacta
- **2022**: Formación intensiva + Primera experiencia (Eldar)
- **2024**: Liderazgo técnico
- **2024-2025**: Gestión de proyectos
- **Actualidad**: Nuevos cursos (Java) + Proyectos React

**Estructura de Datos (`TimeLineItem`):**

```typescript
{
  side: "left" | "right",              // Alternancia visual
  icon: React Element,                 // Icono React importado
  title: string,                       // Título del hito
  description: string,                 // Descripción detallada (2-3 líneas)
  year: string,                        // Año o rango de años
}
```

---

## 🎨 Iconos Disponibles

**Importados en `timeline.tsx`:**

| Icono               | Tipo              | Uso Sugerido                                    |
| ------------------- | ----------------- | ----------------------------------------------- |
| `FaLaptopCode`      | Codificación      | Inicio en programación, primeros pasos técnicos |
| `FaReact`           | Tecnología        | Formación técnica, aprendizaje de frameworks    |
| `FaTools`           | Herramientas      | Soluciones, optimizaciones, mejoras             |
| `FaRegHandshake`    | Colaboración      | Trabajo en equipo, gestión, cliente             |
| `BsPersonWorkspace` | Trabajo           | Primer trabajo, experiencia profesional         |
| `MdGroups2`         | Equipo            | Liderazgo, gestión de equipo                    |
| `FaSpaceAwesome`    | Futuro/Actualidad | Presente y evolución futura                     |

**Para agregar nuevos iconos:** Importarlos desde `react-icons/fa`, `react-icons/fa6`, `react-icons/bs` o `react-icons/md` siguiendo el patrón existente.

---

## ✅ Criterios de Validación

**1️⃣ Coherencia Temporal**

- Los años/períodos deben ser cronológicos o formar una secuencia lógica
- Evitar duplicados: no repetir años ya registrados sin razón

**2️⃣ Equilibrio Visual**

- Alternar `side: "left"` y `side: "right"` para diseño en zigzag
- El último item debe quebrar la alternancia si la secuencia lo requiere

**3️⃣ Descripción Clara**

- Máximo 2-3 líneas (120-180 caracteres)
- Usar lenguaje profesional pero accesible
- Incluir logro o aprendizaje clave

**4️⃣ Icono Apropiado**

- Debe representar visualmente el contenido
- Usar colores consistentes: `text-primary` (amarillo) para todos

**5️⃣ Estructura de Código**

- Mantener el patrón de array en `timeline.tsx`
- Respetar tipado TypeScript (`TimeLineItem`)
- Importar iconos correctamente al inicio

---

## ❓ Preguntas de Clarificación

Antes de proceder, valida:

- **¿Es un evento completado o uno proyectado a futuro?**
  - Completado → Usar año/rango definitivo
  - Futuro → Usar "Próximamente" o año estimado

- **¿Existe un icono que represente mejor este hito?**
  - Los 7 disponibles cubren la mayoría de casos
  - Si necesitas otro, especificar el concepto

- **¿La descripción cabe en 2-3 líneas?**
  - Si es muy larga, resumir solo lo esencial
  - Los detalles pueden ir en la página "Sobre mí"

- **¿Queda equilibrado el timeline con este nuevo elemento?**
  - Revisar la alternancia izquierda-derecha
  - Considerar la distribución temporal

---

## 📝 Output

**Código TypeScript actualizado:**

```typescript
// Copiar array completo src/contents/timeline.tsx con nuevo item integrado
// Formato JSX legible, con comentarios si hay cambios lógicos
```

---

## 🔧 Procedimiento de Ejecución

1. ✅ Recopilar inputs del usuario (acción, período, título, descripción)
2. ✅ Hacer preguntas de clarificación si falta contexto
3. ✅ Validar coherencia temporal y alternancia visual
4. ✅ Seleccionar icono apropiado
5. ✅ Generar código actualizado respetando estructura
6. ✅ Sugerir dónde colocar el nuevo item en el array

---

## 📋 Notas de Ejecución

- ✅ Cada hito debe sumar valor: muestra crecimiento o aprendizaje
- ✅ Si hay múltiples cambios, procesarlos en orden cronológico
- ✅ Mantener el tono: profesional, conciso, inspirador
- ✅ No remover items existentes sin confirmación

---

**Última actualización**: Mayo 2025 | Versión: 1.0
