import { Link } from "react-router-dom"
import { useGlobalStates } from "./utils/global.context";
import './Card.css'


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useGlobalStates()

  const addFav = () => {
    dispatch({ type: 'ADD_FAVORITES', payload: { name, username, id } })
    alert(`Dentist ${name} has been added to favorites successfuly`)
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const removeFav = () => {
    dispatch({ type: 'REMOVE_FAVORITES', payload: id })
    alert(`Dentist ${name} has been removed from favorites successfuly`)
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const dentist = state.data.find(d => d.id === id)

  return (
    <div className="card">
      <Link to={`dentist/${id}`} relative="path">
        <img src="/images/doctor.jpg" alt="" />
      </Link>
      <h4>{ name }</h4>
      <p>{ username }</p>

      { !dentist
        ? <button onClick={addFav} className="cardActionButton">⭐</button>
        : <button onClick={removeFav} className="cardActionButton">❌</button>}
    </div>
  );
};

export default Card;
