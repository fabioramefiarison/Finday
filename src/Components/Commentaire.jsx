import React from 'react'

function Commentaire() {
  return (
    <div id='commentaire' className='reveal'>
        <div>
          <h1>Ecire votre Commentaire </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quae repellendus illo dignissimos, quisquam ea iste iusto ad magni id! Sint</p>
        </div>
        <div>
            <input type="email" placeholder='Entrer votre email' />
            <button type="button">Envoyer</button>
        </div>
    </div>
  )
}

export default Commentaire