"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, ImageIcon, Feather } from "lucide-react"

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const cards = [
    {
      title: "Proposal",
      icon: Heart,
      color: "bg-red-500",
      page: "proposal",
      description: "Our special moment",
      rose: "🌹",
    },
    {
      title: "Shrine",
      icon: Sparkles,
      color: "bg-rose-400",
      page: "shrine",
      description: "My goddess",
      rose: "🌷",
    },
    {
      title: "Gallery",
      icon: ImageIcon,
      color: "bg-pink-500",
      page: "gallery",
      description: "Our memories",
      rose: "🌺",
    },
    {
      title: "Poems",
      icon: Feather,
      color: "bg-red-600",
      page: "poems",
      description: "Love letters",
      rose: "🌸",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 text-4xl floating-rose opacity-40">🌹</motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-5xl floating-rose opacity-30"
        style={{ animationDelay: "1s" }}
      >
        🌷
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-3xl floating-rose opacity-35"
        style={{ animationDelay: "2s" }}
      >
        🌸
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-800 mb-4 glow">
          Our Love Story
        </motion.h1>
        <p className="text-xl md:text-2xl text-red-600 font-light mb-2">നമ്മുടെ സ്നേഹകഥ</p>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ delay: i * 0.15, repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="text-red-600 text-2xl"
            >
              ❤️
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10"
      >
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <motion.button
              key={card.page}
              onClick={() => setCurrentPage(card.page)}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-8 rounded-2xl text-left group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                {card.rose}
              </div>

              <div
                className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow group-hover:shadow-red-400/50`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.button>
          )
        })}
      </motion.div>
    </div>
  )
}
