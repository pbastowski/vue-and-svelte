<script>
    import { ref } from 'vue'

    export default {
        setup(props, ctx) {
            const abc = ref(1)
            const dec = () => abc.value--
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
