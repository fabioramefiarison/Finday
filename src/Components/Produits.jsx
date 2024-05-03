import React from 'react'
import {Tabs, Tab} from './Tabs'
import Config from "./Config";
import iPhone_15_Pro_max from './../Images/iPhone_15_pro_max.png'
import iPhone_15_Plus from './../Images/iPhone_15.png'
import iPhone_14_Pro_max from './../Images/iphone_14-pro_max.png'
function Produits({incrementPanier}) {
  return (
    <div id='Produits' className='reveal'>
        <h1>NOS PRODUITS</h1>
        <Tabs >
       <Tab title="iPhone 15 PRO MAX">
            <section>
                <p> Septembre 12, 2023</p>
                <img src={iPhone_15_Pro_max} alt="" />
            </section>
            <section>
            <Config iclass1="fas fa-globe" textConfig1="Action button"
              iclass2="fas fa-magic" textConfig2="Titanium chassis" 
              textConfig3="Prix" textConfig3Value="5 995 000 AR" 
              textConfig4="trois caméras arriére"textConfig4Value="12, 12, 48 MP"
              textConfig5="Processeur" textConfig5Value="Apple A17 Pro" 
              textConfig6="Stockage" textConfig6Value="256, 512, 1 TB" 
            />
            <Config iclass1="fas fa-camera" textConfig1="Vidéo spaciale"
              iclass2="fas fa-search-plus" textConfig2="Zoom optique 5x" 
              textConfig3="Ecran" textConfig3Value={'6.7' + '"'} 
              textConfig4="Caméras frontale"textConfig4Value="12 MP" 
              textConfig5="RAM" textConfig5Value="8GB"
              textConfig6="Batterie" textConfig6Value="4,422 mAh" 
            />
            </section>
            <button className='btn-produit'  onClick={incrementPanier}>AJOUTER AU PANNIER</button>
        </Tab>
        <Tab title="iPhone 15 Plus">
            <section>
                <p> Septembre 12, 2023</p>
                <img src={iPhone_15_Plus} alt="" />
            </section>
            <section>
            <Config iclass1="fas fa-globe" textConfig1="Dynamic island"
              iclass2="fas fa-magic" textConfig2="Usb-C port" 
              textConfig3="Prix" textConfig3Value="4 495 000 AR" 
              textConfig4="trois caméras arriére"textConfig4Value="12, 12, 48 MP"
              textConfig5="Processeur" textConfig5Value="Apple A16 Pro" 
              textConfig6="Stockage" textConfig6Value="128, 256, 512 GB" 
            />
            <Config iclass1="fas fa-camera" textConfig1="Principale camera 48MP"
              iclass2="fas fa-search-plus" textConfig2="Zoom optique 2x" 
              textConfig3="Ecran" textConfig3Value={'6.7' + '"'} 
              textConfig4="Caméras frontale"textConfig4Value="12 MP" 
              textConfig5="RAM" textConfig5Value="6GB"
              textConfig6="Batterie" textConfig6Value="4,912 mAh" 
            />
            </section>
            <button className='btn-produit'  onClick={incrementPanier}>AJOUTER AU PANNIER</button>
        </Tab>
        <Tab title="iPhone 15 ">
            <section>
                <p> Septembre 12, 2023</p>
                <img src={iPhone_15_Plus} alt="" />
            </section>
            <section>
            <Config iclass1="fas fa-globe" textConfig1="Dynamic island"
              iclass2="fas fa-magic" textConfig2="Usb-C port" 
              textConfig3="Prix" textConfig3Value="3 995 000 AR" 
              textConfig4="trois caméras arriére"textConfig4Value="12, 12, 48 MP"
              textConfig5="Processeur" textConfig5Value="Apple A16 Pro" 
              textConfig6="Stockage" textConfig6Value="128, 256, 512 GB" 
            />
            <Config iclass1="fas fa-camera" textConfig1="Principale camera 48MP"
              iclass2="fas fa-search-plus" textConfig2="Zoom optique 2x" 
              textConfig3="Ecran" textConfig3Value={'6.1' + '"'} 
              textConfig4="Caméras frontale"textConfig4Value="12 MP" 
              textConfig5="RAM" textConfig5Value="6GB"
              textConfig6="Batterie" textConfig6Value="3,877 mAh" 
            />
            </section>
            <button className='btn-produit'  onClick={incrementPanier}>AJOUTER AU PANNIER</button>
        </Tab>
        <Tab title="iPhone 14 Pro Max ">
            <section>
                <p> Septembre 7, 2022</p>
                <img src={iPhone_14_Pro_max} alt="" />
            </section>
            <section>
            <Config iclass1="fas fa-globe" textConfig1="Dynamic island"
              iclass2="fas fa-magic" textConfig2="Crash Detection" 
              textConfig3="Prix" textConfig3Value="5 495 000 AR" 
              textConfig4="trois caméras arriére"textConfig4Value="12, 12, 48 MP"
              textConfig5="Processeur" textConfig5Value="Apple A16 Pro" 
              textConfig6="Stockage" textConfig6Value="128, 256, 512 GB, 1TB" 
            />
            <Config iclass1="fas fa-camera" textConfig1="Always-On Display"
              iclass2="fas fa-search-plus" textConfig2="Zoom optique 2x" 
              textConfig3="Ecran" textConfig3Value={'6.7' + '"'} 
              textConfig4="Caméras frontale"textConfig4Value="12 MP" 
              textConfig5="RAM" textConfig5Value="6GB"
              textConfig6="Batterie" textConfig6Value="4,323 mAh" 
            />
            </section>
            <button className='btn-produit'  onClick={incrementPanier}>AJOUTER AU PANNIER</button>
        </Tab>
    </Tabs>
    </div>
  )
}

export default Produits

