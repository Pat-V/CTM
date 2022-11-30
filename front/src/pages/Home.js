import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className='section'>
      <h2>home page</h2>
      <Link to='/about' className='btn'>
        About
      </Link>
    </section>
  );
};
export default Home;
