class Calendar {
    constructor() {
      this.currentDate = new Date();
    }
  
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
  
    getCurrentMonthDates() {
      return this.getDates(this.currentDate.getFullYear(), this.currentDate.getMonth());
    }
  
    getNextMonthDate() {
      const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
      return this.formatDate(nextMonth);
    }
  
    getPreviousMonthDate() {
      const prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      return this.formatDate(prevMonth);
    }
  
    getDates(year, month) {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const dates = [];
  
      for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
      }
  
      return dates;
    }
    getMonthDatesInWeeks() {
        const dates = this.getCurrentMonthDates();
        const monthStartDayOfWeek = dates[0].getDay(); // First day of the month's day of the week
        const weeks = [];
        let currentWeek = Array(monthStartDayOfWeek).fill(null);
    
        dates.forEach((date, index) => {
          currentWeek.push(this.formatDate(date));
    
          if ((index + monthStartDayOfWeek + 1) % 7 === 0 || index === dates.length - 1) {
            // Fill the remaining days of the last week with null
            if (index === dates.length - 1) {
              const remainingDays = 7 - currentWeek.length;
              for (let i = 0; i < remainingDays; i++) {
                currentWeek.push(null);
              }
            }
            
            weeks.push(currentWeek);
            currentWeek = [];
          }
        });
    
        return weeks;
      }
  }
  
  // 켈린더 클래스 사용 예시
  const calendar = new Calendar();
  
  console.log("이번달 날짜들:", calendar.getMonthDatesInWeeks());
  