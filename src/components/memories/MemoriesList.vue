<template>   
    <ion-list>
        <memory-list-item 
            v-for="memory in memories" 
            :key="memory.id" 
            :memory="memory"
        />
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import MemoryListItem from './MemorieListItem'

export default {
    props: ['memories'],
    components: {
        MemoryListItem,
        IonList,
    }
}
</script>

<style>

</style>