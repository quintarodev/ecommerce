import { Product } from '@/lib/mock'

import { create } from 'zustand'

interface Props {
  favorites: Map<number, Product>
  addFavorite: (p: Product) => void
}
export const useFavorite = create<Props>((set) => ({
  favorites: new Map(),
  addFavorite: (prod) =>
    set((state) => {
      const newFavorites = new Map(state.favorites)
      console.log(newFavorites)

      newFavorites.set(prod.id, prod)

      return { favorites: newFavorites }
    }),
}))
