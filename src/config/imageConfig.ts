export const IMAGE_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://anding-spotting.c876c73ef02dc7b79e1ed16fcf79f790.r2.dev'
  : '/images'

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${IMAGE_BASE_URL}${path}`
}