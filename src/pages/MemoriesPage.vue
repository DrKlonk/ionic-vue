<template>
    <base-layout page-title="Memories">
        <ion-list>
            <ion-item 
                v-for="memory in memories" 
                :key="memory.id" 
                :router-link="`/memories/${memory.id}`">
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{memory.title}}
                </ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import { 
    IonImg,
    IonItem, 
    IonLabel,
    IonList,
    IonThumbnail,
} from '@ionic/vue'

export default {
    components: {
        IonImg,
        IonItem,
        IonLabel,
        IonList,
        IonThumbnail,
    },
    computed: {
        memories() {
            return this.$store.getters.memories
        }
    }
}
</script>

<style>

</style>