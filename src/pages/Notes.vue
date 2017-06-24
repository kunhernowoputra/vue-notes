<script>
import AppNavbar from '@/components/Navbar'
import NotesCard from '@/components/notes/Card'
import NotesToolbox from '@/components/notes/Toolbox'
import NotesTitle from '@/components/notes/Title'
import NotesText from '@/components/notes/Text'
/* eslint-disable */
export default {
    components: {
        AppNavbar, NotesCard, NotesToolbox, NotesTitle, NotesText
    },
    computed: {
        newNote () {
            return this.$store.getters.newNote
        },
    }
}
</script>
<template>
    <div>
        <app-navbar></app-navbar>
        <div class="container">
            <notes-card>
                <notes-toolbox slot="create" class="left"></notes-toolbox>
                <notes-title :notes="newNote.title" slot="title" class="right"></notes-title>
                <notes-text :notes="newNote.text"></notes-text>
                <small class="right tooltip">
                    copyright:
                    <a href="http://kunhernowoputra.github.io/" target="_blank">linuxers</a>
                    <span class="tooltiptext">hamba Allah</span>
                </small>
            </notes-card>
        </div>
    </div>
</template>
<style scoped>
</style>
