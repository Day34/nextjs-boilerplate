import React from 'react';
import axios from 'axios';

interface Props {
  shows: [];
}

const Apitest = ({ shows }: Props) => {
  return (
    <div>
      <h1>Welcome api test</h1>
      <ul>
        {shows.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = res.data.map((entry: { show: any }) => entry.show);

  return {
    props: {
      shows: data,
    },
  };
};

export default Apitest;
