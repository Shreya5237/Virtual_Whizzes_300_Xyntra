"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Easy Skill Enhancer Logo"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
              <span className="text-2xl font-bold gradient-text">Easy Skill Enhancer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${isActive("/") ? "bg-purple text-white" : "text-gray-700 hover:bg-purple-light/20"}`}
            >
              Home
            </Link>
            <Link
              href="/vr"
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${isActive("/vr") ? "bg-teal text-white" : "text-gray-700 hover:bg-teal-light/20"}`}
            >
              VR
            </Link>
            <Link
              href="/ar"
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${isActive("/ar") ? "bg-orange text-white" : "text-gray-700 hover:bg-orange-light/20"}`}
            >
              AR
            </Link>
            <Link
              href="/our-work"
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${isActive("/our-work") ? "bg-pink text-white" : "text-gray-700 hover:bg-pink-light/20"}`}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${isActive("/about") ? "bg-yellow text-white" : "text-gray-700 hover:bg-yellow-light/20"}`}
            >
              About Us
            </Link>
            <Link href="/login">
              <Button
                variant="default"
                size="lg"
                className="ml-4 rounded-full bg-gradient-to-r from-purple to-teal hover:from-teal hover:to-purple transition-all duration-500"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple hover:bg-purple-light/20 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive("/") ? "bg-purple text-white" : "text-gray-700 hover:bg-purple-light/20"}`}
            >
              Home
            </Link>
            <Link
              href="/vr"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive("/vr") ? "bg-teal text-white" : "text-gray-700 hover:bg-teal-light/20"}`}
            >
              VR
            </Link>
            <Link
              href="/ar"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive("/ar") ? "bg-orange text-white" : "text-gray-700 hover:bg-orange-light/20"}`}
            >
              AR
            </Link>
            <Link
              href="/our-work"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive("/our-work") ? "bg-pink text-white" : "text-gray-700 hover:bg-pink-light/20"}`}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive("/about") ? "bg-yellow text-white" : "text-gray-700 hover:bg-yellow-light/20"}`}
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="block px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple to-teal"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

