<template>
    <a :href="this.to ? this.to : 'javascript:'" @click="reload"><slot /></a>
</template>

<script setup>
    const props = defineProps({
        to: String,
        persist: { type: Boolean, default: false },
    })
    const reload = () => (window.localStorage.persist = props.persist && '1')
</script>
