import { Photo } from '../data/photos'
import { Plane, Calendar, MapPin } from 'lucide-react'

interface PhotoCardProps {
  photo: Photo
  onClick: () => void
}

const PhotoCard = ({ photo, onClick }: PhotoCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg glass-card hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={photo.thumbnail}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plane className="w-8 h-8 text-white/80" />
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-heading font-semibold text-white text-sm mb-2">
            {photo.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs text-white/80">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {photo.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {photo.airport}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="font-mono text-secondary text-xs mb-2">
          {photo.registration}
        </p>
        <h3 className="font-heading font-semibold text-white mb-1">
          {photo.aircraft}
        </h3>
        <p className="text-muted text-sm">
          {photo.airline}
        </p>
      </div>
    </div>
  )
}

export default PhotoCard
