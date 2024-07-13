import { useState } from 'react';
import './App.css'
import { data } from './data';

function App() {
  const[search, setSearch] = useState("");
  return (
    <>
      <div className="container mt-5">
        <h4 className='text-primary'>Filter Table Data</h4>
        <form className='col-md-6'>
          <input className='form-control' type='text' placeholder='search text' 
          onChange={(e)=> setSearch(e.target.value)}/>
        </form>
        <table className='table table-bordered table-striped mt-3'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
            <tbody>
              {data.filter((item)=>{
                return search === "" ? item : 
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase()) ||
                item.phone.toLowerCase().includes(search.toLowerCase());
              })
              .map((item)=> (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default App
