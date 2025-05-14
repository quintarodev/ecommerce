import Link from 'next/link'

import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="max-w-app grid grid-rows-[auto_1fr_auto] min-h-dvh mx-auto">
      <header className="h-[96px]">
        <nav className="h-full flex items-center justify-between gap-8">
          <Link href={'/'} className="text-xl font-semibold tracking-wide">
            Ecommerce
          </Link>

          <ul className="flex flex-1 gap-8 justify-center items-center text-sm font-medium text-text">
            <li>
              <Link href="/">Todos</Link>
            </li>
            <li>
              <Link href="/?category=polos">Polos</Link>
            </li>

            <li>
              <Link href="/?category=pantalones">Pantalones</Link>
            </li>

            <li>
              <Link href="/?category=zapatillas">Zapatillas</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 ">
            <Link
              href={'/favorites'}
              className="text-text hover:text-dark transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </Link>

            <Link
              href={'/carrito'}
              className="text-text hover:text-dark transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <h3 className="font-semibold text-sm">Hecho con ❤</h3>
      </footer>
    </div>
  )
}

export default layout
