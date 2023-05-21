
<script>
import Calendar from '../components/Calendar.vue';
export default {
    components: { Calendar }
}
</script>

<template>
    <div>
        <div class="title-bar">
            <h1>홈</h1>
            <div class="actions">
                <button>수정</button>
            </div>
        </div>
        <div class="home_content">
            <section>
                <div>
                    <h2><span class="material-symbols-outlined">date_range</span>접수기간</h2>
                    <div>
                        <Calendar />
                    </div>
                    <div class="actions">
                        <button class="btn primary" @click="$router.push('/register')">접수하기</button>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2><span class="material-symbols-outlined">edit_note</span>시험급수</h2>
                    <div>9급, 8급, 7급, 6급</div>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">calendar_month</span>시험일정</h2>
                    <div>2023-04-26</div>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">place</span>시험장소</h2>
                    <div>경기도 고양시 화정동 화중초등학교</div>
                    <div class="sub_content">
                        <img src="../assets/img/화중초지도.png" alt="" style="width:100%;">
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2><span class="material-symbols-outlined">event</span>합격자 발표일</h2>
                    <div>2023-05-22 </div>
                    <div class="sub_content">
                        <button class="btn primary" @click="$router.push('/register')">합격확인하기</button>
                    </div>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">date_range</span>자격증 교부기간</h2>
                    <div> 2023-05-28 ~ 2023-06-02 </div>
                </div>
                <div>
                    <h2><span class="material-symbols-outlined">info</span>자격증 교부방법</h2>
                    <div> (TODO: 설명) </div>
                    <!-- <div class="sub_content">
                        <button class="btn primary">문의하기</button>
                    </div> -->
                </div>
            </section>
        </div>
    </div>
</template>
<style>

.home_content {
    display: flex;
    gap: 16px;
}

.home_content section {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.home_content section>div:last-child {
    margin-bottom: 16px;
}

.home_content .sub_content {
    margin-top: 12px;
}
</style>