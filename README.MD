│── public/                 # Archivos públicos (favicon, index.html, imágenes estáticas)
│── src/
│   ├── assets/             # Imágenes, íconos, fuentes
│   ├── components/         # Componentes reutilizables (Navbar, Footer, Button, etc.)
│   ├── pages/              # Vistas principales (Home, About, Projects, Contact)
│   ├── layouts/            # Layouts generales (ejemplo: MainLayout, AuthLayout si aplicara)
│   ├── hooks/              # Custom hooks (useDarkMode, useForm, etc.)
│   ├── context/            # React Context (tema oscuro, idioma, etc.)
│   ├── services/           # Llamadas a APIs (si consumes GitHub, LinkedIn, etc.)
│   ├── utils/              # Funciones de ayuda (formateo de fechas, validaciones, etc.)
│   ├── styles/             # Archivos globales de estilos (Tailwind config o CSS global)
│   ├── App.jsx             # Punto de entrada principal de tu app
│   ├── main.jsx            # Render principal de ReactDOM
│── package.json
│── tailwind.config.js      # Configuración de Tailwind (si usas Tailwind)
│── vite.config.js          # Configuración de Vite (si usas Vite)