import React, { useEffect, useState } from 'react'
import img_nouveaux1 from './../Images/toppng.com-apple-iphone-15-pro-max-natural-titanium-png-3200x3200.png'
import img_nouveaux2 from './../Images/toppng.com-apple-iphone-15-pink-plus-png-front-and-back-2032x3744.png'
import img_nouveaux3 from './../Images/—Pngtree—iphone 15 blue_13289457.png'

export default function Nouveaux({incrementPanier}) {
    const [hoverDiv1, setHoverDiv1] = useState("")
    const [hoverDiv2, setHoverDiv2] = useState("")
    const [hoverDiv3, setHoverDiv3] = useState("")
    const [hoverButton1, setHoverButton1] = useState("")
    const [hoverButton2, setHoverButton2] = useState("")
    const [hoverButton3, setHoverButton3] = useState("")
    
    const handleHover1 = () => {
        setHoverDiv1('newHoverDiv')
        setHoverButton1('new-button')
    }
    const handleHover2 = () => {
        setHoverDiv2('newHoverDiv')
        setHoverButton2('new-button')
    }
    const handleHover3 = () => {
        setHoverDiv3('newHoverDiv')
        setHoverButton3('new-button')
    }

    const handleLeave1 = () => {
        setHoverDiv1('')
        setHoverButton1('')
    }
    const handleLeave2 = () => {
        setHoverDiv2('')
        setHoverButton2('')
    }
    const handleLeave3 = () => {
        setHoverDiv3('')
        setHoverButton3('')
    }

  return (
    <div id='container-nouveaux' className='reveal'>
        <h1>
            NOUVEAUX
        </h1>
        <section>
            <div onMouseMove={handleHover1} onMouseLeave={handleLeave1}className={hoverDiv1}>
                <span className='new-product'>NEW</span>
                <img src={img_nouveaux1} alt="" />
                <p><strong>15 pro max narurelle</strong></p>
                <p><i>5 000 000 AR</i></p>
                <button className={hoverButton1} onClick={incrementPanier}>AJOUTER AU PANNIER</button>
            </div>
            <div onMouseMove={handleHover2} onMouseLeave={handleLeave2}className={hoverDiv2}>
                <span className='new-product'>NEW</span>
                <img src={img_nouveaux1} alt="" />
                <p><strong>15 pro max narurelle</strong></p>
                <p><i>5 000 000 AR</i></p>
                <button className={hoverButton2} onClick={incrementPanier}>AJOUTER AU PANNIER</button>
            </div>
            <div onMouseMove={handleHover3} onMouseLeave={handleLeave3}className={hoverDiv3}>
                <span className='new-product'>NEW</span>
                <img src={img_nouveaux1} alt="" />
                <p><strong>15 pro max narurelle</strong></p>
                <p><i>5 000 000 AR</i></p>
                <button className={hoverButton3} onClick={incrementPanier}>AJOUTER AU PANNIER</button>
            </div>
        </section>
        
    </div>
  )
}
