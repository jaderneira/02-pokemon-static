import { FC, PropsWithChildren } from "react"

import Head from "next/head"
import { NavBar } from '../shared';

interface Props {
  title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp'}</title>
        <meta name="author" content="Jader Neira" />
        <meta name="description" content={`Information about pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
      </Head>

      <NavBar />
      
      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}