<template>
    <a :href="this.to ? this.to : 'javascript:'" @click="reload"><slot /></a>
</template>

<script>
    export default {
        props: {
            to: String,
            persist: { type: Boolean, default: false },
        },

        methods: {
            reload() {
                window.localStorage.persist = this.persist && '1'
            },
        },
    }
</script>
