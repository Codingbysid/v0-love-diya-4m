"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ProposalPageProps {
  setCurrentPage: (page: string) => void
}

export default function ProposalPage({ setCurrentPage }: ProposalPageProps) {
  const [isYes, setIsYes] = useState(false)
  const [noHover, setNoHover] = useState(false)

  const createConfetti = () => {
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.textContent = ["❤️", "✨", "💖", "🎉", "🌹", "💕", "✨"][Math.floor(Math.random() * 7)]
      confetti.style.left = Math.random() * 100 + "%"
      confetti.style.fontSize = Math.random() * 30 + 20 + "px"
      confetti.style.animationDelay = Math.random() * 0.5 + "s"
      document.body.appendChild(confetti)

      setTimeout(() => confetti.remove(), 3000)
    }
  }

  const handleYes = () => {
    setIsYes(true)
    createConfetti()
  }

  const getNoButtonStyle = () => {
    if (!noHover) return { x: 0, y: 0 }
    return {
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden">
      {!isYes && (
        <>
          <motion.div className="absolute top-20 left-1/4 text-6xl floating-rose opacity-25">🌹</motion.div>
          <motion.div
            className="absolute bottom-32 right-1/4 text-5xl floating-rose opacity-20"
            style={{ animationDelay: "0.5s" }}
          >
            🌷
          </motion.div>
        </>
      )}

      {isYes ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 text-center max-w-2xl relative z-10"
        >
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            Yes! ❤️
          </motion.h1>
          <p className="text-xl text-gray-700 mb-8">
            You've made me the happiest person in the world. You are my everything, and I cherish every moment with you.
            Thank you for saying yes.
          </p>
          <motion.p
            className="text-gray-600 text-lg font-serif"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            Forever yours... 💕
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 text-center max-w-2xl relative z-10"
        >
          <motion.h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Will you be my Valentine?
          </motion.h1>
          <p className="text-gray-600 text-lg mb-12">
            Every moment with you is a treasure. Will you let me love you endlessly?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={handleYes}
              className="pulse-rose bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all shadow-lg shadow-red-600/50"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! 💕
            </motion.button>

            <motion.button
              onMouseEnter={() => setNoHover(true)}
              onMouseLeave={() => setNoHover(false)}
              animate={getNoButtonStyle()}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
