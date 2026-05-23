import { Link } from 'react-router-dom'
import { SpottingLog } from '../data/spottingLogs'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface SpottingLogCardProps {
  log: SpottingLog
}

const SpottingLogCard = ({ log }: SpottingLogCardProps) => {
  return (
    <Link
      to={`/spotting-log/${log.id}`}
      className="group block overflow-hidden rounded-lg glass-card hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-secondary transition-colors">
              {log.title}
            </h3>
            <p className="text-secondary font-mono text-sm">
              {log.airport}
            </p>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold">
              {log.totalAircraft}
            </p>
            <p className="text-muted text-xs">Aircraft</p>
          </div>
        </div>

        <p className="text-muted text-sm mb-4">
          {log.airportName}
        </p>

        <div className="space-y-2 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>{log.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            <span>{log.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>{log.weather.condition}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-secondary">
                {log.totalAircraft}
              </p>
              <p className="text-xs text-muted">Total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">
                {log.uniqueTypes}
              </p>
              <p className="text-xs text-muted">Types</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SpottingLogCard
