'use client'

import { useFavorite } from '@/hooks/useFavorites'

import ProductCard from './productCard'

function CountFavorite() {
  const { favorites } = useFavorite()

  return (
    <div className="grid grid-cols-3 gap-8">
      {Array.from(favorites.values()).map((prod) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  )
}

export default CountFavorite
