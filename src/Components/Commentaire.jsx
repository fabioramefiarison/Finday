import React, { useState } from 'react';
import axios from "axios";

function Commentaire() {
  const [input, setInput] = useState("");

  const handleChange = (event) =>{
    setInput(event.target.value)
    /*const name = event.target.name;
    const value = event.target.value;
      setInput(values => ({ 
        ...values, [name]: value
       }))*/
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const url = 'http://localhost/react-API-finday/index.php'
    let fData = new FormData();
    fData.append("email", input);
    axios.post(url, fData)
      .then(resp => alert(resp.data))
      .catch(error => alert(error))
      setInput("")
}

  return (
    <div id='commentaire' className='reveal'>
        <div>
          <h1>Ecire votre Commentaire </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quae repellendus illo dignissimos, quisquam ea iste iusto ad magni id! Sint</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Entrer votre email' 
               onChange={handleChange}
               name='email'
               value={input}
              />
            <button type="submit" >Envoyer</button>
          </form>
        </div>
    </div>
  )
}

export default Commentaire