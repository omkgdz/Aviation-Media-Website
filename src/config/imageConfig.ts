export const IMAGE_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://pub-0869994e37154e358387e8b8397f1273.r2.dev'
  : '/images'

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${IMAGE_BASE_URL}${path}`
}