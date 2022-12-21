import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
 
interface Props {
  pokemon: Pokemon;
}
 
interface Params extends ParsedUrlQuery {
  id: string;
}
 
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Layout title="Algun Pokemon">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};
 
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [...Array(151)].map((_, index) => ({
    params: { id: `${index + 1}` },
  }));
 
  return {
    paths,
    fallback: false,
  };
};
 
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params!;
 
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
 
  return {
    props: {
      pokemon: data,
    },
  };
};
 
export default PokemonPage;