export interface Member {
  id: string
  name: string
  role: string
  avatar: string
  bio: string
  instagram?: string
  email?: string
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Zhang Wei',
    role: 'Lead Photographer',
    avatar: '/images/members/member1.jpg',
    bio: 'Aviation photographer with 8+ years experience, specializes in commercial aviation and airshows.',
    instagram: 'https://instagram.com/zhangwei_spotting',
    email: 'zhangwei@adplanespot.org'
  },
  {
    id: '2',
    name: 'Li Ming',
    role: 'Military Aviation Expert',
    avatar: '/images/members/member2.jpg',
    bio: 'Focused on military aircraft photography, documented numerous exercises and airshows worldwide.',
    instagram: 'https://instagram.com/liming_aviation',
    email: 'liming@adplanespot.org'
  },
  {
    id: '3',
    name: 'Wang Fang',
    role: 'Night Operations Specialist',
    avatar: '/images/members/member3.jpg',
    bio: 'Expert in night photography and airport operations, capturing stunning night departures and arrivals.',
    instagram: 'https://instagram.com/wangfang_night',
    email: 'wangfang@adplanespot.org'
  },
  {
    id: '4',
    name: 'Chen Jie',
    role: 'Regional Spotter',
    avatar: '/images/members/member4.jpg',
    bio: 'Covers regional airports and general aviation, passionate about vintage aircraft.',
    instagram: 'https://instagram.com/chenjie_spots',
    email: 'chenjie@adplanespot.org'
  },
  {
    id: '5',
    name: 'Liu Yang',
    role: 'Helicopter Specialist',
    avatar: '/images/members/member5.jpg',
    bio: 'Dedicated to helicopter photography, covering EMS, law enforcement, and corporate operations.',
    instagram: 'https://instagram.com/liuyang_heli',
    email: 'liuyang@adplanespot.org'
  },
  {
    id: '6',
    name: 'Zhao Hong',
    role: 'Documentation Lead',
    avatar: '/images/members/member6.jpg',
    bio: 'Maintains comprehensive spotting logs and database of aircraft registrations and movements.',
    instagram: 'https://instagram.com/zhaohong_spots',
    email: 'zhaohong@adplanespot.org'
  }
]
