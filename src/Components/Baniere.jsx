import React from "react";
import imageBaniere from './../Images/toppng.com-apple-iphone-15-pro-max-natural-titanium-png-3200x3200.png'

function Baniere ({incrementPanier}) {

    return (
        <div id="banière" className="banière reveal">
            <div>
                <div><i className="fas fa-phone"></i></div>
                <div><i className="fab fa-facebook"></i></div>
                <div><i className="fab fa-google"></i></div>
            </div>
            <div className="text-baniere">
                <h1>
                    Découvrez l'éxelence avec nos <span className="text-iphone">iPhone</span> :
                </h1>
                <p>
                    la quintessence de la téchnologies au service de votre quotidien. 
                    Trouvez le votre dès maintenant 
                </p>
                <p className="prix-baniere">
                5 995 000 AR.
                </p>
                <div className="btn-banieres">
                    <button>découvrir</button>
                    <button onClick={incrementPanier}>ajouter au pannier</button>
                </div>
            </div>
            <div >
                <img src={imageBaniere} alt="iphone_15_pro_max" />
            </div>
        </div>
    )
}

export default Baniere