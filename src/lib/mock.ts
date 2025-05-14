export interface Product {
  id: number
  name: string
  category: 'polos' | 'pantalones' | 'zapatillas'
  price: number
  image: string
  stock: number
  description: string
}
export const productos: Product[] = [
  // Polos
  {
    id: 1,
    name: 'Polo Básico Blanco',
    category: 'polos',
    price: 39.9,
    image: '/images/polos/blanco.jpg',
    stock: 25,
    description: 'Polo de algodón 100% con corte clásico y color blanco.',
  },
  {
    id: 2,
    name: 'Polo Negro Slim Fit',
    category: 'polos',
    price: 44.9,
    image: '/images/polos/negro.jpg',
    stock: 15,
    description: 'Polo ajustado al cuerpo, ideal para un look moderno.',
  },
  {
    id: 3,
    name: 'Polo Estampado Verano',
    category: 'polos',
    price: 49.9,
    image: '/images/polos/estampado.jpg',
    stock: 10,
    description: 'Polo con diseño tropical, perfecto para el verano.',
  },

  // Pantalones
  {
    id: 4,
    name: 'Pantalón Jean Azul',
    category: 'pantalones',
    price: 89.9,
    image: '/images/pantalones/jean-azul.jpg',
    stock: 18,
    description: 'Jean clásico color azul con corte recto.',
  },
  {
    id: 5,
    name: 'Pantalón Chino Beige',
    category: 'pantalones',
    price: 79.9,
    image: '/images/pantalones/chino-beige.jpg',
    stock: 12,
    description: 'Pantalón chino cómodo y versátil en color beige.',
  },
  {
    id: 6,
    name: 'Jogger Deportivo Gris',
    category: 'pantalones',
    price: 59.9,
    image: '/images/pantalones/jogger-gris.jpg',
    stock: 20,
    description:
      'Jogger de algodón con puño, ideal para actividades casuales o deportivas.',
  },

  // Zapatillas
  {
    id: 7,
    name: 'Zapatillas Urbanas Negras',
    category: 'zapatillas',
    price: 149.9,
    image: '/images/zapatillas/negras.jpg',
    stock: 14,
    description: 'Zapatillas urbanas negras con diseño minimalista.',
  },
  {
    id: 8,
    name: 'Zapatillas Running Azul',
    category: 'zapatillas',
    price: 179.9,
    image: '/images/zapatillas/running-azul.jpg',
    stock: 9,
    description:
      'Diseñadas para correr con buena amortiguación y transpirabilidad.',
  },
  {
    id: 9,
    name: 'Zapatillas Blancas Clásicas',
    category: 'zapatillas',
    price: 139.9,
    image: '/images/zapatillas/blancas.jpg',
    stock: 16,
    description: 'Zapatillas blancas atemporales, combinan con todo.',
  },
]
