import React, { useState } from "react"

export default function Portfolio() {
  const [portfolioInfo, setPortfolioInfo] = useState()

  const listPortfolio = async () =>{
      const data = await  window.fetch('/Portfolio')
      const json = await data.json()
      setPortfolioInfo(json)
}
listPortfolio()  

return (
    <>
      <section className='section'>
        <h3>Portfolio</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
            </tr>
          </thead>
          <tbody>
            {(portfolioInfo && 
              portfolioInfo.map((record) => (
                <tr>
                  <th scope="row">{record.TrialID}</th>
                  <td>{record.title}</td>
                  <td>{record.description}</td>
                  <td>{record.startDate}</td>
                  <td>{record.endDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
