<template>
    <base-layout page-title="Memories">
        <template v-slot:actions-end>
            <ion-button>
                <ion-icon slot="icon-only" :icon=add>
                </ion-icon>
            </ion-button>
        </template>
        <memories-list :memories="memories"/>
    </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import MemoriesList from '../components/memories/MemoriesList'
export default {
    data() {
        return {
            add
        }
    },
    components: {
        IonButton,
        IonIcon,
        MemoriesList
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