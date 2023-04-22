<template>
    <div class="calendar">
      <div class="header">
        <button @click="previousMonth">이전 달</button>
        <span>{{ formattedCurrentMonth }}</span>
        <button @click="nextMonth">다음 달</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td v-for="(date, i) in week" :key="i">
              {{ date?.getDate() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import Calendar from "../assets/calendar";
  
  export default {
    data() {
      return {
        calendar: new Calendar(),
      };
    },
    computed: {
      weeks() {
        return this.calendar.getMonthDatesInWeeks();
      },
      formattedCurrentMonth() {
        return this.calendar.formatDate(this.calendar.currentDate).slice(0, 7);
      },
    },
    methods: {
      previousMonth() {
        const prevMonth = new Date(
          this.calendar.currentDate.getFullYear(),
          this.calendar.currentDate.getMonth() - 1,
          1
        );
        this.calendar.currentDate = prevMonth;
      },
      nextMonth() {
        const nextMonth = new Date(
          this.calendar.currentDate.getFullYear(),
          this.calendar.currentDate.getMonth() + 1,
          1
        );
        this.calendar.currentDate = nextMonth;
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar {
    display: inline-block;
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
  }
  
  thead {
    background-color: #f5f5f5;
  }
  </style>
  