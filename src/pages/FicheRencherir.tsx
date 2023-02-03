
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
  } from '@ionic/react';
  
  import { useParams } from 'react-router';
  import { useEffect, useState } from 'react';
  import axios from 'axios';

  const FicheRencherir: React.FC = () => {

    const { id } = useParams<{ id: string; }>();
    const { token } = useParams<{ token: string; }>();

    const [montant, setMontant] = useState('0');
    useEffect(()=>{
      
      axios.get("https://projetencherefinal-production-4662.up.railway.app/enchere?id="+id).then((res)=>{   
        var box = document.getElementById('fiche');
        var blabla= res.data ;
        var val="<div id='fiche'><a href='/liste/"+token+"/null/null/null/null/null' >Voir Liste</a><br/><ul>";
        val=val+"<li>Nom produit : "+blabla['data']['descri']+"</li>";
        val=val+"<li>Date : "+blabla['data']['dateEnchere']+"</li>";
        val=val+"<li>Duree : "+blabla['data']['duree']+"</li>";
        val=val+"<li>Prix minimal : "+blabla['data']['prixminimal']+"Ar</li>";
        val=val+"<li>Dernier montant : "+blabla['data']['dernierMontant']+"Ar</li>";
        val=val+"</ul></div>";
        
        if (box != null) {
          box.innerHTML = val;
        }
        
      }).catch((error)=>{
      alert("error"+error);
    })
    },[])
    

    const rencherir = () => {
      axios.get("https://projetencherefinal-production-4662.up.railway.app/nouvelleoffre?idenchere="+id+"&idutilisateur="+token+"&montant="+montant).then((res)=>{   
          
          if(res.data['message']!=null){
            alert(res.data['message']);
          }
          else{
            window.location.href="/rencherir/"+id+"/"+token;
          }

        }).catch((error)=>{
         alert("error"+error);
       })

    }; 

    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enchere</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonCard>
          
          <h1>Fiche enchere</h1>
          <div id="fiche">
          </div>

          <IonLabel>Votre montant : </IonLabel>

        <IonInput type="number" name="nom" placeholder="Entrez montant" onIonChange={e => setMontant(e.detail.value!)} ></IonInput>

          <IonItem button onClick={() => rencherir()}>
            <IonLabel>Rencherir</IonLabel>
        </IonItem>
      </IonCard>
      </IonContent>
    </IonPage>
    );
  };
  
  export default FicheRencherir;
  