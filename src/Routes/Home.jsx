import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { getDentists } from '../api/dentists'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getDentists()
      setDentists(result)
    }

    getData()
  }, [])

  return (
    <main className="container" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          dentists.map(({ name, username, id }) => <Card name={name} username={username} id={id} key={id} />)
        }
      </div>
    </main>
  )
}

export default Home