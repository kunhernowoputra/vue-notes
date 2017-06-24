<script>
    import {mapState} from 'vuex'
    /* eslint-disable */
    export default {
        data: () => ({
            isList: false,
            logoText: 'Catatan Kecil'
        }),
        computed: {
            ...mapState({
                notes: state => state.notes
            })
        },
        methods: {
            fixLogo () {
                this.logoText = this.logoText.split("").reverse().join("")
            },
            getQuotes () {
                axios.get('http://quotes.rest/qod.json')
                .then(res => {
                    let data = res.data.contents.quotes[0]
                    this.$emit('get-quotes', data)
                    this.$emit('showModal', true)
                })
            },
            refresh () {
                location.reload();
            },
            fullscreen () {
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                }
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                }
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                }
                else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        },
    }
</script>
<template>
    <div class="nav-wrapper">
        <div class="container">
            <a  class="brand-logo tooltip" @click="fixLogo" style="cursor:pointer">
                <img src="~@/assets/logo.png" class="circle responsive-img"
                style="width:30px;top: 10px;">
                {{logoText.split("").reverse().join("")}}
                <span class="tooltiptext">Fix me please</span>
            </a>
            <button
                class="btn btn-quotes hide-on-med-and-down deep-orange darken-4 pulse tooltip" @click="getQuotes">
                quotes of the day
                <span class="tooltiptext">Oh c'mon show me</span>
            </button>
            <ul class="right hide-on-med-and-down">
                <li v-if="notes.length > 0">
                    <a
                        @click="$emit('isList', true)"
                        class="pulse btn-floating tooltip">
                        <i class="material-icons">view_list</i>
                        <span class="tooltiptext">Notes List</span>
                    </a>
                </li>
                <li @click="refresh" class="tooltip">
                    <a class="">
                        <i class="material-icons">refresh</i>
                    </a>
                    <span class="tooltiptext">Refresh Browser</span>
                </li>
                <li @click="fullscreen" class="tooltip">
                    <a>
                        <i class="material-icons">fullscreen</i>
                    </a>
                    <span class="tooltiptext">Full Size Browser</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
</style>
