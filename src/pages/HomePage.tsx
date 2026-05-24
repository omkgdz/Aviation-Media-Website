import HeroSection from '../components/HeroSection'
import MemberCard from '../components/MemberCard'
import ReportCard from '../components/ReportCard'
import { members } from '../data/members'
import { reports } from '../data/reports'

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4">
              <span className="text-white">Latest </span>
              <span className="gradient-text">Reports</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Coverage from the world's best airshows and aviation events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.slice(0, 3).map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4">
              <span className="text-white">Meet the </span>
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our talented group of aviation photographers and enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl mb-6">
            <span className="gradient-text">Aviation Photography</span>
            <span className="text-white"> Excellence</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            AnDing Spotting brings you stunning aviation photography from around the world. 
            From commercial airliners to military aircraft, airshows to airport operations, 
            we capture the beauty and drama of flight.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
