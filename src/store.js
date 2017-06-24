import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let state = {
    notes: [],
    note:{title: 'My Notes'}
}

let getters = {
    newNote: state => {
        return state.note
    }
}

let mutations = {
    REMOVE_NOTES(state, note) {
        state.notes.splice(note, 1)
        state.note = {
            title: 'My Notes',
            text: '',
        }
    },
    EDIT_NOTES(state, timestamp) {
        let update = state.notes.find(note => note.timestamp === timestamp)
        state.note = update
    },
    NEW_NOTES(state, notes) {
        state.notes.unshift({
            title: notes.title,
            text: notes.text,
            timestamp: Date()
        })
        state.note = {
            title: 'My Notes',
            text: '',
        }
    },
    SAVED_TIMESTAMP(state, timestamp) {
        state.note.timestamp = timestamp
    },
    SAVED_TITLE(state, title) {
        state.note.title = title
    },
    SAVED_TEXT(state, text) {
        state.note.text = text
    }
}

let actions = {
    newNote({commit}, notes) {
        commit('NEW_NOTES', notes)
    },
    removeNote({commit}, note) {
        commit('REMOVE_NOTES', note)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
