<template>
    <base-layout page-title="Memories">
        <memories-list :memories="memories"/>
    </base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList'
export default {
    components: {
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