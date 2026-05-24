import { Member } from '../data/members'
import { Camera, Mail } from 'lucide-react'

interface MemberCardProps {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="glass-card rounded-lg p-6 group hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <h3 className="font-heading font-bold text-xl text-white mb-2">
          {member.name}
        </h3>
        <p className="text-secondary text-sm font-medium">
          {member.role}
        </p>
      </div>

      <div className="flex gap-3">
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-pink-500/80 transition-colors"
          >
            <Camera className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Instagram</span>
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-green-500/80 transition-colors"
          >
            <Mail className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Email</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default MemberCard
