<script>
/* eslint-disable */
    export default {
        data: () => ({
            text: ''
        }),
        beforeUpdate () {
            this.text = this.$store.getters.newNote.text
        },
        watch: {
            text (newVal) {
                this.$store.commit('SAVED_TEXT', newVal)
            }
        }
    }
</script>
<template>
    <textarea class="notes" v-model="text"/>
</template>
<style scoped>
    
</style>
