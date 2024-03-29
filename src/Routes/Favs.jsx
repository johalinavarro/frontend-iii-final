import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state, dispatch } = useGlobalStates()

  return (
    <main className='container'>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {
          state.data.map(({ name, username, id }) => <Card name={name} username={username} id={id} key={id} />)
        }
      </div>
    </main>
  );
};

export default Favs;
