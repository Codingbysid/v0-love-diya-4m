"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, X } from "lucide-react"

interface Poem {
  id: number
  title: string
  content: string
  date: string
}

interface PoetryPageProps {
  setCurrentPage: (page: string) => void
}

export default function PoetryPage({ setCurrentPage }: PoetryPageProps) {
  const [poems, setPoems] = useState<Poem[]>([
    {
      id: 1,
      title: "First Love",
      content: "When I first saw your smile, my heart knew it had found its home. In your eyes, I see forever.",
      date: "Day 1",
    },
    {
      id: 2,
      title: "Eternal Bond",
      content: "Two souls, one heart. Through every moment, every breath, every second - you are my reason.",
      date: "Always",
    },
    {
      id: 3,
      title: "Forever with You",
      content: "In this lifetime and beyond, my love for you transcends all boundaries. You are my everything.",
      date: "Forever",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: "", content: "", date: "" })

  const handleAddPoem = () => {
    if (formData.title && formData.content) {
      const newPoem = {
        id: Date.now(),
        ...formData,
      }
      setPoems([newPoem, ...poems])
      setFormData({ title: "", content: "", date: "" })
      setShowForm(false)
    }
  }

  const handleDeletePoem = (id: number) => {
    setPoems(poems.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen px-4 pt-28 pb-12 relative overflow-hidden">
      <motion.div className="absolute top-40 right-20 text-6xl floating-rose opacity-20">🌹</motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-5xl floating-rose opacity-15"
        style={{ animationDelay: "2s" }}
      >
        🌷
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif text-4xl md:text-5xl font-bold text-center text-red-600 mb-4 glow"
      >
        Love Letters
      </motion.h1>

      <p className="text-center text-red-600 mb-12 font-semibold">Words from my heart to yours</p>

      {/* Add New Poem Button */}
      <motion.button
        onClick={() => setShowForm(!showForm)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mx-auto block glass rounded-full p-4 text-red-600 hover:text-red-700 transition-colors mb-8 shadow-lg shadow-red-600/20"
      >
        <Plus className="w-6 h-6" />
      </motion.button>

      {/* Add Poem Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8 mb-8 relative z-10"
        >
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full bg-white/50 border border-red-300/50 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <textarea
            placeholder="Your love letter..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full bg-white/50 border border-red-300/50 rounded-lg px-4 py-2 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
          />

          <input
            type="text"
            placeholder="Date or occasion (optional)"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-white/50 border border-red-300/50 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <div className="flex gap-4">
            <motion.button
              onClick={handleAddPoem}
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Save Letter
            </motion.button>

            <motion.button
              onClick={() => setShowForm(false)}
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Poems List */}
      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        {poems.map((poem, index) => (
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-8 relative group border-l-4 border-red-600"
          >
            <motion.button
              onClick={() => handleDeletePoem(poem.id)}
              whileHover={{ scale: 1.2 }}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <h2 className="font-serif text-3xl font-bold text-red-600 mb-4">{poem.title}</h2>

            <p className="text-gray-700 text-lg leading-relaxed font-light mb-4">{poem.content}</p>

            <p className="text-red-500 text-sm italic">{poem.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
