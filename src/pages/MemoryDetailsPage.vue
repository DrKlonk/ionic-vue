<template>
  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'loading'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">Couldn't find Memory</h2>
    <memory-overview
        v-else 
        :title="loadedMemory.title" 
        :image="loadedMemory.image" 
        :description="loadedMemory.description"
    />
  </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue'
export default {
    components: {
        MemoryOverview
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed: {
        loadedMemory () {
            return this.$store.getters.memory(this.memoryId)
        },
    },
}
</script>

<style>

</style>