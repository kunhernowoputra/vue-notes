<script>
/* eslint-disable */
export default {
}
</script>
<template>
    <div id="app" class="animated zoomIn">
        <router-view/>
    </div>
</template>
<style>
html {
    background-color: #f3f3f3;
}
.screen-overlay {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
</style>
