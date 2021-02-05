<template>  
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"/>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title> 
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { 
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/vue'

export default {
    props: ['pageTitle', 'pageDefaultBackLink'],
    
    components: {
        IonBackButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    }
}
</script>

<style>

</style>