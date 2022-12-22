import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/shared";
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';


const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, [])

  return (
    <Layout title="Pokemon - Favorites">
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemons favoritePokemons={favoritePokemons} />)
      }      
    </Layout>
  )
}

export default FavoritePage;