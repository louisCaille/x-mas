<template>
    <div class="grid">
        <GiftComponent :width="1" text="Item 1" />
        <GiftComponent :width="1" text="Item 2" />
        <GiftComponent :width="2" text="Item 3" />
        <GiftComponent :width="1" text="Item 4" />
        <GiftComponent :width="1" text="Item 5" />
    </div>
</template>

<style scoped></style>
<script setup lang="ts">
    import GiftComponent from '@/components/GiftComponent.vue'
</script>
