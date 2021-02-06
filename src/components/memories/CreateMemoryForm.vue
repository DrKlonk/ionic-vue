<template>  
  <form class='ion-padding' @submit.prevent="submitForm">
    <ion-list>
        <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input type="text" required v-model="enteredTitle"/>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Image URL</ion-label>
            <ion-input type="url" required v-model="enteredImageURL"/>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Description</ion-label>
            <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
        </ion-item>
    </ion-list>
    <ion-button expand="block" type="submit">Save</ion-button>
  </form>
</template>

<script>
import { IonButton, IonItem, IonInput, IonLabel, IonList, IonTextarea} from '@ionic/vue'
export default {
    emits: ['save-memory'],    
    components: {
        IonButton,
        IonInput,
        IonItem,
        IonLabel,
        IonList,
        IonTextarea,
    },
    data() {
        return {
            enteredTitle: '',
            enteredImageURL: '',
            enteredDescription: '',
        }
    },
    methods: {
        submitForm () {
            const memoryData = {
                title: this.enteredTitle,
                image: this.enteredImageURL,
                description: this.enteredDescription,
            }
            this.$emit('save-memory', memoryData)
        }
    }
}
</script>

<style>

</style>