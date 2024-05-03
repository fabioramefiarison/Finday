import React, { useState } from 'react';
import Header from './Components/Header';
import Baniere from './Components/Baniere';
import Story from './Components/Story';
import Nouveaux from './Components/Nouveaux';
import Produits from "./Components/Produits";
import Commentaire from "./Components/Commentaire";
import Message from "./Components/Message";

function App() {
  const [panier, setPanier] = useState(0)

  const incrementPanier = ()=> {
    setPanier(panier + 1)
  }
  return (
    <div className={"App"}>
       <Header panier={panier}/> 
       <Baniere incrementPanier={incrementPanier}/>
       <Story/>
       <Nouveaux incrementPanier={incrementPanier}/>
       <Produits incrementPanier={incrementPanier}/>
       <Message/>
       <Commentaire/>
    </div>
  );
}

export default App;
