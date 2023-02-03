import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import ImageConverter from './pages/ImageConverter';
import Login from './pages/Login';
import Liste from './pages/Liste';
import Fiche from './pages/Fiche';
import FicheRencherir from './pages/FicheRencherir';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/liste/0/null/null/null/null/null" />
            </Route>
            <Route path="/fiche/:id" exact={true}>
              <Fiche />
            </Route>
            <Route path="/rencherir/:id/:token" exact={true}>
              <FicheRencherir />
            </Route>
            <Route path="/liste/:token/:p1/:p2/:p3/:p4/:p5" exact={true}>
              <Liste />
            </Route>
            <Route path="/login/:idEnchere" exact={true} >
              <Login />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
