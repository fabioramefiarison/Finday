import React from 'react'
import img_story from './../Images/PicsArt_03-17-10.23.51.png'

function Story() {
  return (
    <div id='container-story' className='reveal'>
        <section>
            <img src={img_story} alt="" />
        </section>
        <section>
            <h2>Notre story</h2>
            <h3>Découvrez l'iPhone</h3>
            <p>Rendez-vous dans notre boutique aujourd'hui pour découvrir le nouvel iPhone et laissez-vous surprendre par ses capacités.</p>
            <div>
                <i className='fas fa-map'></i>
                <span>soavimasoandro</span>
            </div>
        </section>
    </div>
  )
}

export default Story