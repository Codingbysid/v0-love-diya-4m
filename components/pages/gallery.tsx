"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryPageProps {
  setCurrentPage: (page: string) => void
}

export default function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const photos = [
    { id: 1, title: "First Meeting", query: "romantic couple first date sunset red roses" },
    { id: 2, title: "Adventure", query: "couple adventure travel beautiful moments" },
    { id: 3, title: "Everyday Love", query: "couple tender moment intimate love" },
    { id: 4, title: "Laughter", query: "couple laughing together joy happiness" },
    { id: 5, title: "Sunset Walk", query: "couple holding hands sunset beach romantic" },
    { id: 6, title: "Together Forever", query: "romantic couple embrace hearts rose" },
  ]

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
    }
  }

  return (
    <div className="min-h-screen px-4 pt-28 pb-12 relative overflow-hidden">
      <motion.div className="absolute top-32 right-10 text-5xl floating-rose opacity-20">🌹</motion.div>
      <motion.div
        className="absolute bottom-40 left-10 text-4xl floating-rose opacity-15"
        style={{ animationDelay: "1.5s" }}
      >
        🌷
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif text-4xl md:text-5xl font-bold text-center text-red-600 mb-12 glow"
      >
        Our Gallery
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-square"
          >
            <img
              src={`/.jpg?height=400&width=400&query=${encodeURIComponent(photo.query)}`}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-black/30 flex items-center justify-center"
            >
              <motion.div whileHover={{ scale: 1.2 }} className="text-white text-3xl">
                🔍
              </motion.div>
            </motion.div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/80 to-transparent p-4">
              <p className="text-white font-serif text-lg font-semibold">{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white bg-red-600/80 hover:bg-red-700 rounded-full p-2 z-10"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={`/.jpg?height=800&width=800&query=${encodeURIComponent(photos[selectedIndex].query)}`}
                  alt={photos[selectedIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-6 text-white"
              >
                <h2 className="font-serif text-3xl font-bold">{photos[selectedIndex].title}</h2>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handlePrev}
                  className="text-white bg-red-600/50 hover:bg-red-700/70 rounded-full p-3 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleNext}
                  className="text-white bg-red-600/50 hover:bg-red-700/70 rounded-full p-3 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-white/70 text-sm">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
