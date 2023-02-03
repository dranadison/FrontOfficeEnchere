
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonTitle,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { useParams } from 'react-router';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import { useEffect, useState } from 'react';
  import axios from 'axios';

  const Fiche: React.FC = () => {

    const { id } = useParams<{ id: string; }>();
    useEffect(()=>{
        axios.get("https://projetencherefinal-production.up.railway.app/enchere?id="+id).then((res)=>{   
            var box = document.getElementById('fiche');
            var blabla= res.data ;
            var val="<div id='fiche'><ul>";
            val=val+"<li>Nom produit : "+blabla['data']['descri']+"</li>";
            val=val+"<li>Date : "+blabla['data']['dateEnchere']+"</li>";
            val=val+"<li>Duree : "+blabla['data']['duree']+"</li>";
            val=val+"<li>Prix minimal : "+blabla['data']['prixminimal']+"Ar</li>";
            val=val+"<li>Dernier montant : "+blabla['data']['dernierMontant']+"Ar</li>";
            val=val+"</ul>";
            val=val+"<a href='/login/"+blabla['data']['id']+"' ><button >Rencherir</button></a></div>";
            if (box != null) {
              box.innerHTML = val;
            }
            
          }).catch((error)=>{
          alert("error"+error);
        })
    
        axios.get("https://projetencherefinal-production.up.railway.app/photos?idEnchere="+id).then((res)=>{   
            var box = document.getElementById('photo');
            var blabla= res.data ;
            var val="<div id='photo'><IonGrid><IonRow>";
            for(var i=0;i<blabla['data'].length;i++){
                val=val+"<IonCol><img style='width:100px;heigth:100px' src="+blabla['data'][i]['lien']+" /></IonCol>";
            }
            val=val+"</IonRow></IonGrid></div>";
            if (box != null) {
              box.innerHTML = val;
            }
            
          }).catch((error)=>{
          alert("error"+error);
        })
     
    },[])
    
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enchere</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonCard>
            <a href="/" >Voir Liste</a><br/>
          <h1>Fiche enchere</h1>
          <div id="fiche">
          </div>
          <div id="photo">
          </div>

      </IonCard>
      </IonContent>
    </IonPage>
    );
  };
  
  export default Fiche;
  