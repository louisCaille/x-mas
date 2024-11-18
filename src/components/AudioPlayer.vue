<template>
    <div>
        <audio ref="audio" :src="audioSrc" @ended="onEnded" autoplay />
    </div>
</template>

<script setup lang="ts">
    import { defineExpose, ref } from 'vue'

    const audioSrc = new URL('@/assets/all-i-want-for-christmas-is-you.mp3', import.meta.url).href
    const audio = ref<HTMLAudioElement | null>(null)
    const isPlaying = ref(false)

    const togglePlay = () => {
        if (audio.value && !isPlaying.value) {
            audio.value.play()
            isPlaying.value = true
        }
    }

    const onEnded = () => {
        isPlaying.value = false
    }

    defineExpose({ togglePlay })
</script>
