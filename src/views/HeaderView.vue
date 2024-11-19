<script setup lang="ts"></script>

<template>
    <div class="header">
        <img class="header-img" src="@/assets/img/christmas-louis.png" alt="louis" />
        <div class="neon-text">
            <span>M</span><span class="mr-3">A</span><span>L</span><span>I</span><span>S</span><span>T</span
            ><span class="mr-3">E</span><span>D</span><span class="mr-3">E</span><span>N</span><span>O</span
            ><span>Ë</span><span>L</span>
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .header-img {
        width: 100%;
        max-width: 400px;
        margin-bottom: 10px;
    }

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

    .neon-text span:nth-child(1) {
        animation: neon1 1.5s infinite alternate;
        color: #8934b8;
    }

    .neon-text span:nth-child(2) {
        animation: neon2 1.5s infinite alternate;
        color: #0a53de;
    }

    .neon-text span:nth-child(3) {
        animation: neon3 1.5s infinite alternate;
        color: #24d024;
    }

    .neon-text span:nth-child(4) {
        animation: neon4 1.5s infinite alternate;
        color: #fbf21a;
    }

    .neon-text span:nth-child(5) {
        animation: neon5 1.5s infinite alternate;
        color: #fb6f24;
    }

    .neon-text span:nth-child(6) {
        animation: neon6 1.5s infinite alternate;
        color: #ea0d0d;
    }

    .neon-text span:nth-child(7) {
        animation: neon1 1.5s infinite alternate;
        color: #8934b8;
    }

    .neon-text span:nth-child(8) {
        animation: neon2 1.5s infinite alternate;
        color: #0a53de;
    }

    .neon-text span:nth-child(9) {
        animation: neon3 1.5s infinite alternate;
        color: #24d024;
    }

    .neon-text span:nth-child(10) {
        animation: neon4 1.5s infinite alternate;
        color: #fbf21a;
    }

    .neon-text span:nth-child(11) {
        animation: neon5 1.5s infinite alternate;
        color: #fb6f24;
    }

    .neon-text span:nth-child(12) {
        animation: neon6 1.5s infinite alternate;
        color: #ea0d0d;
    }

    .neon-text span:nth-child(13) {
        animation: neon1 1.5s infinite alternate;
        color: #8934b8;
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
                0 0 19px #fff,
                0 0 40px #8934b8,
                0 0 80px #8934b8,
                0 0 90px #8934b8,
                0 0 100px #8934b8,
                0 0 150px #8934b8;
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
                0 0 19px #fff,
                0 0 40px #0a53de,
                0 0 80px #0a53de,
                0 0 90px #0a53de,
                0 0 100px #0a53de,
                0 0 150px #0a53de;
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
                0 0 19px #fff,
                0 0 40px #24d024,
                0 0 80px #24d024,
                0 0 90px #24d024,
                0 0 100px #24d024,
                0 0 150px #24d024;
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
                0 0 19px #fff,
                0 0 40px #fbf21a,
                0 0 80px #fbf21a,
                0 0 90px #fbf21a,
                0 0 100px #fbf21a,
                0 0 150px #fbf21a;
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
                0 0 19px #fff,
                0 0 40px #fb6f24,
                0 0 80px #fb6f24,
                0 0 90px #fb6f24,
                0 0 100px #fb6f24,
                0 0 150px #fb6f24;
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
        22%,
        25%,
        53%,
        57%,
        100% {
            text-shadow:
                0 0 4px #fff,
                0 0 11px #fff,
                0 0 19px #fff,
                0 0 40px #ea0d0d,
                0 0 80px #ea0d0d,
                0 0 90px #ea0d0d,
                0 0 100px #ea0d0d,
                0 0 150px #ea0d0d;
        }

        20%,
        24%,
        55% {
            text-shadow: none;
        }
    }
</style>
