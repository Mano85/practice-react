import React from 'react'
import ReactDOM from 'react-dom/client'
var h1React =React.createElement("h1", {}, "HEADING CREATED ");
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

rootReact.render(h1React);

 const Searchbar= ()=> (
     <div id="main">
        <input type='text'className='searchbar' placeholder='search!'></input>
        <button type='button'>search</button>
        
        </div>
    )
 rootReact.render(<Searchbar/>)
 /*const numbersone=[1,3,4]
 const numberstwo=[5,6,7]
 const combination = [...numbersone,...numberstwo]
console.log(combination)

const MyVechile={
    Brand: "TATA",
    vechile:"Landrover",
    color: "Blue",


}
const myVehicle = {
    brand: 'TATA',
    model: 'NEXON',
    color: 'magenta'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  
  console.log(myUpdatedVehicle);*/
  const deVechiles=['ashok leyland','tata','kia'];
  const [truck, ,car] = deVechiles;
  console.log(deVechiles);
 
//  map  run loop every each element 
  const Numbers=[5,2,3,4]
  const squaren=Numbers.map(numbersfunction)
document.getElementById("result").innerHTML=squaren;
  function numbersfunction(numb)
  {
    return numb*10
  }
//   filter

  

  