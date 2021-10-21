<template>
    <slot name="previous" :dec="dec" />
    <slot v-bind="{ abc, dec, inc }" />
    <slot name="next" :inc="inc" />
</template>

<script setup>
    import { ref } from 'vue'

    const abc = ref(1)
    const dec = () => abc.value--
    const inc = () => abc.value++

    console.log('VINPUT')
</script>

<!--
<script>
    /* And this is the nos script-setup version that returns a render function */
    import { ref } from 'vue'

    export default {
        setup(props, ctx) {
            const abc = ref(1)
            const dec = () => abc.value&#45;&#45;
            const inc = () => abc.value++

            console.log('CTX:', ctx.slots)
            return () => [
                ctx.slots.previous && ctx.slots.previous({ dec }),
                ctx.slots.default({
                    abc: abc.value,
                    inc,
                    dec,
                }),
                ctx.slots.next && ctx.slots.next({ inc }),
            ]
        },
    }
    console.log('VINPUT')
</script>
-->
