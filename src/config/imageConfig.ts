export const IMAGE_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://pub-c876cb2d9c3b4a9f98f9b142d0b3778d.r2.dev'
  : '/images'

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${IMAGE_BASE_URL}${path}`
}