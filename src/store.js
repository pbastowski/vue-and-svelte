// Stores
import { reactive, watchEffect } from 'vue'

const store = reactive({
    todos: [],
})

// Check is data was persisted in localStorage
const persist = window.localStorage.persist === '1'
// ... if it has then delete then flag in localStorage, as it's meant to be used once only
if (persist) delete window.localStorage.persist

// Retrieve persisted data from locaStorage
if (persist && window.localStorage.todos !== '') {
    store.todos = JSON.parse(window.localStorage.todos)
}
// ... or set some default data
else
    store.todos = [
        { title: 'Buy Milk' },
        { title: 'Take milk allergy pills' },
        { title: 'Go for a long walk' },
    ]

// Watch for changes to todos and then sve them to localStorage
watchEffect(() => {
    // save local state of todos
    window.localStorage.todos = JSON.stringify(store.todos)
})

export default store
