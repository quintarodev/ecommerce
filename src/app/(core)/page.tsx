import ProductCard from '@/components/productCard'

import { productos } from '@/lib/mock'

type Props = {
  searchParams: Promise<{
    category: string
  }>
}
export default async function Home({ searchParams }: Props) {
  const { category } = await searchParams

  const productsFilter = category
    ? productos.filter((p) => p.category === category)
    : productos

  return (
    <section className="grid grid-cols-3 gap-8">
      {productsFilter.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </section>
  )
}
