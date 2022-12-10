import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const data = await  window.fetch(`/login:${name}`)
    const json = await data.json()

    
    if (json.userID !== 'Not found') {
      localStorage.setItem('CTM_logedIn', true)
      localStorage.setItem('CTM_UserID', json.userID)
      localStorage.setItem('CTM_UserName', json.name)
      localStorage.setItem('CTM_UserRole', json.role)
      setLoginMessage('')
      navigate('/CT');
    } else {
      localStorage.setItem('CTM_logedIn', false)
      localStorage.setItem('CTM_WelcomeMessage',"")
      setLoginMessage('This name is not recognized. Please try again')
    }
    
  };




  return (
    <section className='section'>
      <form className='form'>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={HandleSubmit} className='btn btn-block'>
          login
        </button>
        <p>{loginMessage}</p>
      </form>
    </section>
  );
};

