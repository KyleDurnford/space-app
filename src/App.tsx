import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { planet, image, informationCircle, personCircleOutline } from 'ionicons/icons';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import PlanetSearch from './pages/PlanetSearch';
import Contact from'./pages/Contact';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/gallery" component={Gallery} exact={true} />
          <Route path="/planetsearch" component={PlanetSearch} />
          <Route path="/contact" component={Contact} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={planet} />
            <IonLabel>Planets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="planetsearch" href="/planetsearch">
            <IonIcon icon={informationCircle} />
            <IonLabel>Info</IonLabel>
          </IonTabButton>
          <IonTabButton tab="gallery" href="/gallery">
            <IonIcon icon={image} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contact" href="/contact">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
