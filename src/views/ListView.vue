<template>
    <div class="grid">
        <GiftComponent
            v-for="gift in giftList"
            :key="gift.text"
            :column-start="gift.columnStart"
            :column-end="gift.columnEnd"
            :row-start="gift.rowStart"
            :row-end="gift.rowEnd"
            :text="gift.text"
            :img="gift.img"
            :link="gift.link"
            :back-ground-color="gift.backGroundColor"
            :band-color="gift.bandColor"
            :pattern="gift.pattern"
            :toggle-play="togglePlay"
        />
    </div>
</template>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px;
        gap: 16px;
    }
</style>
<script setup lang="ts">
    import AudioPlayer from '@/components/AudioPlayer.vue'
    import GiftComponent from '@/components/GiftComponent.vue'
    import list2024 from '@/data/2024.ts'
    import list2025 from '@/data/2025.ts'
    import type { Gift } from '@/interfaces/gifts.ts'
    import { onMounted, ref } from 'vue'

    const props = defineProps<{
        audioPlayerRef?: InstanceType<typeof AudioPlayer> | null
    }>()

    const giftList = ref<Gift[]>([])

    const togglePlay = () => {
        if (props.audioPlayerRef) {
            props.audioPlayerRef.togglePlay()
        }
    }

    onMounted(() => {
        giftList.value = []

        const urlParams = new URLSearchParams(window.location.search)
        const year = urlParams.get('year')
        if (year === '2024') {
            giftList.value = list2024
        } else if (year === '2025') {
            giftList.value = list2025
        }
    })
</script>
