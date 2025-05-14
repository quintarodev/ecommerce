export function formatPrice(price: number) {
  return price.toLocaleString('es-pe', { style: 'currency', currency: 'PEN' })
}
