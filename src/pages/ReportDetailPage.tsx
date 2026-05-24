import { useParams, Link } from 'react-router-dom'
import { reports } from '../data/reports'
import { Calendar, MapPin, ArrowLeft, User } from 'lucide-react'

const ReportDetailPage = () => {
  const { id } = useParams()
  const report = reports.find(r => r.id === id)

  if (!report) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-white mb-4">
            Report Not Found
          </h1>
          <Link
            to="/reports"
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            Back to Reports
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={report.coverImage}
          alt={report.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link
            to="/reports"
            className="inline-flex items-center gap-2 text-white/80 hover:text-secondary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Link>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {report.title}
          </h1>
          
          <p className="text-xl text-white/80 mb-4">
            {report.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 text-white/70">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {report.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {report.location}
            </span>
            {report.airport && (
              <span className="font-mono text-secondary">
                {report.airport}
              </span>
            )}
            {report.authors && report.authors.length > 0 && (
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                By {report.authors.join(' & ')}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/90 leading-relaxed whitespace-pre-line">
              {report.content}
            </div>
          </div>

          {report.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {report.gallery.map((photo) => (
                  <div
                    key={photo.id}
                    className="aspect-video rounded-lg overflow-hidden glass-card"
                  >
                    <img
                      src={photo.thumbnail}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReportDetailPage
