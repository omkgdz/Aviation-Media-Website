import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Photo } from '../data/photos'
import { getImageUrl } from '../config/imageConfig'

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const Lightbox = ({ photos, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !photos[currentIndex]) return null

  const currentPhoto = photos[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div
        className="max-w-6xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getImageUrl(currentPhoto.url)}
          alt={currentPhoto.title}
          className="max-w-full max-h-[80vh] object-contain"
        />
        
        <div className="mt-4 text-center">
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            {currentPhoto.title}
          </h3>
          <p className="font-mono text-secondary">
            {currentPhoto.registration}
          </p>
          <p className="text-muted mt-2">
            {currentPhoto.aircraft} • {currentPhoto.airline}
          </p>
          <p className="text-muted text-sm mt-1">
            {currentPhoto.date} • {currentPhoto.airport}
          </p>
        </div>

        <div className="mt-4 text-center text-white/60 text-sm">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>
    </div>
  )
}

export default Lightbox
