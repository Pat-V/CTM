import { Navigate } from "react-router-dom";

  const HandleSubmit = async (e) => {
    e.preventDefault()
    Navigate('/')
  }


export default function Logout() {
  return (
    <section className='section'>
      <h3>Logout</h3>
      <p>You have been loged out</p>
      <button onClick={HandleSubmit} className='btn btn-block'>
          Go to login page
        </button>
      
    </section>
  );
};
