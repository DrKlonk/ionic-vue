import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            memories: [
            {
                id: 'm1', 
                title: 'Trip to the sea', 
                description: 'It was very cold that day',
                image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
            {
                id: 'm2', 
                title: 'Throwing rocks of a cliff', 
                description: 'So dangerous',
                image: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                },
            {
                id: 'm3', 
                title: 'Building snowmen',
                description: 'With hot chocolate afterwards',
                image: 'https://images.pexels.com/photos/3923589/pexels-photo-3923589.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                },
        ]};
    },
    getters: {
        memories(state) {
            return state.memories
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(m => m.id === memoryId)
            }
        }
    }
})

export default store