<template>
    <header>
        <div class="header-inner">
            <router-link to="/home" class="brand">대한검정회 고양덕양</router-link>
            <nav>
                <ul class="nav-menu">
                    <li>
                        <router-link to="/home"><span class="material-symbols-outlined">home</span>홈</router-link>
                    </li>
                    <li>
                        <router-link to="/register"><span
                                class="material-symbols-outlined">post_add</span>시험접수</router-link>
                    </li>
                    <li>
                        <router-link to="/confirm"><span
                                class="material-symbols-outlined">search_check</span>접수확인</router-link>
                    </li>
                    <li>
                        <router-link to="/schedule"><span
                                class="material-symbols-outlined">calendar_month</span>시험일정</router-link>
                    </li>
                    <li>
                        <router-link to="/results"><span
                                class="material-symbols-outlined">search_check</span>합격결과</router-link>
                    </li>
                    <li>
                        <router-link to="/resources"><span class="material-symbols-outlined">archive</span>자료실</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'Navigation',
};
</script>
  
<style scoped>
header {
    background-color: white;
}
.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 64px;
}

.brand {
    color:inherit;
    text-decoration: none;
}
.nav-menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 32px;
}

.nav-menu li a {
    display: flex;
    align-items: center;
    gap: 4px;
    color: inherit;
    text-decoration: none;
}

.router-link-exact-active {
    font-weight: bold;
}</style>
  