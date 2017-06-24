<script>
    /* eslint-disable */
    export default {
        methods: {
            savedNote () {
                this.$toasted.show('Saved!', {duration: 3000})
                this.$store.commit('SAVED_TIMESTAMP', Date())
            }
        }
    }
</script>
<template>
    <a  @click="savedNote()"
        class="btn-floating btn-large halfway-fab waves-effect waves-light green darken-4" style="right: 150px;">
        <i class="material-icons">save</i>
    </a>
</template>
<style scoped>
</style>
