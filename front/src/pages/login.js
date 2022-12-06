import { useState } from 'react';
const Login = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = await  window.fetch(`/login:${name}`)
    console.log(data)
    const json = await data.json()
    console.log(json)
       
    localStorage.setItem('logedIn', true)
    console.log(json)
    
    
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
        <button onClick={handleSubmit} className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
