    <template>
    <article class="list">
        <h2 class="list__title">
            Value List
        </h2>
        <button class="list__button">Display Values</button>

        <slot name="col1" class="list__column"></slot>
        <slot name="col2" class="list__column"></slot>
        <slot name="col3" class="list__column"></slot>

    </article>
</template>

<style lang="sass" scoped>
.list
    display: flex
    flex-direction: column

    &__title
        color: #53554a
        font-size: 1.3em

    &__button
        align-self: center
        min-height: 2em
        font-size: 1.2em
        border-radius: 1.2em
        margin-bottom: 2em
        padding: .5em
        border: none
        background-color: #0C374D
        color: #fff
        cursor: pointer
        transition: all .2s ease-in

        &:focus
            outline: none
</style>
