import Data from './resources/countryData.json'
import { react,useState } from 'react'
import './App.css'

function App() {

  const [find,finder] = useState('')

  const [view,setview] = useState(true)

  
  function Escape(e){
    
    if (e.keyCode == 27){

      setview(!view)

    console.log('Escape')
      
    }
  }
  
  function Find(e){

  finder(e.target.value)
  
  }  
  return (

    <>
    <h2>SEARCH</h2>

      <input type="text" 
      onChange={(e)=>Find(e)} 
      onKeyDown={(e)=>Escape(e)} 
      placeholder='Find here'/>
    
      <div>
    
        {Data
    
        .filter((val)=>val.name.toLowerCase().includes(find))
    
        .map((values)=>( 
    
          <p key={values.code}>{view?values.name:null}</p>
    
        ))}
    
      </div>
    
    </>
  
  )

}

export default App