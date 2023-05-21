<template>
    <div class="title-bar">
        <h1>시험일정</h1>
        <div class="actions">
            <button>수정</button>
        </div>
    </div>
    <section style="display:flex;gap: 24px;">
        <Calendar />
        <div>
            <div>
                <h2><span class="material-symbols-outlined">edit_note</span>장소</h2>
                <div>9급, 8급, 7급, 6급</div>
            </div>
            <div>
                <h2><span class="material-symbols-outlined">calendar_month</span>일시</h2>
                <div>2023-04-26</div>
            </div>
            <div>
                <h2><span class="material-symbols-outlined">calendar_month</span>준비물</h2>
                <div>2023-04-26</div>
            </div>
            <div>
                <h2><span class="material-symbols-outlined">place</span>시험장소</h2>
                <div>경기도 고양시 화정동 화중초등학교</div>
                <div class="sub_content">
                    <img src="../assets/img/화중초지도.png" alt="" style="width:100%;">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Calendar from "../components/Calendar.vue";
export default {
    components: {
        Calendar
    }
}
</script>