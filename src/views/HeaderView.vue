<script setup lang="ts">
    import NeonText from '@/components/NeonText.vue'
</script>

<template>
    <div class="header">
        <div class="image-container">
            <div class="star-container">
                <img class="star" src="@/assets/img/star.svg" alt="star" />
                <div class="louis-container">
                    <img class="louis" src="@/assets/img/louis.png" alt="louis" />
                </div>
            </div>
            <img class="dog" src="@/assets/img/vicky.png" alt="dog" />
            <img class="christmas-tree" src="@/assets/img/christmas-tree.svg" alt="christmas tree" />
            <NeonText class="text" text="MA LISTE DE NOËL" />
            <img class="cat" src="@/assets/img/mew.png" alt="cat" />
        </div>
    </div>
</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .star-container {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: auto;
    }

    .star {
        width: 100%;
    }

    .louis-container {
        position: absolute;
        top: 54%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35px;
    }

    .louis {
        width: 100%;
        animation: swing 2s infinite;
    }

    @keyframes swing {
        0% {
            transform: rotate(-15deg);
        }
        50% {
            transform: rotate(15deg);
        }
        100% {
            transform: rotate(-15deg);
        }
    }

    .dog {
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 120px;
        height: auto;
    }

    .cat {
        position: absolute;
        bottom: 0;
        left: 10px;
        width: 100px;
        height: auto;
    }

    .image-container {
        position: relative;
        width: 100%;
        max-width: 800px;
    }

    .christmas-tree {
        width: 100%;
        height: auto;
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 30px;
    }
</style>
