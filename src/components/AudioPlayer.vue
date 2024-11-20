<template>
    <div>
        <audio ref="audio" :src="audioSrc" @ended="onEnded" autoplay />
    </div>
</template>

<script setup lang="ts">
    import { defineExpose, onBeforeUnmount, onMounted, ref } from 'vue'

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

    const handleVisibilityChange = () => {
        console.log('document.hidden', document.hidden, audio.value)
        if (document.hidden && audio.value) {
            audio.value.pause()
            isPlaying.value = false
        } else if (!document.hidden && !isPlaying.value && audio.value) {
            audio.value.play()
        }
    }

    onMounted(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        if (audio.value) {
            audio.value.pause()
            isPlaying.value = false
        }
    })

    defineExpose({ togglePlay })
</script>
