import { FC, PropsWithChildren } from "react"

import Head from "next/head"
import { NavBar } from '../shared';

interface Props {
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp'}</title>
        <meta name="author" content="Jader Neira" />
        <meta name="description" content={`Information about pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        <meta property="og:title" content={`Information about pokemon ${ title }`} />
        <meta property="og:description" content={`This is the page about ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
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