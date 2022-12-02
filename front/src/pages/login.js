import { useState } from 'react';
const Login = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     // retrouver la valeur entrée dans le champ name et l'affichier avec une alerte
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
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
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
