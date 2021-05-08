<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let todos
</script>

{#each todos as item, index}
    <li>
        {item.title}
        &nbsp;
        <button
            style="border-radius: 100%; border: 1px solid gray"
            on:click={e => {
                dispatch('update', item)
            }}>x</button
        >
    </li>
{/each}
