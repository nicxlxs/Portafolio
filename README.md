# 💼 Portafolio Personal - Nicolas Vera

Portafolio web profesional desarrollado con Next.js 15, React 19 y TypeScript, presentando mis proyectos, habilidades y certificaciones como estudiante de Ingeniería de Software.

![Next.js](https://img.shields.io/badge/Next.js-15.2.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat-square&logo=tailwind-css)

## ⚡ Quick Start

¿Quieres verlo funcionando ahora? Sigue estos 3 pasos:

```bash
# 1. Clona el repositorio
git clone https://github.com/nicxlxs/portafolio.git

# 2. Instala las dependencias
cd portafolio
npm install

# 3. Inicia el servidor
npm run dev
```

🎉 Abre **http://localhost:3000** en tu navegador

---

## 🚀 Demo en Vivo

[Ver Portafolio](https://tu-portafolio.vercel.app) _(Actualizar con tu URL de Vercel)_

## 📋 Tabla de Contenidos

- [Quick Start](#-quick-start)
- [Demo en Vivo](#-demo-en-vivo)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación-y-configuración)
- [Uso](#-uso)
- [Secciones](#-secciones)
- [Configuración](#️-configuración)
- [Roadmap](#-roadmap)
- [FAQ](#-faq-preguntas-frecuentes)
- [Contacto](#-contacto)

## ✨ Características

- ⚡ **Next.js 15** con App Router para un rendimiento óptimo
- 🎨 **Modo Oscuro/Claro** con transiciones suaves
- 📱 **Diseño Completamente Responsive** adaptado a todos los dispositivos
- 🎭 **Animaciones Avanzadas** con Framer Motion
- 🎯 **Navegación Fluida** con smooth scroll entre secciones
- 🌐 **Preparado para Internacionalización** (ES/EN)
- 🎨 **60+ Componentes UI** de shadcn/ui con Radix UI
- 🔥 **Animación de Fondo Interactiva** con Canvas y partículas
- 📊 **Visualización 3D** de habilidades técnicas
- 🎓 **Carrusel de Certificaciones** con auto-rotate
- 📧 **Formulario de Contacto** integrado

## 🛠️ Tecnologías

### Core
- **[Next.js 15.2.6](https://nextjs.org/)** - Framework React para producción
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first

### Librerías UI & Animaciones
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles headless
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizables
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gestión de temas

### Herramientas
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes eficiente
- **[Vercel Analytics](https://vercel.com/analytics)** - Análisis de rendimiento
- **ESLint** - Linting de código

## 📁 Estructura del Proyecto

```
Portafolio/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Carpeta de internacionalización
│   │   └── layout.tsx
│   ├── globals.css              # Estilos globales + Tailwind
│   ├── layout.tsx               # Layout raíz con ThemeProvider
│   └── page.tsx                 # Página principal
│
├── components/                   # Componentes React
│   ├── ui/                      # 60+ componentes de shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── about-me.tsx             # Sección "Sobre Mí"
│   ├── background.tsx           # Animación de partículas
│   ├── certifications.tsx       # Carrusel de certificados
│   ├── contact.tsx              # Formulario de contacto
│   ├── footer.tsx               # Pie de página
│   ├── header.tsx               # Navegación principal
│   ├── mobile-nav.tsx           # Menú móvil hamburguesa
│   ├── projects.tsx             # Grid de proyectos
│   ├── skills.tsx               # Visualización 3D de skills
│   └── theme-provider.tsx       # Proveedor de tema
│
├── hooks/                       # Custom React Hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── lib/                         # Utilidades y helpers
├── public/                      # Recursos estáticos
│   └── *.png                    # Iconos y assets
│
├── styles/                      # Estilos adicionales
│   └── globals.css
│
├── .gitignore                   # Archivos ignorados por Git
├── components.json              # Configuración de shadcn/ui
├── next.config.mjs              # Configuración de Next.js
├── package.json                 # Dependencias del proyecto
├── pnpm-lock.yaml              # Lock file de pnpm
├── postcss.config.mjs          # Configuración PostCSS
├── tailwind.config.ts          # Configuración Tailwind
└── tsconfig.json               # Configuración TypeScript
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- **Node.js 18+** ([Descargar aquí](https://nodejs.org/))
- **npm** (incluido con Node.js) o **pnpm** (opcional)
- **Git** (opcional, para clonar el repositorio)
- **Visual Studio Code** (recomendado)

### 📦 Pasos de Instalación

#### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/nicxlxs/portafolio.git
cd portafolio
```

O descarga el ZIP y extráelo en tu carpeta deseada.

#### 2️⃣ Instalar Dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (~244 paquetes).

**Tiempo estimado:** 1-2 minutos ⏱️

#### 3️⃣ Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Verás algo como esto:

```
  ▲ Next.js 15.2.6
  - Local:        http://localhost:3000
  - Environment:  development
  
  ✓ Ready in 3.2s
```

#### 4️⃣ Abrir en el Navegador
Ve a **http://localhost:3000** 🌐

¡Tu portafolio ya está corriendo en local! 🎉

---

### 🔧 Solución de Problemas Comunes

#### ❌ Error: "scripts está deshabilitada" (Windows)

Si te sale este error en PowerShell:
```
No se puede cargar el archivo... porque la ejecución de scripts está deshabilitada
```

**Solución:**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Luego vuelve a ejecutar `npm run dev`.

#### ❌ Error: "next no se reconoce como un comando"

Significa que las dependencias no están instaladas.

**Solución:**
```bash
npm install
npm run dev
```

#### ❌ Puerto 3000 ya en uso

Si el puerto 3000 ya está ocupado:

**Opción 1:** Detén el proceso que usa el puerto 3000  
**Opción 2:** Usa otro puerto:
```bash
npm run dev -- -p 3001
```

#### ❌ Error: ReferenceError: window is not defined

Este error ya está arreglado en la versión actual. Si lo ves, asegúrate de tener la última versión del código.

---

### 🛑 Detener el Servidor

Para detener el servidor de desarrollo:
- Presiona **Ctrl + C** en la terminal
- Confirma con `Y` si te lo pregunta

---

### 🔄 Hot Reload

Next.js tiene **Hot Reload** automático:
- ✅ Edita cualquier archivo `.tsx`, `.ts`, `.css`
- ✅ Guarda los cambios
- ✅ El navegador se actualiza automáticamente

¡No necesitas reiniciar el servidor!

## 📝 Uso

### Comandos Disponibles

#### 🔷 Desarrollo
```bash
npm run dev       # Inicia el servidor de desarrollo en http://localhost:3000
```

#### 🚀 Producción
```bash
npm run build     # Genera build optimizado para producción
npm start         # Inicia servidor de producción (requiere build previo)
```

#### 🔍 Linting
```bash
npm run lint      # Ejecuta ESLint para detectar problemas de código
```

### 📂 Abrir en Visual Studio Code

#### Desde el Explorador de Windows:
1. Abre la carpeta del proyecto en VS Code
2. Presiona **Ctrl + `** para abrir la terminal integrada
3. Ejecuta `npm run dev`

#### Desde la Terminal:
```bash
cd "C:\Users\Tu-Usuario\Desktop\Portafolio"
code .
```

Luego en VS Code:
- Presiona **F5** o usa la terminal integrada
- Ejecuta `npm run dev`

### 🌐 Acceder al Proyecto

Una vez iniciado el servidor:
- **Local:** http://localhost:3000
- **Red Local:** http://[tu-ip-local]:3000

Para compartir en tu red local (WiFi):
1. Encuentra tu IP con `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
2. Comparte la URL de red con otros dispositivos

### 🔄 Desarrollo en Tiempo Real

El proyecto incluye **Hot Module Replacement (HMR)**:

✅ **Los cambios se aplican automáticamente:**
- Editas un archivo `.tsx` o `.css`
- Guardas con **Ctrl + S**
- El navegador se actualiza solo

❌ **Requieren reinicio del servidor:**
- Cambios en `next.config.mjs`
- Cambios en `tailwind.config.ts`
- Instalación de nuevas dependencias

Para reiniciar: **Ctrl + C** en la terminal, luego `npm run dev`

### 🎨 Modos de Visualización

Tu portafolio tiene:
- 🌙 **Modo Oscuro** (predeterminado)
- ☀️ **Modo Claro**
- 🔄 **Cambio automático** según preferencias del sistema

Prueba ambos modos haciendo clic en el icono de sol/luna en el header.

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Opcional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=tu_id_aqui

# Para futuras integraciones
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

**Nota:** Los archivos `.env.local` están en `.gitignore` y no se suben a Git.

---

### 📜 Referencia de Scripts NPM

Todos los scripts disponibles en [`package.json`](package.json):

| Comando | Descripción | Puerto | Uso |
|---------|-------------|--------|-----|
| `npm run dev` | Servidor de desarrollo con hot reload | 3000 | Desarrollo diario |
| `npm run build` | Compilar para producción | - | Antes de desplegar |
| `npm start` | Servidor de producción | 3000 | Deploy manual |
| `npm run lint` | Verificar calidad de código | - | Antes de commit |

**Ejemplos:**

```bash
# Desarrollo en otro puerto
npm run dev -- -p 3001

# Build + Start (simular producción)
npm run build && npm start

# Lint y mostrar warnings
npm run lint
```

## 🎯 Secciones

### 1. About Me (Sobre Mí)
- Foto de perfil profesional
- Descripción personal y objetivo profesional
- Enlaces a redes sociales:
  - [GitHub](https://github.com/nicxlxs)
  - [LinkedIn](https://www.linkedin.com/in/nicolas-vera-nuñez)
  - [Instagram](https://www.instagram.com/_nixl.vx/)
- Botón de descarga de CV

### 2. Certifications (Certificaciones)
Carrusel interactivo con **13+ certificaciones** en 3 categorías:

#### 🔗 Blockchain (5 certificados)
- Blockchain Specialization - University at Buffalo
- Blockchain Basics
- Smart Contracts
- Decentralized Applications
- Blockchain Platforms

#### 📊 Scrum Master (5 certificados)
- Scrum Master Certification - LearnQuest
- Introduction to Scrum Master Training
- Scrum Methodologies
- Scaling Agile and Team-of-Teams
- Combining Scrum with Other Agile Methodologies

#### 🌐 Inglés (3 certificados)
- Advanced Phase - Británico (B257-0000000764)
- Intermediate Phase - Británico
- Basic Phase - Británico

### 3. Skills (Habilidades)
Visualización 3D giratoria con **11 tecnologías** en 3 categorías:

- **Frontend:** HTML, CSS, JavaScript, React, Next.js
- **Backend:** Node.js, Express, Spring Boot
- **Tools:** Git, Docker, Postman, VS Code

### 4. Projects (Proyectos)
Grid de proyectos destacados:

- **Smart Garden** - Sistema de gestión de hidroponía (Angular, Java, MySQL)
- _(3 proyectos adicionales en desarrollo)_

### 5. Contact (Contacto)
Formulario de contacto con validación para:
- Nombre
- Correo electrónico
- Mensaje

## ⚙️ Configuración

### Personalizar Contenido

#### Modificar Información Personal
Edita [`components/about-me.tsx`](components/about-me.tsx):
```tsx
// Actualizar enlaces de redes sociales
<a href="https://github.com/TU_USUARIO">
```

#### Agregar Proyectos
Edita [`components/projects.tsx`](components/projects.tsx):
```tsx
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción del proyecto",
    image: "url_de_imagen",
    tags: ["React", "Node.js"],
    link: "https://demo.com",
    github: "https://github.com/tu-repo"
  },
  // ...más proyectos
]
```

#### Modificar Habilidades
Edita [`components/skills.tsx`](components/skills.tsx):
```tsx
const skillCategories = {
  Frontend: [
    { name: "React", icon: { light: "url", dark: "url" } }
  ]
}
```

### Tema y Colores
Personaliza colores en [`tailwind.config.ts`](tailwind.config.ts) y [`app/globals.css`](app/globals.css).

## 🗺️ Roadmap

### Prioridad Alta 🔴
- [ ] Integrar backend para formulario de contacto (EmailJS/Resend)
- [ ] Completar proyectos con imágenes e información real
- [ ] Optimizar imágenes para producción
- [ ] Resolver warnings de TypeScript
- [ ] Añadir meta tags de SEO completos

### Prioridad Media 🟡
- [ ] Implementar internacionalización completa (ES/EN)
- [ ] Configurar Vercel Analytics
- [ ] Añadir tests unitarios
- [ ] Implementar lazy loading de imágenes
- [ ] Crear sitemap.xml

### Mejoras Futuras 🟢
- [ ] Sección de Blog
- [ ] Timeline de experiencia laboral/educación
- [ ] Sección de testimonios
- [ ] Integración con CMS (Sanity/Contentful)
- [ ] Modo de accesibilidad mejorado
- [ ] PWA (Progressive Web App)

## 📊 Estado del Proyecto

**Versión Actual:** 0.1.0  
**Estado:** ✅ En desarrollo activo  
**Errores de Build:** ✅ Sin errores  
**Performance:** ⚡ Optimizado  
**Responsive:** ✅ 100% responsive

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias son bienvenidas. Si encuentras algún bug o tienes ideas para mejorarlo:

1. Abre un [Issue](https://github.com/nicxlxs/portafolio/issues)
2. Crea un Pull Request
3. Contáctame directamente

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## ❓ FAQ (Preguntas Frecuentes)

### ¿Cómo veo el proyecto en Visual Studio Code?

1. Abre VS Code
2. File → Open Folder → Selecciona la carpeta `Portafolio`
3. Presiona **Ctrl + `** para abrir la terminal
4. Ejecuta `npm run dev`
5. Visita http://localhost:3000

### ¿Por qué no se ve el proyecto después de `npm run dev`?

Asegúrate de:
- ✅ Tener las dependencias instaladas (`npm install`)
- ✅ El puerto 3000 no esté ocupado
- ✅ No haya errores en la terminal
- ✅ Abrir http://localhost:3000 en tu navegador

### ¿Cómo actualizo mis datos personales?

Edita estos archivos:
- **Información personal:** [`components/about-me.tsx`](components/about-me.tsx)
- **Proyectos:** [`components/projects.tsx`](components/projects.tsx)
- **Habilidades:** [`components/skills.tsx`](components/skills.tsx)
- **Certificaciones:** [`components/certifications.tsx`](components/certifications.tsx)

### ¿Cómo despliego mi portafolio en internet?

**Opción recomendada: Vercel (Gratis)**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio
4. ¡Listo! Se despliega automáticamente

Otras opciones: Netlify, GitHub Pages, Railway, Render

### ¿Qué hago si aparece un error al guardar cambios?

1. Verifica que no haya errores de sintaxis
2. Guarda el archivo con **Ctrl + S**
3. Si el error persiste, reinicia el servidor:
   - **Ctrl + C** en la terminal
   - `npm run dev`

### ¿Puedo usar pnpm en lugar de npm?

¡Sí! Solo reemplaza:
- `npm install` → `pnpm install`
- `npm run dev` → `pnpm dev`
- `npm run build` → `pnpm build`

### ¿Cómo agrego más proyectos?

Edita [`components/projects.tsx`](components/projects.tsx) y agrega objetos al array `projects`:

```tsx
{
  title: "Mi Nuevo Proyecto",
  description: "Descripción breve",
  image: "url_de_imagen",
  tags: ["React", "Node.js"],
  link: "https://demo.com",
  github: "https://github.com/tu-repo"
}
```

## 📧 Contacto

**Nicolas Alejandro Vera Nuñez**  
Estudiante de Ingeniería de Software

- 🌐 Portfolio: [tu-portafolio.vercel.app](https://tu-portafolio.vercel.app)
- 💼 LinkedIn: [nicolas-vera-nuñez](https://www.linkedin.com/in/nicolas-vera-nuñez)
- 🐙 GitHub: [@nicxlxs](https://github.com/nicxlxs)
- 📸 Instagram: [@_nixl.vx](https://www.instagram.com/_nixl.vx/)
- 📄 CV: [Descargar](https://drive.google.com/file/d/1KVCXhaGwUcCHTPvhVE2YEs00PdW099HR/view?usp=sharing)

---

<div align="center">
  <p>⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!</p>
  <p>Hecho con ❤️ y ☕ por Nicolas Vera</p>
  <p><sub>Última actualización: Marzo 2026</sub></p>
</div>
