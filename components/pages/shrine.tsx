"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ShinePageProps {
  setCurrentPage: (page: string) => void
}

export default function ShrinePage({ setCurrentPage }: ShinePageProps) {
  const [flowers, setFlowers] = useState<Array<{ id: number; x: number }>>([])

  const createFlowerRain = () => {
    const newFlowers = [...Array(30)].map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
    }))

    setFlowers((prev) => [...prev, ...newFlowers])

    setTimeout(() => {
      setFlowers((prev) => prev.filter((f) => !newFlowers.some((nf) => nf.id === f.id)))
    }, 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden">
      {/* Flower rain overlay */}
      {flowers.map((flower) => (
        <div key={flower.id} className="flower-rain fixed pointer-events-none" style={{ left: flower.x + "%" }}>
          🌹
        </div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-12 text-center max-w-2xl relative z-10"
      >
        <div className="absolute inset-0 rounded-3xl pointer-events-none">
          <div className="absolute inset-0 border-4 border-red-400 rounded-3xl" />
          <div className="absolute inset-3 border-2 border-amber-300 rounded-2xl" />
          <div className="absolute inset-6 border-1 border-red-300 rounded-xl opacity-50" />
        </div>

        <div className="relative z-10">
          <motion.div
            className="w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <span className="text-8xl">👑</span>
          </motion.div>

          <motion.h1 className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-4 glow">My Goddess</motion.h1>

          <p className="text-red-600 text-lg mb-2 font-serif">आप मेरी दुनिया हो</p>

          <p className="text-gray-600 text-base mb-10">
            You are my divine blessing, my reason for happiness, and my greatest treasure. Every prayer I make is to
            thank the universe for you.
          </p>

          <motion.button
            onClick={createFlowerRain}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-red-600/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Offer Flowers 🌹
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
