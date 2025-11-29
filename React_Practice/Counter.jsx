//import React,{useState} from 'react';
import {useState} from 'react';

 function Counter(){

         //   let arr =   useState();
		 let [count,setCount] = useState(0); 
		 
		 function handleCount(){
		 setCount(count+1)
		 {/*console.log(setCount(count+1))*/}
		 }
		 
		 function handleDec(){
			 if( count === 0){
				 alert('Already at 0')
				 return;
		 }
		 
			 setCount(count => Math.max(count-1,0));
			 
		 }
		 function reset(){
			 setCount(0)
			 alert('Reset All')
		 }

       return(
	   <>
	      <section className = 'container-fluid mt-4'>
		  <div className = 'row'>
		        <div className =  'col -4 m-auto'>
				    <div className = 'card'>
				          <div className = 'card-header bg-warning text-white text-center'>
						       <h2>Counter App</h2>
						  </div>
						  <div>
						  <h3>Counter:{count}</h3>
						  </div>
						  <button onClick={handleCount} className='btn btn-primary'>
						  Click to Update
						  </button> <br></br>
						  <button onClick={handleDec} className='btn btn-primary'>
						   Click to Decreament
						  </button><br></br>
						  <button onClick={reset} className='btn btn-primary'>
						   Reset
						  </button>
				    </div>
				</div>
		  </div>
		  </section>
		  
		  
	   </>
	   
	   
	   )

}
export default Counter;
