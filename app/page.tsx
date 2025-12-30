"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomePage from "@/components/pages/home"
import ProposalPage from "@/components/pages/proposal"
import ShrinePage from "@/components/pages/shrine"
import GalleryPage from "@/components/pages/gallery"
import PoetryPage from "@/components/pages/poetry"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />
      case "proposal":
        return <ProposalPage setCurrentPage={setCurrentPage} />
      case "shrine":
        return <ShrinePage setCurrentPage={setCurrentPage} />
      case "gallery":
        return <GalleryPage setCurrentPage={setCurrentPage} />
      case "poems":
        return <PoetryPage setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <>
      <div className="mesh-gradient" />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative z-10">{renderPage()}</main>
    </>
  )
}
