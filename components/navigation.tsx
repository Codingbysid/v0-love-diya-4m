"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Proposal", value: "proposal" },
    { label: "Shrine", value: "shrine" },
    { label: "Gallery", value: "gallery" },
    { label: "Poems", value: "poems" },
  ]

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass mx-4 mt-4 rounded-2xl md:mx-6 md:mt-6"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <motion.button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 font-serif text-2xl font-bold glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Heart className="w-6 h-6 text-red-600" fill="currentColor" />
          </motion.div>
          <span className="text-red-600">Diya Love</span>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.value ? "text-red-600 font-bold" : "text-gray-700 hover:text-red-500"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/20 px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`block w-full text-left text-sm font-medium py-2 transition-colors ${
                currentPage === item.value ? "text-red-600 font-bold" : "text-gray-700 hover:text-red-500"
              }`}
              whileHover={{ x: 5 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
