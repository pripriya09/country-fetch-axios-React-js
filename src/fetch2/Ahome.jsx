import React, { useEffect, useState } from 'react';

function Ahome() {
  const [data, setData] = useState({});

  useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts/")
     .then((response) => response.json())
     .then((result) => setData(result))
      .catch((error) => console.log("This is an error", error));
  }, []);

  return (
    <>
      {(Array.isArray(data)) ? (
        <div>
          {data.map((details, index) => (
            <div key={index}>
              <h3>{details.title}</h3>
              <p>{details.body}</p>
            </div>
          ))}
        </div>
      ) :"" }
    </>
  );
}

export default Ahome





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Ahome() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts/")
//       .then((response) => {setData(response.data); }) 
//       // this data is from api data 
//       .catch((error) => { console.log("This is an error", error);
//      });
//   }, []);

//   return (
//     <>
//       {(Array.isArray(data)) ? (
//         <div>
//           {data.map((details, index) => (
//             <div key={index}>
//               <h3>{details.title}</h3>
//               <p>{details.body}</p>
//             </div>
//           ))}
//         </div>
//       ) :"" }
//     </>
//   );
// }

// export default Ahome