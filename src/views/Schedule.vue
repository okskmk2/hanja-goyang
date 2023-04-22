<template>
    <div>Schedule</div>
    <section style="display:flex;gap: 24px;">
        <Calendar/>
        <div>
            <div>장소</div>
            <div>일시</div>
            <div>준비물</div>
            <div>(지도)</div>
        </div>
    </section>
</template>
<script>
import Calendar from "../components/Calendar.vue";
export default {
    components:{
        Calendar
    }
}
</script>