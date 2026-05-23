import SpottingLogCard from '../components/SpottingLogCard'
import { spottingLogs } from '../data/spottingLogs'

const SpottingLogPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-5xl mb-4">
            <span className="text-white">Spotting </span>
            <span className="gradient-text">Log</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Detailed records of our spotting sessions at airports across the region
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spottingLogs.map((log) => (
              <SpottingLogCard key={log.id} log={log} />
            ))}
          </div>

          {spottingLogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No spotting logs available yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpottingLogPage
