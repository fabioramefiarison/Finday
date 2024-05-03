import React from 'react'
import  photo  from "../Images/PicsArt_04-14-03.52.25.png";

function Message() {

  return (
      <div id='Message' className='reveal'>
         <section>
            <p><i className='fas fa-quote-left'></i></p>
            <p>
               Merci pour votre commentaire positif! Nous somme heureux que vous ayez apprécié votre expérience d'achat avec nous.br <br />
               Nous somme ravis d'apprendre que vous êtes satisfat de votre <strong>iPhone</strong>. Votre satisfaction est notre priorité absolue 
            </p>
            <p><i className='fas fa-quote-left'></i></p>
         </section>
         <section>
            <img src={photo} alt="mama" />
         </section>
      </div>
  )
}

export default Message