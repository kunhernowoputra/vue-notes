<script>
    /* eslint-disable */
    export default {
    }
</script>
<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title grey-text">
                <slot name="title"></slot>
                <slot name="create"></slot>
            </span>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
</style>
