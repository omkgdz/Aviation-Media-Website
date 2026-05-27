export interface Member {
  id: string
  name: string
  nickname: string
  role: string
  instagram?: string
  email?: string
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Yuyang Zhao',
    nickname: 'omkgdz',
    role: 'Aviation Photographer',
    instagram: 'https://instagram.com/jack.zhao.aviation',
    email: 'omkgdz@gmail.com'
  },
  {
    id: '2',
    name: 'Boyuan Zhang',
    nickname: 'Evan',
    role: 'Aviation Photographer',
    instagram: 'https://instagram.com/evancheung_ay',
    email: 'evanzhang613@gmail.com'
  },
  {
    id: '3',
    name: 'Runfeng Jiang',
    nickname: 'Wolfe',
    role: 'Aviation Photographer',
    instagram: 'https://instagram.com/jiangwolfe',
    email: 'gan111345@outlook.com'
  },
  {
    id: '4',
    name: 'Haoming Zhang',
    nickname: 'Ryan',
    role: 'Aviation Photographer',
    instagram: 'https://instagram.com/ryan_h_chang',
    email: 'mpr_ryanzhang@163.com'
  }
]
