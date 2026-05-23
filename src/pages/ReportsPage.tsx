import ReportCard from '../components/ReportCard'
import { reports } from '../data/reports'

const ReportsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-5xl mb-4">
            <span className="text-white">Airshow & Open Day </span>
            <span className="gradient-text">Reports</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Comprehensive coverage of aviation events around the world
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>

          {reports.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No reports available yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReportsPage
