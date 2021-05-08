<svelte:options tag="my-todos" />

<script>
    import List from './List.svelte'
    import { dispatchEvent } from '../../libs/events.js'

    export let todos = []

    let component
</script>

<div
    bind:this={component}
    style="background: #F0F0F0; padding: 1px 20px 15px 20px; border-radius: 10px;"
>
    <h3>TODOS - Svelte component</h3>

    <p>
        Try deleting the items below by clicking the round (x) and notice how
        they also disappear from the Vue side store.
    </p>

    <slot>
        <List
            bind:todos
            on:update={e => {
                todos = todos.filter(i => i !== e.detail)
                dispatchEvent(component, 'update', todos)
            }}
        />
    </slot>
</div>
