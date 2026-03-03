export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-[#121212]">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-white/50">
        <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

