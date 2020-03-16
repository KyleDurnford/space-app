import React from 'react';
import { IonContent, IonHeader, IonTitle, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import './Tab1.css';
import Mercury from '../assets/mercury.png'
import Earth from '../assets/earth.png'
import Jupiter from '../assets/jupiter.png'
import Neptune from '../assets/neptune.png'
import Saturn from '../assets/saturn.png'
import Uranus from '../assets/uranus.png'
import Venus from '../assets/venus.png'
import Mars from '../assets/mars.png'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonHeader className="padding">
            <IonTitle>Solar System</IonTitle>
        </IonHeader>
        <h1><span>explore our</span><br></br>SOLAR SYSTEM</h1>
        <IonCard>
          <img src={Mercury} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>Messenger of the Gods</IonCardSubtitle>
            <IonCardTitle>Mercury</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Venus} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>Goddess of Love and Beauty</IonCardSubtitle>
            <IonCardTitle>Venus</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Venus is the second planet from the Sun. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Earth} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>Dirt</IonCardSubtitle>
            <IonCardTitle>Earth</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other evidence, Earth formed over 4.5 billion years ago.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Mars} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>God of War</IonCardSubtitle>
            <IonCardTitle>Mars</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. It is often referred to as the 'Red Planet'.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Jupiter} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>God of Sky and Thunder</IonCardSubtitle>
            <IonCardTitle>Jupiter</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Saturn} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>God of Wealth and Agriculture</IonCardSubtitle>
            <IonCardTitle>Saturn</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Uranus} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>God of the Sky</IonCardSubtitle>
            <IonCardTitle>Uranus</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants".
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src={Neptune} className="main-img"/>
          <IonCardHeader>
            <IonCardSubtitle>God of the Sea</IonCardSubtitle>
            <IonCardTitle>Neptune</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
