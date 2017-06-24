<script>
    /* eslint-disable */
    export default {
        props: ['quotes']
    }
</script>
<template>
    <div class="quotes">
        <div class="card teal darken-4">
            <i class="material-icons right" @click="$emit('showModal', false)">
                close
            </i>
            <div class="card-content white-text"
                :style="{ backgroundImage: 'url(' + quotes.background + ')' }">
                <span class="card-title">
                    <img src="~@/assets/logo.png" alt="">
                    {{quotes.title}}
                </span>
                <blockquote>
                    {{quotes.quote}}
                    <br>
                    <small>{{ quotes.author}}, {{quotes.date | formatDate}}</small>
                </blockquote>
            </div>
        <div class="card-action">
            <a :href="quotes.permalink" target="_blank">This is a link</a>
        </div>
    </div>
</div>
</template>
<style scoped>
</style>
