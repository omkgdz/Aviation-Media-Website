import { Link } from 'react-router-dom'
import { Plane, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="w-6 h-6 text-secondary" />
              <span className="font-heading font-bold text-xl">
                <span className="text-white">AnDing</span>
                <span className="text-secondary">Spotting</span>
              </span>
            </div>
            <p className="text-muted text-sm">
              Professional aviation photography and media group dedicated to capturing the beauty of flight.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="block text-muted hover:text-secondary transition-colors">
                Photo Gallery
              </Link>
              <Link to="/reports" className="block text-muted hover:text-secondary transition-colors">
                Airshow Reports
              </Link>
              <Link to="/spotting-log" className="block text-muted hover:text-secondary transition-colors">
                Spotting Log
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-muted text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@andingspotting.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>China</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted text-sm">
            &copy; {currentYear} AnDing Spotting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
