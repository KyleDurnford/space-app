import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Tab2.css';

import Bubble from '../assets/bubble.jpg';
import Sombrero from '../assets/sombrero.jpg';
import Westerlund from '../assets/Westerlund.jpg';
import saturn from '../assets/saturn.jpg';
import pillar from '../assets/pillar.jpg';
import pillars from '../assets/pillars.jpg';
import orion from '../assets/orion.jpg';
import lagoon from '../assets/lagoon.jpg';
import horsehead from '../assets/horsehead.jpg';
import crab from '../assets/crab.jpg';
import butterfly from '../assets/butterfly.jpg';

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="padding">
            <IonTitle>Gallery</IonTitle>
        </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <img src={Bubble} alt=" "/>
              </IonCol>
              <IonCol>
                <img src={Sombrero} alt=" "/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src={Westerlund} alt=" "/>
              </IonCol>
              <IonCol>
                <img src={saturn} alt=" "/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src={pillar} alt=" "/>
              </IonCol>
              <IonCol>
                <img src={pillars} alt=" "/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src={orion} alt=" "/>
              </IonCol>
              <IonCol>
                <img src={lagoon} alt=" "/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src={horsehead} alt=" "/>
              </IonCol>
              <IonCol>
                <img src={crab} alt=" "/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src={butterfly} alt=" "/>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
