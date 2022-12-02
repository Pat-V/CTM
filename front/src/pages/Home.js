import '../styles/StudyList.css'

const Home = () => {
  return (
    <>
      <section className='section'>
        <h1> Study portfolio </h1>
        <div id="header1">
          <p className="header2">Title</p>
          <p className="header2">Description</p>
          <p className="header2">Start date</p>
          <p className="header2">End date</p>
          <p className="header2">Nb physicians</p>
          <p className="header2">Nb patients</p>
        </div>
        <table>
          <tr>
            <th>
              Title
            </th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Title 1</td>
            <td>Description 1</td>
          </tr>
        </table>
        <div>

        </div>
      </section>
    </>
  );
};
export default Home;
