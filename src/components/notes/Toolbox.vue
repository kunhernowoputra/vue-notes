<script>
/* eslint-disable */
export default {
    methods: {
        newNote () {
            this.$toasted.show('Create Successfully!', {duration: 3000})
            let data = this.$store.getters.newNote
            this.$store.dispatch('newNote', data)
        },
        removeNote () {
            this.$toasted.show('Delete Successfully!', {duration: 3000})
            let data = this.$store.getters.newNote
            this.$store.dispatch('removeNote', data)
        }
    }
}
</script>
<template>
    <div class="toolbox">
        <span @click="newNote" class="tooltip">
            <i class="material-icons">note_add</i> <strong>Create New</strong>
            <span class="tooltiptext">create your planning</span>
        </span>
        <span @click="removeNote" class="tooltip">
            <i class="material-icons">delete_forever</i> <strong>Delete</strong>
            <span class="tooltiptext">Shit !! wrong plan</span>
        </span>
    </div>
</template>
<style scoped>
</style>
