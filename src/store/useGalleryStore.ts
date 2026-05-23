import { create } from 'zustand'

interface GalleryState {
  selectedCategory: string
  lightboxOpen: boolean
  lightboxIndex: number
  setSelectedCategory: (category: string) => void
  openLightbox: (index: number) => void
  closeLightbox: () => void
  nextImage: () => void
  prevImage: () => void
}

export const useGalleryStore = create<GalleryState>((set) => ({
  selectedCategory: 'all',
  lightboxOpen: false,
  lightboxIndex: 0,
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  openLightbox: (index) => set({ lightboxOpen: true, lightboxIndex: index }),
  
  closeLightbox: () => set({ lightboxOpen: false }),
  
  nextImage: () => set((state) => ({ lightboxIndex: state.lightboxIndex + 1 })),
  
  prevImage: () => set((state) => ({ lightboxIndex: Math.max(0, state.lightboxIndex - 1) })),
}))
