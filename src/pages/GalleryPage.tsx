import { useState, useMemo } from 'react'
import PhotoCard from '../components/PhotoCard'
import Lightbox from '../components/Lightbox'
import { photos } from '../data/photos'
import { useGalleryStore } from '../store/useGalleryStore'
import { Camera, Plane, Shield, Wind } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Aircraft', icon: Camera },
  { id: 'commercial', label: 'Commercial', icon: Plane },
  { id: 'military', label: 'Military', icon: Shield },
  { id: 'general', label: 'General Aviation', icon: Wind },
  { id: 'helicopter', label: 'Helicopters', icon: Shield }
]

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { lightboxOpen, lightboxIndex, openLightbox, closeLightbox, nextImage, prevImage } = useGalleryStore()

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return photos
    return photos.filter(photo => photo.category === selectedCategory)
  }, [selectedCategory])

  const handleNextImage = () => {
    if (lightboxIndex < filteredPhotos.length - 1) {
      nextImage()
    } else {
      useGalleryStore.setState({ lightboxIndex: 0 })
    }
  }

  const handlePrevImage = () => {
    if (lightboxIndex > 0) {
      prevImage()
    } else {
      useGalleryStore.setState({ lightboxIndex: filteredPhotos.length - 1 })
    }
  }

  return (
    <div className="pt-20">
      <div className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-5xl mb-4">
            <span className="text-white">Photo </span>
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Browse our collection of stunning aviation photography
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-secondary text-white'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-muted mx-auto mb-4" />
              <p className="text-muted text-lg">No photos in this category</p>
            </div>
          )}
        </div>
      </div>

      <Lightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  )
}

export default GalleryPage
