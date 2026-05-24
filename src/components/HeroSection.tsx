import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { photos } from '../data/photos'

const HeroSection = () => {
  const [shuffledPhotos, setShuffledPhotos] = useState<typeof photos>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const shuffleArray = (array: typeof photos) => {
      const newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      return newArray
    }
    setShuffledPhotos(shuffleArray(photos))
  }, [])

  useEffect(() => {
    if (shuffledPhotos.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledPhotos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [shuffledPhotos])

  const nextSlide = () => {
    if (shuffledPhotos.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % shuffledPhotos.length)
    }
  }

  const prevSlide = () => {
    if (shuffledPhotos.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + shuffledPhotos.length) % shuffledPhotos.length)
    }
  }

  if (shuffledPhotos.length === 0) return null

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {shuffledPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary"></div>
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">AnDing</span>{' '}
            <span className="gradient-text">Spotting</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
            Professional Aviation Photography & Media
          </p>
          <p className="text-lg text-secondary">
            Capturing the beauty of flight
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {shuffledPhotos.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-secondary w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
