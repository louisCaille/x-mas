<!-- NeonText.vue -->
<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps<{ text: string }>()

    const getCharIndexWithoutSpaces = (index: number) => {
        let spaceCount = 0
        for (let i = 0; i < index; i++) {
            if (props.text[i] === ' ') {
                spaceCount++
            }
        }
        return index - spaceCount
    }

    const getNeonClass = (index: number) => {
        return `neon${(getCharIndexWithoutSpaces(index) % 6) + 1}`
    }
</script>

<template>
    <div class="neon-text">
        <span v-for="(char, index) in props.text" :key="index" :class="char === ' ' ? 'mr-3' : getNeonClass(index)">{{
            char
        }}</span>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

    .neon-text {
        display: flex;
        font-size: 34px;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        font-family: 'Luckiest Guy', cursive;
        span {
            margin-right: 2px;
        }
    }

    .neon1 {
        color: #8934b8;
        animation: neon1 3s infinite alternate;
    }
    .neon2 {
        color: #0a53de;
        animation: neon2 3s infinite alternate;
    }
    .neon3 {
        color: #24d024;
        animation: neon3 3s infinite alternate;
    }
    .neon4 {
        color: #fbf21a;
        animation: neon4 3s infinite alternate;
    }
    .neon5 {
        color: #fb6f24;
        animation: neon5 3s infinite alternate;
    }
    .neon6 {
        color: #ea0d0d;
        animation: neon6 3s infinite alternate;
    }

    @keyframes neon1 {
        0%,
        18%,
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #8934b8,
                0 0 40px #8934b8;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }

    @keyframes neon2 {
        0%,
        18%,
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #0a53de,
                0 0 40px #0a53de;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }

    @keyframes neon3 {
        0%,
        18%,
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #24d024,
                0 0 40px #24d024;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }

    @keyframes neon4 {
        0%,
        18%,
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #fbf21a,
                0 0 40px #fbf21a;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }

    @keyframes neon5 {
        0%,
        18%,
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #fb6f24,
                0 0 40px #fb6f24;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }

    @keyframes neon6 {
        0%,
        18%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #ea0d0d,
                0 0 40px #ea0d0d;
        }
        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }
</style>
