"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-4">
          <h2 className="text-4xl">¿Interesado en mí?</h2>
          <h1 className="text-6xl font-serif">No dudes en contactarme.</h1>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2">
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3">
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  )
}

