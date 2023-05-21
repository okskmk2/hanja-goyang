<template>
    <top-nav />
    <div class="home-layout-content">
        <router-view></router-view>
    </div>
    <bottom-nav />
</template>
<script>
import BottomNav from "./BottomNav.vue";
import TopNav from "./TopNav.vue";
export default {
    components: { BottomNav, TopNav }
}
</script>
<style>
h1 {
    font-size: 20px;
    font-weight: normal;
    margin: 8px 0 16px;
}

h2 {
    margin: 0 0 4px;
    font-weight: bold;
    font-size: 15px;
    color: #555;
    display: flex;
    align-items: center;
    gap: 6px;
}

h2 .material-symbols-outlined {
    font-size: 20px;
}

.home-layout-content {
    background-color: #eee;
    padding: 24px 64px;
}

section {
    background-color: white;
    padding: 24px;
}</style>