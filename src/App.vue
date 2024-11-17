<script setup lang="ts">
    import ListView from '@/views/ListView.vue'
</script>

<template>
    <div class="container">
        <div v-for="i in 50" :key="i" class="snowflake"></div>
    </div>
    <ListView />
</template>

<style scoped></style>
