<script>
    import { ref, reactive } from 'vue'

    export default {
        setup(props, ctx) {
            const state = reactive({
                abc: 1,
                dec: () => state.abc--,
                inc: () => state.abc++,
            })

            console.log('CTX:', ctx.slots)
            return () => [
                ctx.slots.previous && ctx.slots.previous(state),
                ctx.slots.default(state),
                ctx.slots.next && ctx.slots.next(state),
            ]
        },
    }
    console.log('VINPUT 2')
</script>
