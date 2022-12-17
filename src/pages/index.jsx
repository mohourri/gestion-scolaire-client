import React, {useEffect} from 'react'
import axios from 'axios'



export const Index = () => {
    
    

    function chargerEtudiants(){
        axios.get(`http://localhost:8082/classes`)
      .then(res => {
        const classes = res.data;
        console.log(classes);
      })
    }
    return (
        
        <div >
            <h1>Etudiants</h1>
            <button onClick={chargerEtudiants}>Get All</button>
        </div>
    )
}

export default Index;