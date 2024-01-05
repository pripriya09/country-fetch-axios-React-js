
import React from 'react'

function Country() {

const countries = [
{
    country:"UK",
    state:["England","Scotland","NorthernIreland","Wales"]
},
{
    country:"India",
    state:["Goa","Punjab","Haryana","Rajasthan"]
},
{
    country:"Brazil",
    state:["Goias","Para","Amapa","Amazonas","Bahia"]
}]

  return (
    <>
    {countries.map((conry,st)=>(<>
        <h2 key={st}>{conry.country}</h2>
        <ul>
            {conry.state.map((x,y)=>(
                <li key={y}>{x}</li>
            ))}
        </ul>
  </>  ))}
  </>
  )
}

export default Country
