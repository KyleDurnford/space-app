import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonList, IonItem, IonAlert, IonInput, IonButton } from '@ionic/react';
import './Tab3.css';

const Contact: React.FC = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [alert, setAlert] = useState(false);

    return (
        <IonPage>

            <IonAlert
                isOpen={alert}
                onDidDismiss={() => setAlert(false)}
                header={'All Signed Up!'}
                message={'Thank you!'}
                buttons={['OK']}
            />

            <IonContent>
                <IonHeader className="padding">
                    <IonTitle>Newsletter</IonTitle>
                </IonHeader>
                <h1>Sign up for planet facts!</h1>
                <IonList className="padding">
                    <IonItem>
                        <IonInput value={name} placeholder="Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonList>
                <IonButton className="margin" onClick={() => setAlert(true)}>Sign Up</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Contact;