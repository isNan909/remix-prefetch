import { useLoaderData, Link } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import Layout from '~/components/layout';
import { Characters } from './index';

export const loader: LoaderFunction = async ({ params }) => {
  const fetchData = await fetch(
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  );
  const response = await fetchData.json();
  return response;
};

export default function Index() {
  const characterDetail: Characters = useLoaderData();
  return (
    <Layout>
      <div>
        <div>
          <Link to="/">go back</Link>
        </div>
        <br />
        <img src={characterDetail.image} alt="" />
        <h1>{characterDetail.name}</h1>
        <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
          <li style={{ marginBottom: '10px' }}>
            Species: {characterDetail.species}
          </li>
          <li style={{ marginBottom: '10px' }}>
            Status : {characterDetail.status}
          </li>
          <li style={{ marginBottom: '10px' }}>
            Gender: {characterDetail.gender}
          </li>
        </ul>
      </div>
    </Layout>
  );
}
