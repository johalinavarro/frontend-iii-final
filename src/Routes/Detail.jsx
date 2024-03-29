import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getDentistById } from '../api/dentists'

import './Detail.css'

const Detail = () => {
  const { id } = useParams();

  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const getDentist = async () => {
      const result = await getDentistById(id)
      setDentist(result)
    }

    getDentist()
  }, [])

  return (
    <main className='container detail' >
      <img src="/images/doctor.jpg" />
      <div className='data'>
        <h1>{ dentist.name }</h1>

        <p>Username: { dentist.username }</p>
        <p>Phone: { dentist.phone }</p>
        <p>Email: { dentist.email }</p>
        <p>Address: { dentist.address?.street } - { dentist.address?.suite }, { dentist.address?.city }</p>
        <p>Company: { dentist.company?.name }</p>
        <p>Website: <a href={`http://${ dentist.website }`}>{ dentist.website }</a></p>
      </div>
    </main>
  )
}

export default Detail