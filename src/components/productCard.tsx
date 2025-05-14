import { Product } from '@/lib/mock'

import { formatPrice } from '@/lib/utils'

import ButtonAddFavorite from './buttonAddFavorite'

interface Props {
  product: Product
}
const ProductCard = ({ product }: Props) => {
  const { image, name, price } = product

  return (
    <article>
      <img src={image} alt="" className="h-[120px] " />
      <h2>{name}</h2>
      <span>{formatPrice(price)}</span>
      <footer className="flex items-center ">
        <ButtonAddFavorite product={product} />
      </footer>
    </article>
  )
}
export default ProductCard
