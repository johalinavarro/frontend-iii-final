import { useState } from "react";
import MessageBox from "./MessageBox";


const Form = () => {
  const [ message, setMessage ] = useState({ display: false, isError: false, message: '' })
  const [ formulary, setFormulary ] = useState({ name: '', email: '' })
  const submitHandler = (e) => {
    e.preventDefault()

    const { name, email } = formulary

    if(name.length <= 5) {
      setError('Name input must have at least 5 caracters')
      return
    }

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegEx.test(email)) {
      setError('Email input must be a valid email address')
      return
    }

    setMessage({
      isError: false,
      message: 'The data has been sent, we\'ll be in touch',
      display: true
    })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target

    setFormulary({
      ...formulary,
      [name]: value
    })

  }

  const setError = (error) => {
    setMessage({
      isError: true,
      message: error,
      display: true
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Name..." name="name" onChange={changeHandler} />
        <input type="text" placeholder="Email..." name="email" onChange={changeHandler}/>
        <button>Send</button>
      </form>

      <MessageBox display={message.display} message={message.message} isError={message.isError}/>
    </div>
  );
};

export default Form;
