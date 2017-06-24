<script>
    /* eslint-disable */
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                notes: state => state.notes
            })
        },
        methods: {
            updateNote(note) {
                this.$store.commit('EDIT_NOTES', note.timestamp)
                this.$emit('isList', false)
            },
            close() {
                this.$emit('isList', false)
            }
        }
    }
</script>
<template>
    <div class="modal-content" >
        <i class="material-icons close" @click="close">close</i>
        <ul class="collection">
            <li
                class="collection-item avatar"
                v-for="(v, index) in notes"
                @click="updateNote(v)"
                key="index">
                <i class="material-icons circle">note</i>
                <span class="title">{{v.title}}</span>
                <p v-if="v.text">{{v.text.substring(0,100)}}</p>
                <a class="secondary-content moment">
                    <small>{{String(v.timestamp) | formatDate}}</small>
                    <i class="material-icons">watch</i>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
</style>
