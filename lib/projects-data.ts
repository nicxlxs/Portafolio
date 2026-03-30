export interface Project {
  id: number
  title: string
  description: {
    es: string
    en: string
  }
  image: string
  tags: string[]
  link: string
  github: string
  featured?: boolean
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CargaSafe",
    description: {
      es: "Aplicación web para la gestión y monitoreo seguro de cargas, que permite rastrear envíos, controlar su estado y garantizar la integridad durante el transporte.",
      en: "Web application for secure cargo management and monitoring, allowing tracking of shipments, control of their status and ensuring integrity during transport."
    },
    image: "/projects/cargasafe.png",
    tags: ["Angular", "Java", "PostgreSQL"],
    link: "https://carga-safe.web.app/",
    github: "https://github.com/Los-Parkers-IoT/iot-solutions-development-cargasafe-frontend",
    featured: true
  },
  {
    id: 2,
    title: "Connectly",
    description: {
      es: "Plataforma de conectividad que facilita la comunicación y colaboración entre usuarios, con interfaz intuitiva y características avanzadas de networking.",
      en: "Connectivity platform that facilitates communication and collaboration between users, with intuitive interface and advanced networking features."
    },
    image: "/projects/connectly.png",
    tags: ["Python", "Tailwind", "MySQL"],
    link: "https://connectly-ywvg.onrender.com/login",
    github: "https://github.com/UPC-SmartGarden-SW56",
    featured: true
  },
  {
    id: 3,
    title: "NutriGain",
    description: {
      es: "Aplicación de nutrición y fitness que ayuda a los usuarios a rastrear su ingesta calórica, planificar comidas y alcanzar sus objetivos de salud.",
      en: "Nutrition and fitness application that helps users track their caloric intake, plan meals and achieve their health goals."
    },
    image: "/projects/nutrigain.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "https://front-azl2.vercel.app/",
    github: "https://github.com/UPC-NutriGain",
    featured: true
  },
  {
    id: 4,
    title: "Smart Garden",
    description: {
      es: "Sistema IoT para el monitoreo y control automático de jardines inteligentes, optimizando riego, temperatura y exposición solar.",
      en: "IoT system for monitoring and automatic control of smart gardens, optimizing irrigation, temperature and sun exposure."
    },
    image: "/projects/smart-garden.png",
    tags: ["Angular", "Java", "MySQL"],
    link: "https://smartgardenn.netlify.app/",
    github: "https://github.com/UPC-SmartGarden-SW56",
    featured: true
  },
  {
    id: 5,
    title: "TaskFlow",
    description: {
      es: "Gestor de tareas colaborativo con tableros Kanban, seguimiento de progreso y asignación automática de responsabilidades.",
      en: "Collaborative task manager with Kanban boards, progress tracking and automatic responsibility assignment."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/taskflow"
  },
  {
    id: 6,
    title: "EcoTrack",
    description: {
      es: "Aplicación móvil para rastrear la huella de carbono y promover hábitos sostenibles en la vida cotidiana.",
      en: "Mobile application to track carbon footprint and promote sustainable habits in daily life."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "#",
    github: "https://github.com/example/ecotrack"
  },
  {
    id: 7,
    title: "HealthSync",
    description: {
      es: "Plataforma de sincronización de datos de salud que integra wearables y proporciona análisis completo del bienestar.",
      en: "Health data synchronization platform that integrates wearables and provides comprehensive wellness analysis."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Python", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/healthsync"
  },
  {
    id: 8,
    title: "CodeMentor",
    description: {
      es: "Plataforma de tutoría en línea para programadores con cursos interactivos, ejercicios prácticos y mentoría personalizada.",
      en: "Online tutoring platform for programmers with interactive courses, practical exercises and personalized mentoring."
    },
    image: "/projects/placeholder.svg",
    tags: ["Vue.js", "Node.js", "SQL"],
    link: "#",
    github: "https://github.com/example/codementor"
  },
  {
    id: 9,
    title: "MarketHub",
    description: {
      es: "Marketplace digital que conecta vendedores locales con compradores, facilitando transacciones seguras y contacto directo.",
      en: "Digital marketplace that connects local sellers with buyers, facilitating secure transactions and direct contact."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Express.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/markethub"
  },
  {
    id: 10,
    title: "FinanceFlow",
    description: {
      es: "Aplicación de gestión financiera personal con presupuestos automáticos, análisis de gastos e inversiones inteligentes.",
      en: "Personal finance management application with automatic budgets, expense analysis and smart investments."
    },
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    github: "https://github.com/example/financeflow"
  },
  {
    id: 11,
    title: "SecureVault",
    description: {
      es: "Gestor de contraseñas empresarial con encriptación de grado militar, autenticación biométrica y almacenamiento seguro.",
      en: "Enterprise password manager with military-grade encryption, biometric authentication and secure storage."
    },
    image: "/projects/placeholder.svg",
    tags: ["Rust", "TypeScript", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/securevault"
  },
  {
    id: 12,
    title: "StreamPro",
    description: {
      es: "Plataforma de transmisión en vivo con chat interactivo, donaciones integradas y análisis de audiencia en tiempo real.",
      en: "Live streaming platform with interactive chat, integrated donations and real-time audience analytics."
    },
    image: "/projects/placeholder.svg",
    tags: ["WebRTC", "Node.js", "Redis"],
    link: "#",
    github: "https://github.com/example/streampro"
  },
  {
    id: 13,
    title: "JobMatch",
    description: {
      es: "Plataforma de búsqueda de empleo con algoritmo IA de emparejamiento entre candidatos y ofertas laborales.",
      en: "Job search platform with AI matching algorithm between candidates and job offers."
    },
    image: "/projects/placeholder.svg",
    tags: ["Python", "TensorFlow", "Django"],
    link: "#",
    github: "https://github.com/example/jobmatch"
  },
  {
    id: 14,
    title: "TravelPlan",
    description: {
      es: "Aplicación de planificación de viajes que sugiere itinerarios personalizados, hoteles y actividades basadas en preferencias.",
      en: "Travel planning application that suggests personalized itineraries, hotels and activities based on preferences."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Mapbox", "Stripe"],
    link: "#",
    github: "https://github.com/example/travelplan"
  },
  {
    id: 15,
    title: "ArtGallery",
    description: {
      es: "Galería digital de arte NTF donde artistas pueden mostrar y vender sus obras digitales con garantía de propiedad.",
      en: "Digital NFT art gallery where artists can showcase and sell their digital works with ownership guarantee."
    },
    image: "/projects/placeholder.svg",
    tags: ["Solidity", "Web3.js", "React"],
    link: "#",
    github: "https://github.com/example/artgallery"
  },
  {
    id: 16,
    title: "FitChallenge",
    description: {
      es: "Aplicación de retos fitness comunitarios con competencias, seguimiento de actividad y recompensas gamificadas.",
      en: "Community fitness challenges app with competitions, activity tracking and gamified rewards."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/fitchallenge"
  },
  {
    id: 17,
    title: "MealPrep",
    description: {
      es: "Servicio de comidas preparadas con planificación semanal, recetas personalizadas y entrega a domicilio.",
      en: "Meal prep service with weekly planning, personalized recipes and home delivery."
    },
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Firebase", "Stripe"],
    link: "#",
    github: "https://github.com/example/mealprep"
  },
  {
    id: 18,
    title: "DevCollaborate",
    description: {
      es: "Plataforma de colaboración para desarrolladores con control de versiones integrado y pair programming en tiempo real.",
      en: "Developer collaboration platform with integrated version control and real-time pair programming."
    },
    image: "/projects/placeholder.svg",
    tags: ["Electron", "WebSocket", "Git"],
    link: "#",
    github: "https://github.com/example/devcollaborate"
  },
  {
    id: 19,
    title: "SchoolHub",
    description: {
      es: "Plataforma educativa para institutos con aulas virtuales, calificaciones en línea y comunicación profesor-alumno.",
      en: "Educational platform for schools with virtual classrooms, online grades and teacher-student communication."
    },
    image: "/projects/placeholder.svg",
    tags: ["Laravel", "Vue.js", "MySQL"],
    link: "#",
    github: "https://github.com/example/schoolhub"
  },
  {
    id: 20,
    title: "PropertyPro",
    description: {
      es: "Plataforma inmobiliaria con tours virtuales 3D, cálculo de hipotecas y búsqueda avanzada de propiedades.",
      en: "Real estate platform with 3D virtual tours, mortgage calculator and advanced property search."
    },
    image: "/projects/placeholder.svg",
    tags: ["Three.js", "React", "Node.js"],
    link: "#",
    github: "https://github.com/example/propertypro"
  },
  {
    id: 21,
    title: "PetCare",
    description: {
      es: "Aplicación para cuidado de mascotas con veterinarios en línea, recordatorios de vacunas y comunidad de dueños.",
      en: "Pet care application with online veterinarians, vaccine reminders and owner community."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Firebase", "Twilio"],
    link: "#",
    github: "https://github.com/example/petcare"
  },
  {
    id: 22,
    title: "MusicStream",
    description: {
      es: "Plataforma de streaming musical con recomendaciones IA, listas colaborativas y radios personalizadas.",
      en: "Music streaming platform with AI recommendations, collaborative playlists and personalized radios."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Node.js", "Spotify API"],
    link: "#",
    github: "https://github.com/example/musicstream"
  },
  {
    id: 23,
    title: "EventManager",
    description: {
      es: "Sistema de gestión de eventos con venta de tickets, check-in QR y análisis de asistencia.",
      en: "Event management system with ticket sales, QR check-in and attendance analysis."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/eventmanager"
  },
  {
    id: 24,
    title: "CloudSync",
    description: {
      es: "Servicio de sincronización en la nube para archivos con versionado, compartición segura y colaboración.",
      en: "Cloud synchronization service for files with versioning, secure sharing and collaboration."
    },
    image: "/projects/placeholder.svg",
    tags: ["Go", "S3", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/cloudsync"
  },
  {
    id: 25,
    title: "FoodDeliver",
    description: {
      es: "Aplicación de delivery de comida con seguimiento en tiempo real, promociones dinámicas y wallet digital.",
      en: "Food delivery app with real-time tracking, dynamic promotions and digital wallet."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Node.js", "Google Maps"],
    link: "#",
    github: "https://github.com/example/fooddeliver"
  },
  {
    id: 26,
    title: "LivingRoom",
    description: {
      es: "Red social de vivienda compartida que conecta personas para alquilar casas, pisos y habitaciones.",
      en: "Shared housing social network that connects people to rent houses, apartments and rooms."
    },
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Django", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/livingroom"
  },
  {
    id: 27,
    title: "StudyBuddy",
    description: {
      es: "Aplicación de estudio colaborativo con flashcards, cuestionarios y grupos de estudio en línea.",
      en: "Collaborative study application with flashcards, quizzes and online study groups."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Express.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/studybuddy"
  },
  {
    id: 28,
    title: "CarPool",
    description: {
      es: "Plataforma de carpooling que reduce costos de transporte y emisiones de carbono mediante viajes compartidos.",
      en: "Carpooling platform that reduces transportation costs and carbon emissions through shared rides."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Node.js", "Google Maps API"],
    link: "#",
    github: "https://github.com/example/carpool"
  },
  {
    id: 29,
    title: "FashionHub",
    description: {
      es: "Plataforma de moda sostenible que conecta diseñadores locales con compradores consientes.",
      en: "Sustainable fashion platform connecting local designers with conscious buyers."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Shopify API", "Stripe"],
    link: "#",
    github: "https://github.com/example/fashionhub"
  },
  {
    id: 30,
    title: "BikeTracker",
    description: {
      es: "Aplicación para ciclistas con rutas optimizadas, estadísticas de rendimiento y comunidad de ciclismo.",
      en: "Application for cyclists with optimized routes, performance statistics and cycling community."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Firebase", "MapBox"],
    link: "#",
    github: "https://github.com/example/biketracker"
  },
  {
    id: 31,
    title: "MenuDesigner",
    description: {
      es: "Herramienta de diseño de menús para restaurantes con cálculo de costos, fotos y gestión de cambios.",
      en: "Menu design tool for restaurants with cost calculation, photos and change management."
    },
    image: "/projects/placeholder.svg",
    tags: ["Vue.js", "Node.js", "MySQL"],
    link: "#",
    github: "https://github.com/example/menudesigner"
  },
  {
    id: 32,
    title: "WaterTracker",
    description: {
      es: "Aplicación para monitorear consumo de agua en hogares e industrias con alertas de fugas.",
      en: "App to monitor water consumption in homes and industries with leak alerts."
    },
    image: "/projects/placeholder.svg",
    tags: ["IoT", "Python", "MySQL"],
    link: "#",
    github: "https://github.com/example/watertracker"
  },
  {
    id: 33,
    title: "LocalShop",
    description: {
      es: "Plataforma de e-commerce para pequeños comercios locales con marketing integrado y gestión de inventario.",
      en: "E-commerce platform for small local businesses with integrated marketing and inventory management."
    },
    image: "/projects/placeholder.svg",
    tags: ["Shopify", "React", "Node.js"],
    link: "#",
    github: "https://github.com/example/localshop"
  },
  {
    id: 34,
    title: "MoodJournal",
    description: {
      es: "Diario digital con análisis de emociones mediante IA, visualización de patrones y sugerencias de bienestar.",
      en: "Digital journal with AI emotion analysis, pattern visualization and wellness suggestions."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "TensorFlow", "Firebase"],
    link: "#",
    github: "https://github.com/example/moodjournal"
  },
  {
    id: 35,
    title: "BookClub",
    description: {
      es: "Plataforma de clubes de lectura virtuales con reseñas, discusiones y recomendaciones personalizadas.",
      en: "Virtual book club platform with reviews, discussions and personalized recommendations."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/bookclub"
  },
  {
    id: 36,
    title: "ServicePro",
    description: {
      es: "Plataforma de servicios profesionales que conecta clientes con especialistas locales y calificados.",
      en: "Professional services platform connecting clients with qualified local specialists."
    },
    image: "/projects/placeholder.svg",
    tags: ["Flutter", "Django", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/servicepro"
  },
  {
    id: 37,
    title: "PodcastHub",
    description: {
      es: "Plataforma de podcasts con transmisión en vivo, suscripciones y monetización para creadores.",
      en: "Podcast platform with live streaming, subscriptions and monetization for creators."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Stripe", "Node.js"],
    link: "#",
    github: "https://github.com/example/podcasthub"
  },
  {
    id: 38,
    title: "GardenPro",
    description: {
      es: "Aplicación de jardinería con identificación de plantas, calendario de siembra y consejos de cultivo.",
      en: "Gardening app with plant identification, planting calendar and growing tips."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Firebase", "ML Kit"],
    link: "#",
    github: "https://github.com/example/gardenpro"
  },
  {
    id: 39,
    title: "CreativeStudio",
    description: {
      es: "Plataforma colaborativa para artistas gráficos con herramientas de diseño en la nube y galerías.",
      en: "Collaborative platform for graphic artists with cloud design tools and galleries."
    },
    image: "/projects/placeholder.svg",
    tags: ["Canvas API", "Node.js", "AWS"],
    link: "#",
    github: "https://github.com/example/creativestudio"
  },
  {
    id: 40,
    title: "FlightDeals",
    description: {
      es: "Agregador de vuelos con alertas de precios, comparativa de aerolíneas y reservas integradas.",
      en: "Flight aggregator with price alerts, airline comparison and integrated bookings."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Python", "API REST"],
    link: "#",
    github: "https://github.com/example/flightdeals"
  },
  {
    id: 41,
    title: "WorkoutLog",
    description: {
      es: "Diario de entrenamiento con rutinas personalizadas, seguimiento de progreso y planes de nutrición.",
      en: "Workout diary with personalized routines, progress tracking and nutrition plans."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Firebase", "Charts.js"],
    link: "#",
    github: "https://github.com/example/workoutlog"
  },
  {
    id: 42,
    title: "VideoTutorials",
    description: {
      es: "Plataforma de tutoriales en video con certificaciones, tests de conocimiento y comunidad activa.",
      en: "Video tutorial platform with certifications, knowledge tests and active community."
    },
    image: "/projects/placeholder.svg",
    tags: ["HLS", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/videotutorials"
  },
  {
    id: 43,
    title: "ClimateMeter",
    description: {
      es: "Aplicación para monitorear cambio climático local con datos históricos y predicciones climáticas.",
      en: "App to monitor local climate change with historical data and weather forecasts."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Open Weather API", "Charts"],
    link: "#",
    github: "https://github.com/example/climatemeter"
  },
  {
    id: 44,
    title: "DogWalker",
    description: {
      es: "Marketplace de paseadores de perros con seguimiento GPS, seguros y reseñas verificadas.",
      en: "Dog walker marketplace with GPS tracking, insurance and verified reviews."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Node.js", "Google Maps"],
    link: "#",
    github: "https://github.com/example/dogwalker"
  },
  {
    id: 45,
    title: "CodeReview",
    description: {
      es: "Plataforma de revisión de código con análisis automático, comentarios colaborativos e integración CI/CD.",
      en: "Code review platform with automatic analysis, collaborative comments and CI/CD integration."
    },
    image: "/projects/placeholder.svg",
    tags: ["GitHub API", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/codereview"
  },
  {
    id: 46,
    title: "RecipeSearch",
    description: {
      es: "Buscador de recetas inteligente con ingredientes disponibles, sugerencias nutricionales e historial.",
      en: "Smart recipe finder with available ingredients, nutritional suggestions and history."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "Spoonacular API", "Firebase"],
    link: "#",
    github: "https://github.com/example/recipesearch"
  },
  {
    id: 47,
    title: "VirtualOffice",
    description: {
      es: "Espacio de trabajo virtual con salas de reunión, pizarras compartidas y gestión de proyectos.",
      en: "Virtual workspace with meeting rooms, shared whiteboards and project management."
    },
    image: "/projects/placeholder.svg",
    tags: ["WebRTC", "Node.js", "Socket.io"],
    link: "#",
    github: "https://github.com/example/virtualoffice"
  },
  {
    id: 48,
    title: "ChariTable",
    description: {
      es: "Plataforma de donaciones para ONGs con transparencia de fondos, campañas virales y seguimiento de impacto.",
      en: "Donation platform for NGOs with fund transparency, viral campaigns and impact tracking."
    },
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/chariable"
  },
  {
    id: 49,
    title: "MusicProducer",
    description: {
      es: "Estudio de producción musical en línea con beats, efectos y colaboración en tiempo real.",
      en: "Online music production studio with beats, effects and real-time collaboration."
    },
    image: "/projects/placeholder.svg",
    tags: ["Web Audio API", "Node.js", "WebSocket"],
    link: "#",
    github: "https://github.com/example/musicproducer"
  },
  {
    id: 50,
    title: "LanguageLearner",
    description: {
      es: "Plataforma de aprendizaje de idiomas con IA, conversaciones en vivo y ejercicios gamificados.",
      en: "AI-powered language learning platform with live conversations and gamified exercises."
    },
    image: "/projects/placeholder.svg",
    tags: ["React", "TensorFlow", "Node.js"],
    link: "#",
    github: "https://github.com/example/languagelearner"
  },
  {
    id: 51,
    title: "SafeRoute",
    description: {
      es: "Aplicación de navegación segura con rutas alertas de delincuencia y comunidad de usuarios reportando.",
      en: "Safe navigation app with crime alerts and user community reporting."
    },
    image: "/projects/placeholder.svg",
    tags: ["React Native", "Google Maps", "Firebase"],
    link: "#",
    github: "https://github.com/example/saferoute"
  },
  {
    id: 52,
    title: "AiAssistant",
    description: {
      es: "Asistente IA conversacional para empresas con integración de bases de datos y atención al cliente automática.",
      en: "Conversational AI assistant for businesses with database integration and automated customer service."
    },
    image: "/projects/placeholder.svg",
    tags: ["OpenAI API", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/example/aiassistant"
  }
]
