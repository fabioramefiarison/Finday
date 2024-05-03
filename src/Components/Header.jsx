import React, {useState, useEffect} from "react";
import {Link} from 'react-scroll';
import ScrollReveal  from "scrollreveal";
import imageCarte1 from './../Images/toppng.com-apple-iphone-15-pink-plus-png-front-and-back-2032x3744.png';
import imageCarte2 from './../Images/—Pngtree—iphone 15 blue_13289457.png'

function Header ({panier}) {
        const [nav, setNav] = useState(false);
        const [classUl, setClassUl] = useState('')
        const [cart, setCart] = useState('')
    
        const scollHeader = () =>{
        if (window.scrollY > 20) {
            setNav(true)
        } 
        else
        setNav(false)
    } 

    window.addEventListener("scroll", scollHeader);

    const handleClickBurger = () =>{
        setClassUl("newUl")
    }

    const handleClickClose = () => {
        setClassUl("")
    }

    const handleClickCart = () => {
        setCart('newCart')
    }

    const handleClickClose2 = () => {
        setCart("")
    }

    const HandleClickLink = () => {
        setClassUl("")
    }
    useEffect (() => {
        ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        opacity: 0,
        easing: 'ease-in',
        duration: 1000
    })
    }, [])

    return (
        <div id='header' className={nav ? "background-header" : null}>
                 <div className="logo">   
                    <Link to="#"><i className="fas fa-mobile-alt"></i></Link>
                    <span>F</span>
                    <span>in</span>
                    <span className="day">day</span>
                </div>
                <div>
                    <ul id="my-ul" className={classUl}>
                    <Link to="banière" smooth="true" duration={1000}><li style={{'--i':1}} onClick={HandleClickLink}>Acceuil</li></Link>
                    <Link to="container-nouveaux" smooth='true' duration={1000}><li style={{'--i':2}} onClick={HandleClickLink}>Nouveaux</li></Link>
                    <Link to="Produits" smooth='true' duration={1000}><li style={{'--i':3}} onClick={HandleClickLink}>Produits</li></Link>
                    <Link to="commentaire" smooth='true' duration={1000}><li style={{'--i':4}} onClick={HandleClickLink}>Contact</li></Link>
                        <i className="fas fa-close close-ul" onClick={handleClickClose}></i>
                    </ul>
                </div>
                <div>
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-cart-arrow-down" onClick={handleClickCart}>
                        <span className="cart-notification">
                            {panier}
                        </span>
                    </i>
                    <i className="fas fa-align-justify" onClick={handleClickBurger}></i>
                </div>   
                
                <div id="container-cart" className={cart}>
                <h2>Les achats</h2>
                <i className="fas fa-close close-cart" onClick={handleClickClose2}></i>
                <div className="les-panier">
                <div>
                    <section>
                        <img src={imageCarte1} alt="" />
                    </section>
                    <section>
                        <h3>iphone_15_plus-rose</h3>
                        <p>4 200 000 AR</p>
                        <div>
                            <span className="operateur-plus-moin">-</span><span>1</span><span className="operateur-plus-moin">+</span>
                            <span><i className="fas fa-trash-alt"></i></span>
                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <img src={imageCarte2} alt="" />
                    </section>
                    <section>
                        <h3>iphone_15_bleue</h3>
                        <p>4 000 000 AR</p>
                        <div>
                            <span className="operateur-plus-moin">-</span><span>1</span><span className="operateur-plus-moin">+</span>
                            <span><i className="fas fa-trash-alt"></i></span>
                        </div>
                    </section>
                </div>
                </div>
                <div className="total-panier">
                    <p>2 paniers</p>
                    <p>8 200 000 AR</p>
                </div>
            </div>   
        </div>

    )
};

export default Header;