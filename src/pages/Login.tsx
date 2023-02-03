import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import  FormuLogin  from '../components/FormuLogin';
import './Login.css'

const Login: React.FC = () => {

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class='btn'>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hello</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FormuLogin/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
