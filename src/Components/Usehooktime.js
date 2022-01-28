//  ==> Digital clock using HOOK   //


import React, { useState } from 'react';
const Usehooktime = () => {
    let time= new Date().toLocaleTimeString();
    const [ctime, setCtime]= useState(time);
    const UpdateTime =()=>{
        time= new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime, 1000);
  return(
      <div>
          <h1>{ctime}</h1>
      </div>
  )};

export default Usehooktime;









// ==> Simple clock work on click //



// import React, { useState } from 'react';

// const Usehooktime = () => {

//     let newTime= new Date().toLocaleTimeString();
    
//     const [ctime, setCtime]= useState(newTime);
    
//     const UpdateTime =()=>{
//         newTime= new Date().toLocaleTimeString();
//         setCtime(newTime);
//     }

//   return(

//       <div>
//           <h1>{ctime}</h1>
//           <button onClick={UpdateTime}>Get Time</button>
//       </div>
//   )};

// export default Usehooktime;
