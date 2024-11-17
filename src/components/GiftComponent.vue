<template>
    <div
        :class="{
            'col-6': width === 1,
            'col-12': width === 2
        }"
    >
        <div
            :class="[
                'flex align-items-center justify-content-center p-3 border-round-sm font-bold fixed-height cursor-pointer',
                { shake: !isFlipping && !showContent },
                { 'bg-red-500 gift': !showContent },
                { 'bg-red-700': showContent },
                { 'flipright animation-duration-500': isFlipping }
            ]"
            @click="handleClick"
        >
            <p v-if="showContent">
                <img v-if="img" class="image" :src="img" alt="gift image" />
                <span>{{ text }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    defineProps<{
        width: 1 | 2
        text: string
        img?: string
    }>()

    const showContent = ref(false)
    const isFlipping = ref(false)

    const handleClick = () => {
        showContent.value = !showContent.value
        isFlipping.value = true
        setTimeout(() => {
            isFlipping.value = false
        }, 500)
    }
</script>

<style scoped>
    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        50% {
            transform: translateX(5px);
        }
        75% {
            transform: translateX(-5px);
        }
        100% {
            transform: translateX(0);
        }
    }

    .shake:hover {
        animation: shake 0.5s;
    }

    .fixed-height {
        height: 200px;
    }

    .gift {
        position: relative;
    }

    .gift::before,
    .gift::after {
        content: '';
        position: absolute;
        background-color: yellow;
    }

    .gift::before {
        width: 20px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    .gift::after {
        width: 100%;
        height: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .image {
        width: 100px;
        height: 100px;
    }
</style>
