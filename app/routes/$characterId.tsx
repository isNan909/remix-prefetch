import { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import Layout from '~/components/layout';

// import { Characters } from './index';

export const loader: LoaderFunction = async ({ params }) => {
  const fetchData = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const response = await fetchData.json();
  console.log(response);
  return response;
};

export default function Index() {
  const characterDetail = useLoaderData();
  console.log(characterDetail);
  return (
    <Layout>
      <div>this is the detail</div>
    </Layout>
  );
}
