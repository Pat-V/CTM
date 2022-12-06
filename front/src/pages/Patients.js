import React, { useState } from "react"

export default function Patients() {
  const [patientInfo, setPatientInfo] = useState()

  const ListAllPatients = async () =>{
      const data = await  window.fetch('/Patients')
      const json = await data.json()
      setPatientInfo(json)
}
ListAllPatients()
  
return (
    <>
      <section className='section'>
        <h3> Patients</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fist name</th>
              <th scope="col">Last name</th>
              <th scope="col">Age</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            {(patientInfo && 
              patientInfo.map((patient) => (
                <tr>
                  <th scope="row">{patient.id}</th>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.age}</td>
                  <td>{patient.weight}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
