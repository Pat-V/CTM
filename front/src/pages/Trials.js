import React, { useState } from "react"

export default function Trials() {
  const [trialsInfo, setTrialsInfo] = useState()

  const ListsAllTrials = async () =>{
      const data = await  window.fetch('/CT')
      const json = await data.json()
      setTrialsInfo(json)
}
ListsAllTrials()
  
return (
    <>
      <section className='section'>
        <h3>Clinical trials</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Nb physicians</th>
              <th scope="col">Nb patient</th>
            </tr>
          </thead>
          <tbody>
            {(trialsInfo && 
              trialsInfo.map((trial) => (
                <tr>
                  <th scope="row">{trial.id}</th>
                  <td>{trial.title}</td>
                  <td>{trial.description}</td>
                  <td>{trial.startDate}</td>
                  <td>{trial.endDate}</td>
                  <td>{trial.NBPhysicians}</td>
                  <td>{trial.NBPatients}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
