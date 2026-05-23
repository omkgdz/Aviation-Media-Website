import { Member } from '../data/members'
import { Camera, Plane } from 'lucide-react'

interface MemberCardProps {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-xl text-white mb-1">
            {member.name}
          </h3>
          <p className="text-secondary text-sm font-medium">
            {member.role}
          </p>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-pink-500/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Camera className="w-4 h-4 text-white" />
            </a>
          )}
          {member.jetphotos && (
            <a
              href={member.jetphotos}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-blue-500/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Plane className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="p-4">
        <p className="text-muted text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  )
}

export default MemberCard
