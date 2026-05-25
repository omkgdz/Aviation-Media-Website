import { Link } from 'react-router-dom'
import { Report } from '../data/reports'
import { Calendar, MapPin } from 'lucide-react'
import { getImageUrl } from '../config/imageConfig'

interface ReportCardProps {
  report: Report
}

const ReportCard = ({ report }: ReportCardProps) => {
  return (
    <Link
      to={`/reports/${report.id}`}
      className="group block overflow-hidden rounded-lg glass-card hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(report.coverImage)}
          alt={report.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-secondary transition-colors">
            {report.title}
          </h3>
          <p className="text-white/80 text-sm mb-2 line-clamp-2">
            {report.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {report.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {report.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ReportCard
