import { useParams, Link } from 'react-router-dom'
import { spottingLogs } from '../data/spottingLogs'
import { MapPin, Sun, Wind, Eye, ArrowLeft } from 'lucide-react'

const SpottingLogDetailPage = () => {
  const { id } = useParams()
  const log = spottingLogs.find(l => l.id === id)

  if (!log) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-white mb-4">
            Spotting Log Not Found
          </h1>
          <Link
            to="/spotting-log"
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            Back to Spotting Log
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/spotting-log"
            className="inline-flex items-center gap-2 text-white/80 hover:text-secondary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Spotting Log
          </Link>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {log.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-white/70">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              {log.airportName}
            </span>
            <span className="font-mono text-secondary text-xl">
              {log.airport}
            </span>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-lg p-6 mb-8">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">
                  Session Details
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-secondary mb-2">
                      {log.totalAircraft}
                    </p>
                    <p className="text-muted text-sm">Total Aircraft</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-secondary mb-2">
                      {log.uniqueTypes}
                    </p>
                    <p className="text-muted text-sm">Unique Types</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-2">
                      {log.duration}
                    </p>
                    <p className="text-muted text-sm">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-2">
                      {log.date}
                    </p>
                    <p className="text-muted text-sm">Date</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">
                    Weather Conditions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <Sun className="w-5 h-5 text-secondary" />
                      <span>{log.weather.condition}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Wind className="w-5 h-5 text-secondary" />
                      <span>{log.weather.wind}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Eye className="w-5 h-5 text-secondary" />
                      <span>{log.weather.visibility}</span>
                    </div>
                  </div>
                </div>
              </div>

              {log.highlights.length > 0 && (
                <div className="glass-card rounded-lg p-6 mb-8">
                  <h2 className="font-heading font-bold text-2xl text-white mb-4">
                    Session Highlights
                  </h2>
                  <ul className="space-y-2">
                    {log.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-white/80">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {log.observations.length > 0 && (
                <div className="glass-card rounded-lg p-6">
                  <h2 className="font-heading font-bold text-2xl text-white mb-6">
                    Aircraft Observations
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Time</th>
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Aircraft</th>
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Registration</th>
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Airline</th>
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Route</th>
                          <th className="text-left py-3 px-4 text-secondary font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {log.observations.map((obs, index) => (
                          <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-3 px-4 font-mono text-white">{obs.time}</td>
                            <td className="py-3 px-4 text-white">{obs.aircraft}</td>
                            <td className="py-3 px-4 font-mono text-secondary">{obs.registration}</td>
                            <td className="py-3 px-4 text-white/80">{obs.airline}</td>
                            <td className="py-3 px-4 font-mono text-white/80">
                              {obs.origin} → {obs.destination}
                            </td>
                            <td className="py-3 px-4 text-muted text-sm">{obs.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card rounded-lg p-6 sticky top-24">
                <h3 className="font-heading font-semibold text-xl text-white mb-4">
                  Quick Stats
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Airport</span>
                    <span className="font-mono text-secondary">{log.airport}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Date</span>
                    <span className="text-white">{log.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Duration</span>
                    <span className="text-white">{log.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Total Aircraft</span>
                    <span className="text-secondary font-bold">{log.totalAircraft}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Unique Types</span>
                    <span className="text-secondary font-bold">{log.uniqueTypes}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-semibold text-white mb-3">Weather</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted">
                      <span className="text-white">Condition:</span> {log.weather.condition}
                    </p>
                    <p className="text-muted">
                      <span className="text-white">Wind:</span> {log.weather.wind}
                    </p>
                    <p className="text-muted">
                      <span className="text-white">Visibility:</span> {log.weather.visibility}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpottingLogDetailPage
