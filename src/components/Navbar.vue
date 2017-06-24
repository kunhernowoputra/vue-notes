<script>
    import NotesList from '@/components/notes/List'
    import NotesSaved from '@/components/notes/Saved'
    import AppMenu from '@/components/Menu'
    import AppModal from '@/components/Modal'

    /* eslint-disable */
    export default {
        data: () => ({
            isList: false,
            isModal: false,
            quotes: {}
        }),
        components: {
            NotesList, NotesSaved, AppMenu, AppModal
        },
        methods: {
            showList () {
                this.isList = !this.isList
            },
            showModal () {
                this.isModal = !this.isModal
            },
            getQuotes (params) {
                this.quotes = params
            }
        }
    }
</script>
<template>
    <div class="navbar-fixed">
        <nav class="grey">
            <app-menu @isList="showList" @showModal="showModal" @get-quotes="getQuotes"/>
            <!-- <notes-saved/> -->
        </nav>
        <div class="screen-overlay" v-if="isList ? isList : isModal">
            <notes-list
                :class="{'animated slideInLeft' : isList}"
                @isList="showList"
                v-show="isList"/>
            <app-modal
                :class="{'animated bounceIn' : isModal}"
                v-show="isModal"
                :quotes="quotes"
                @showModal="showModal">
            </app-modal>
        </div>
    </div>
</template>
<style scoped>
</style>
