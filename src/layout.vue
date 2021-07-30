<template>
    <app-header>
        <router-link slot="home" to="/">home</router-link>
        <router-link slot="home/42" to="/42">home/42</router-link>
        <router-link slot="todos" to="/todos">todos</router-link>
        &nbsp; | &nbsp;
        <link-reload to="/todos">TODOS reload</link-reload>
        &nbsp;
        <link-reload to="/">HOME reload</link-reload>
        &nbsp; | &nbsp;
        <link-reload to="/" persist>HOME reload persist</link-reload>
        &nbsp;
        <link-reload to="/todos" persist>TODOS reload persist</link-reload>
    </app-header>

    <p>* This is the layout page that hosts all Vue routes.</p>

    <router-view />
    <hr />

    <h3>VUE store</h3>

    <p>
        Shown below is the contents of the Vue store, including any updates in
        real-time.
    </p>

    <pre>{{ $store }}</pre>

    <hr />

    <h3>Renderless</h3>

    <h4>v-input</h4>
    <v-input #default="{ abc, inc, dec }">
        <button @click="dec">-1</button>
        testing... {{ abc }}
        <button @click="inc">+1</button>
    </v-input>

    <h4>v-input 2</h4>
    <v-input>
        <template #previous="{ dec }">
            <button @click="dec">-1</button>
        </template>
        <template #default="{ abc }"> testing... {{ abc }} </template>
        <template #next="{ inc }">
            <button @click="inc">+1</button>
        </template>
    </v-input>
</template>

<script setup>
    import AppHeader from './app/app-header.wc.svelte'
    import $store from './store.js'
</script>

<style>
    .b1,
    [b1] {
        border: 1px dashed red;
    }
    .b2,
    [b2] {
        border: 1px dashed blue;
    }
</style>
