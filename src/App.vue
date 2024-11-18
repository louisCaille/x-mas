<script setup lang="ts">
    import AudioPlayer from '@/components/AudioPlayer.vue'
    import SnowflakeComponent from '@/components/SnowflakeComponent.vue'
    import ListView from '@/views/ListView.vue'
    import { ref } from 'vue'

    const audioPlayerRef = ref<InstanceType<typeof AudioPlayer> | null>(null)
</script>

<template>
    <SnowflakeComponent />
    <ListView :audio-player-ref="audioPlayerRef" />
    <AudioPlayer ref="audioPlayerRef" />
</template>

<style scoped></style>
