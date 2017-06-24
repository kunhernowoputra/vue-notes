<script>
/* eslint-disable */
    export default {
        data: () => ({
            title: '',
            isTitle: false
        }),
        props: {
            notes: String
        },
        updated () {
            this.title = this.$store.getters.newNote.title
        },
        watch: {
            title (newV) {
                this.$store.commit('SAVED_TITLE', newV)
            }
        },
        methods: {
            changeTitle () {
                this.isTitle = !this.isTitle
            }
        }
    }
</script>
<template>
    <div class="left tooltip">
        {{notes}}
        <input
            @keyup.enter="changeTitle"
            v-show="isTitle"
            v-model="title"
            type="text"
            placeholder="Tulis judul title disini"
            style="height: 20px;width: 200px;font-size: 1rem; margin:9px;">
        <span
            style="cursor:pointer"
            class="material-icons"
            @click="changeTitle">create
        </span>
        <span class="tooltiptext">You want to change</span>
    </div>
</template>
<style scoped>
</style>
