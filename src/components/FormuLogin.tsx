import './ExploreContainer.css';
import {

    IonItem,
    IonLabel,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';

import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const FormuLogin: React.FC = () => {

    const [username, setUsername] = useState('kozy ve izany');
    const [password, setPassword] = useState('okay');

    const { idEnchere } = useParams<{ idEnchere: string; }>();

    const login = () => {

        axios.get("https://projetencherefinal-production.up.railway.app/login?pseudo=Rakoto&mdp=koto").then((res) => {
            var blabla = res.data;
            if (blabla['data'] == null) {
                alert(blabla['message']);
            }
            else {
                if (idEnchere != "0") {
                    window.location.href = "/rencherir/" + idEnchere + "/" + blabla['data'];
                }
                else {
                    window.location.href = "/liste/" + blabla['data'] + "/null/null/null/null/null";
                }
            }

        }).catch((error) => {
            alert("error" + error);
        })

    };

    return (
        <div className="form-container">
            
            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonLabel>Votre pseudo : </IonLabel>
                    </IonCol>
                    <IonCol>
                        <IonInput class='form-control' value={"Rakoto"} type="text" name="nom" placeholder="Entrez pseudo" onIonChange={e => setUsername(e.detail.value!)} ></IonInput>
                    </IonCol> </IonRow>
                <IonRow>
                    <IonCol>
                        <IonLabel>Mot de passe : </IonLabel>
                    </IonCol>
                    <IonCol>
                        <IonInput class='form-control' value={"koto"} type="password" name="mdp" placeholder="Entrez mot de passe" onIonChange={e => setPassword(e.detail.value!)} ></IonInput>

                    </IonCol>
                </IonRow>
                <IonRow>
                <IonCol><a href="/" >Voir Liste</a><br /></IonCol>

                    <IonCol>
                        <IonItem class='btn' button onClick={() => login()}>
                            <IonLabel>Login</IonLabel>
                        </IonItem></IonCol>


                </IonRow>

            </IonGrid >

        </div >
    );
};

export default FormuLogin;
