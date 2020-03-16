import React, { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonPage, IonCard, IonList, IonItem, IonCardTitle, IonCardContent, IonCardHeader } from '@ionic/react';
import './Tab3.css';

import Mercury from '../assets/mercury.png'
import Earth from '../assets/earth.png'
import Jupiter from '../assets/jupiter.png'
import Neptune from '../assets/neptune.png'
import Saturn from '../assets/saturn.png'
import Uranus from '../assets/uranus.png'
import Venus from '../assets/venus.png'
import Mars from '../assets/mars.png'

import data from '../assets/data/planetInfo.json'; 

const PlanetSearch: React.FC = () => {

  const [planet, setPlanet] = useState('mercury');

  return (
    <IonPage>
      <IonContent>
        <IonHeader className="padding">
            <IonTitle>Planet Information</IonTitle>
        </IonHeader>
        <h1 className="header-width">Select a planet to learn more</h1>
        <IonCard>
          <IonList>
            <IonItem onClick={() => setPlanet('mercury')}>
              <img src={Mercury} className="list-img"/>
              <h2>Mercury</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('venus')}>
              <img src={Venus} className="list-img"/>
              <h2>Venus</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('earth')}>
              <img src={Earth} className="list-img"/>
              <h2>Earth</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('mars')}>
              <img src={Mars} className="list-img"/>
              <h2>Mars</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('jupiter')}>
              <img src={Jupiter} className="list-img"/>
              <h2>Jupiter</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('saturn')}>
             <img src={Saturn} className="list-img"/>
              <h2>Saturn</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('uranus')}>
              <img src={Uranus} className="list-img"/>
              <h2>Uranus</h2>
            </IonItem>
            <IonItem onClick={() => setPlanet('neptune')}>
              <img src={Neptune} className="list-img"/>
              <h2>Neptune</h2>
            </IonItem>
          </IonList>
          </IonCard>
          <h1 className="upper">{planet}</h1>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>History</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{data[planet].History}</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Appearance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{data[planet].Appearance}</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Orbit</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{data[planet].Orbit}</IonCardContent>
            </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PlanetSearch;