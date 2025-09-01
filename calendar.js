// --- ACADEMIC CALENDAR DATA (SHARED) ---
const academicData = {
    "2025-08-01": { dayOrder: 5, event: null }, "2025-08-04": { dayOrder: 1, event: null }, "2025-08-05": { dayOrder: 2, event: "Online Enrollment ends with M.Arch/M.Des" }, "2025-08-06": { dayOrder: 3, event: "Physical Enrollment starts - M.Tech" }, "2025-08-07": { dayOrder: 4, event: null }, "2025-08-08": { dayOrder: 5, event: "Commencement of Classes" }, "2025-08-11": { dayOrder: null, event: "Commencement of Classes - M.Arch/M.Des/M.Tech" }, "2025-08-12": { dayOrder: 2, event: null }, "2025-08-13": { dayOrder: 3, event: null }, "2025-08-14": { dayOrder: 4, event: null }, "2025-08-15": { dayOrder: null, event: "Independence Day - Holiday" }, "2025-08-16": { dayOrder: null, event: "Krishna Jayanthi - Holiday" }, "2025-08-18": { dayOrder: 5, event: null }, "2025-08-19": { dayOrder: 1, event: null }, "2025-08-20": { dayOrder: 2, event: "Commencement of Classes - B.Tech (Lateral)" }, "2025-08-21": { dayOrder: 3, event: null }, "2025-08-22": { dayOrder: 4, event: null }, "2025-08-25": { dayOrder: 5, event: null }, "2025-08-26": { dayOrder: 1, event: null }, "2025-08-27": { dayOrder: null, event: "Vinayakar Chathurthi - Holiday" }, "2025-08-28": { dayOrder: 2, event: null }, "2025-08-29": { dayOrder: 3, event: null }, "2025-08-30": { dayOrder: 4, event: null },
    "2025-09-01": { dayOrder: 4, event: null }, "2025-09-02": { dayOrder: 5, event: null }, "2025-09-03": { dayOrder: 1, event: null }, "2025-09-04": { dayOrder: 2, event: null }, "2025-09-05": { dayOrder: null, event: "Milad-Un-Nabi - Holiday" }, "2025-09-06": { dayOrder: null, event: null }, "2025-09-08": { dayOrder: 3, event: null }, "2025-09-09": { dayOrder: 4, event: null }, "2025-09-10": { dayOrder: 5, event: null }, "2025-09-11": { dayOrder: 1, event: null }, "2025-09-12": { dayOrder: 2, event: null }, "2025-09-15": { dayOrder: 3, event: null }, "2025-09-16": { dayOrder: 4, event: null }, "2025-09-17": { dayOrder: 5, event: null }, "2025-09-18": { dayOrder: 1, event: null }, "2025-09-19": { dayOrder: 2, event: null }, "2025-09-22": { dayOrder: 3, event: null }, "2025-09-23": { dayOrder: 4, event: null }, "2025-09-24": { dayOrder: 5, event: null }, "2025-09-25": { dayOrder: 1, event: null }, "2025-09-26": { dayOrder: 2, event: null }, "2025-09-29": { dayOrder: 3, event: null }, "2025-09-30": { dayOrder: 4, event: null },
    "2025-10-01": { dayOrder: null, event: "Ayutha Pooja - Holiday" }, "2025-10-02": { dayOrder: null, event: "Vijaya Dasami - Holiday" }, "2025-10-03": { dayOrder: 5, event: null }, "2025-10-06": { dayOrder: 1, event: null }, "2025-10-07": { dayOrder: 2, event: null }, "2025-10-08": { dayOrder: 3, event: null }, "2025-10-09": { dayOrder: 4, event: null }, "2025-10-10": { dayOrder: 5, event: null }, "2025-10-13": { dayOrder: 1, event: null }, "2025-10-14": { dayOrder: 2, event: null }, "2025-10-15": { dayOrder: 3, event: null }, "2025-10-16": { dayOrder: 4, event: null }, "2025-10-17": { dayOrder: 5, event: null }, "2025-10-20": { dayOrder: null, event: "Deepavali - Holiday" }, "2025-10-21": { dayOrder: 1, event: null }, "2025-10-22": { dayOrder: 2, event: null }, "2025-10-23": { dayOrder: 3, event: null }, "2025-10-24": { dayOrder: 4, event: null }, "2025-10-27": { dayOrder: 5, event: null }, "2025-10-28": { dayOrder: 1, event: null }, "2025-10-29": { dayOrder: 2, event: null }, "2025-10-30": { dayOrder: 3, event: null }, "2025-10-31": { dayOrder: 4, event: null },
    "2025-11-03": { dayOrder: 5, event: null }, "2025-11-04": { dayOrder: 1, event: null }, "2025-11-05": { dayOrder: 2, event: null }, "2025-11-06": { dayOrder: 3, event: null }, "2025-11-07": { dayOrder: 4, event: null }, "2025-11-10": { dayOrder: 5, event: null }, "2025-11-11": { dayOrder: 1, event: null }, "2025-11-12": { dayOrder: 2, event: null }, "2025-11-13": { dayOrder: 3, event: null }, "2025-11-14": { dayOrder: 4, event: null }, "2025-11-17": { dayOrder: 5, event: null }, "2025-11-18": { dayOrder: 1, event: null }, "2025-11-19": { dayOrder: 2, event: null }, "2025-11-20": { dayOrder: 3, event: null }, "2025-11-21": { dayOrder: 4, event: null }, "2025-11-24": { dayOrder: 5, event: null }, "2025-11-25": { dayOrder: 1, event: null }, "2025-11-26": { dayOrder: 2, event: null }, "2025-11-27": { dayOrder: 3, event: null }, "2025-11-28": { dayOrder: 4, event: null }
};

const monthYearHeader = document.getElementById('month-year-header');
const calendarGrid = document.getElementById('calendar-grid');
const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date('2025-08-01');

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYearHeader.textContent = `${months[month]} ${year}`;
    document.querySelectorAll('.day-cell').forEach(cell => cell.remove());

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarGrid.insertAdjacentHTML('beforeend', '<div class="day-cell"></div>');
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const currentRenderDate = new Date(year, month, day);
        const dayOfWeek = currentRenderDate.getDay();
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const data = academicData[dateStr];
        
        let dayOrderHTML = '', eventHTML = '', cellClass = 'day-cell';

        // Corrected Logic: A day with a Day Order is ALWAYS a working day
        if (data && data.dayOrder) {
            dayOrderHTML = `<div class="day-order">Day ${data.dayOrder}</div>`;
            if (data.event) { // If there's an event on a working day
                eventHTML = `<div class="event">${data.event}</div>`;
            }
        } 
        // Otherwise, it's a holiday/weekend
        else {
            cellClass += ' holiday';
            let holidayName = "Holiday"; // Default for weekends
            if (data && data.event) {
                holidayName = data.event; // Use official name if available
            }
            eventHTML = `<div class="event holiday-text">${holidayName}</div>`;
        }
        
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cellClass += ' today';
        }

        const cellHTML = `<div class="${cellClass}"><div class="date-number">${day}</div>${dayOrderHTML}${eventHTML}</div>`;
        calendarGrid.insertAdjacentHTML('beforeend', cellHTML);
    }
}

prevMonthBtn.addEventListener('click', () => { if (currentDate.getMonth() > 7) { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); } });
nextMonthBtn.addEventListener('click', () => { if (currentDate.getMonth() < 10) { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); } });

renderCalendar();