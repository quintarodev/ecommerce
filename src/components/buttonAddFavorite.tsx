'use client'

import { useFavorite } from '@/hooks/useFavorites'

import { Product } from '@/lib/mock'

interface Props {
  product: Product
}
function ButtonAddFavorite({ product }: Props) {
  const { addFavorite } = useFavorite()
  const handleClick = () => {
    addFavorite(product)
  }

  return (
    <button
      onClick={handleClick}
      className="bg-dark text-ligth font-semibold w-full py-2 px-5 rounded-md"
    >
      Favorito
    </button>
  )
}

export default ButtonAddFavorite
