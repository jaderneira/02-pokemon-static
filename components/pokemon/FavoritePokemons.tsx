import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
  favoritePokemons: number[]
}

export const FavoritePokemons: React.FC<Props> = ({favoritePokemons}: Props) => {
  return (
    <Grid.Container
      gap={2}
      direction='row'
      justify='flex-start'            
    >
      {
        favoritePokemons.map(id => (<FavoriteCardPokemon key={id} pokemonId={id} />) )
      }
    </Grid.Container>
  )
}