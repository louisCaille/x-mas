<script setup lang="ts">
    import AudioPlayer from '@/components/AudioPlayer.vue'
    import SnowflakeComponent from '@/components/SnowflakeComponent.vue'
    import FooterView from '@/views/FooterView.vue'
    import HeaderView from '@/views/HeaderView.vue'
    import ListView from '@/views/ListView.vue'
    import { ref } from 'vue'

    const audioPlayerRef = ref<InstanceType<typeof AudioPlayer> | null>(null)
</script>

<template>
    <SnowflakeComponent />
    <HeaderView />
    <ListView :audio-player-ref="audioPlayerRef" />
    <AudioPlayer ref="audioPlayerRef" />
    <FooterView />
</template>

<style scoped></style>
