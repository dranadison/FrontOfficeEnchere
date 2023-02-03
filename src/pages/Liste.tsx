
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonCard,
  IonTitle,
  IonItem,
  IonLabel,
  IonSelect,
  IonInput,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useParams } from 'react-router';
import axios from 'axios';
import './List.css'

import { useEffect, useState } from 'react';

const Liste: React.FC = () => {

  const { p1 } = useParams<{ p1: string; }>();
  const { p2 } = useParams<{ p2: string; }>();
  const { p3 } = useParams<{ p3: string; }>();
  const { p4 } = useParams<{ p4: string; }>();
  const { p5 } = useParams<{ p5: string; }>();

  const { token } = useParams<{ token: string; }>();
  const logout = () => {

    axios.get("https://projetencherefinal-production.up.railway.app/logout?token=" + token).then((res) => {
      window.location.href = "/";

    }).catch((error) => {
      alert("error" + error);
    })

  };

  
  var boxLog = document.getElementById('login');

  const [idCategorie, setidCategorie] = useState('null');
  const [descri, setdescri] = useState('null');
  const [date, setdate] = useState('null');
  const [prixminimal, setprixminimal] = useState('null');
  const [status, setstatus] = useState('null');

  interface Cate {
    id: number;
    intitule: string;
  }
  const [options, setOptions] = useState([{ id: 0, intitule: '' }]);

  useEffect(()=>{
    axios.get("https://projetencherefinal-production-4662.up.railway.app/categories").then((res) => {
      var blabla = res.data;
      var list = blabla['data'];
      setOptions(list);
    }).catch((error) => {
      alert("error" + error);
    })
    axios.get("https://projetencherefinal-production-4662.up.railway.app/recherche?idCategorie=" + p1 + "&descri=" + p2 + "&date=" + p3 + "&prixminimal=" + p4 + "&status=" + p5).then((res) => {
    var box = document.getElementById('liste');
    var blabla = res.data['data'];
    var val = "<div id='liste' ><ul>";
    for (var i = 0; i < blabla.length; i++) {
      if (token == "0") {
        val = val + "<IonLabel><a href='fiche/" + blabla[i]['id'] + "'><li>" + blabla[i]['descri'] + "</li></IonLabel></a>";
      }
      else {
        val = val + "<a href='rencherir/" + blabla[i]['id'] + "/" + token + "'><li>" + blabla[i]['descri'] + "</li></a>";
      }
    }
    val = val + "</ul></div>";
    if (box != null) {
      box.innerHTML = val;
    }
  }).catch((error) => {
    alert("error" + error);
  })
  },[])
  

  const getEnchere = () => {
    window.location.href = "/liste/" + token + "/" + idCategorie + "/" + descri + "/" + date + "/" + prixminimal + "/" + status;
  };

  if (token == "0") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Enchere</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonCard>

            <a href="login/0" >Se connecter</a>
            <h1>Liste des encheres</h1>
            <div id="liste">
            </div>

          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
  else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Enchere</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonCard>
            <IonGrid>
              <IonItem button onClick={() => logout()}>
                <IonLabel class='bnt2'>Log-Out</IonLabel>
              </IonItem>
            </IonGrid>
            <div>
              <IonCard>
              <IonGrid>
                <IonTitle>Recherche</IonTitle>
                <IonRow>
                  <IonCol>
                    <IonLabel class='txt'>Description : </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonInput class='form-control' type="text" name="descri" placeholder="Entrez descri" onIonChange={e => setdescri(e.detail.value!)} ></IonInput></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel class='txt'>Date : </IonLabel>
                  </IonCol>

                  <IonCol>
                    <IonInput type="date" class='form-control' name="dat" placeholder="Entrez mot de passe" onIonChange={e => setdate(e.detail.value!)} ></IonInput>
                  </IonCol>

                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel class='txt'>Categorie : </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonSelect class='form-control' interface="popover" placeholder="Selectionnez categorie"
                      onIonChange={e => setidCategorie(e.target.value)}   >
                      {options.map((option) => (
                        <IonSelectOption key={option.id} value={option.id}>
                          {option.intitule}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                  </IonCol>

                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonLabel class='txt' >Prix minimal : </IonLabel>

                  </IonCol>
                  <IonCol>
                    <IonInput class='form-control' type="number" name="prix" placeholder="Prix minimale" onIonChange={e => setprixminimal(e.detail.value!)} ></IonInput>

                  </IonCol>

                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel class='txt'>Status : </IonLabel>

                  </IonCol>
                  <IonCol>
                    <IonInput type="number" class='form-control' name="status" placeholder="Status" onIonChange={e => setstatus(e.detail.value!)} ></IonInput>

                  </IonCol>

                </IonRow>
                <IonRow>

                  <IonCol><span></span></IonCol>
                  <IonCol>
                    <IonItem class='btn' button onClick={() => getEnchere()}>
                      <IonLabel>Rechercher</IonLabel>
                    </IonItem>
                  </IonCol>


                </IonRow>


              </IonGrid>
              </IonCard>
            </div>
              <IonCard>
                <h1>Liste des encheres</h1>
                <div id="liste">
                </div>
              </IonCard>

                
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }


};

export default Liste;
