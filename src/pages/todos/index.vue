<template>
    <h1>TODOS - Vue wrapper</h1>

    <p>
        * This is the Vue wrapper page, which hosts the Svelte Todos
        mini-feature web component
    </p>

    <!--
        Pass the todos array from the Vue store to the Svelte todos web component.

        The web component manages this array and dispatches an "update" event,
        which contains the new array as payload, when it's contents have changed.

        We can update the array in the Vue store directly, because it's an ES6 proxy,
        which knows what to do when such an assignment is performed.
    -->
    <my-todos :todos="$store.todos" @update="$store.todos = $event.detail" />
</template>

<script setup>
    import './todos.wc.svelte'
    import { inject } from 'vue'

    const $store = inject('$store')
</script>
