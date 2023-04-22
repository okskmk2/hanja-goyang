<template>
    <div>
        <div class="title-bar">
            <h1>홈</h1>
            <div class="actions">
                <button>수정</button>
            </div>
        </div>
        <div class="home-content">
            <section>
                <h2>접수기간</h2>
                <div>(달력)</div>
            </section>
            <section>
                <h2>시험일정</h2>
                <div>(지도)</div>
            </section>
            <section>
                <h2>합격자 발표일</h2>
                <h2>자격증 교부기간</h2>
                <h2>자격증 교부방법</h2>
            </section>
        </div>
    </div>
</template>
<style>
.home-content {
    display: flex;
    gap: 16px;
}
.home-content section {
    flex-grow: 1;
}
</style>