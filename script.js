// --- SHARED ACADEMIC DATA ---
const academicData = {
    "2025-08-01": { dayOrder: 5, event: null }, "2025-08-04": { dayOrder: 1, event: null }, "2025-08-05": { dayOrder: 2, event: "Online Enrollment ends with M.Arch/M.Des" }, "2025-08-06": { dayOrder: 3, event: "Physical Enrollment starts - M.Tech" }, "2025-08-07": { dayOrder: 4, event: null }, "2025-08-08": { dayOrder: 5, event: "Commencement of Classes" }, "2025-08-11": { dayOrder: null, event: "Commencement of Classes - M.Arch/M.Des/M.Tech" }, "2025-08-12": { dayOrder: 2, event: null }, "2025-08-13": { dayOrder: 3, event: null }, "2025-08-14": { dayOrder: 4, event: null }, "2025-08-15": { dayOrder: null, event: "Independence Day - Holiday" }, "2025-08-16": { dayOrder: null, event: "Krishna Jayanthi - Holiday" }, "2025-08-18": { dayOrder: 5, event: null }, "2025-08-19": { dayOrder: 1, event: null }, "2025-08-20": { dayOrder: 2, event: "Commencement of Classes - B.Tech (Lateral)" }, "2025-08-21": { dayOrder: 3, event: null }, "2025-08-22": { dayOrder: 4, event: null }, "2025-08-25": { dayOrder: 5, event: null }, "2025-08-26": { dayOrder: 1, event: null }, "2025-08-27": { dayOrder: null, event: "Vinayakar Chathurthi - Holiday" }, "2025-08-28": { dayOrder: 2, event: null }, "2025-08-29": { dayOrder: 3, event: null }, "2025-08-30": { dayOrder: 4, event: null },
    "2025-09-01": { dayOrder: 4, event: null }, "2025-09-02": { dayOrder: 5, event: null }, "2025-09-03": { dayOrder: 1, event: null }, "2025-09-04": { dayOrder: 2, event: null }, "2025-09-05": { dayOrder: null, event: "Milad-Un-Nabi - Holiday" }, "2025-09-06": { dayOrder: null, event: null }, "2025-09-08": { dayOrder: 3, event: null }, "2025-09-09": { dayOrder: 4, event: null }, "2025-09-10": { dayOrder: 5, event: null }, "2025-09-11": { dayOrder: 1, event: null }, "2025-09-12": { dayOrder: 2, event: null }, "2025-09-15": { dayOrder: 3, event: null }, "2025-09-16": { dayOrder: 4, event: null }, "2025-09-17": { dayOrder: 5, event: null }, "2025-09-18": { dayOrder: 1, event: null }, "2025-09-19": { dayOrder: 2, event: null }, "2025-09-22": { dayOrder: 3, event: null }, "2025-09-23": { dayOrder: 4, event: null }, "2025-09-24": { dayOrder: 5, event: null }, "2025-09-25": { dayOrder: 1, event: null }, "2025-09-26": { dayOrder: 2, event: null }, "2025-09-29": { dayOrder: 3, event: null }, "2025-09-30": { dayOrder: 4, event: null },
    "2025-10-01": { dayOrder: null, event: "Ayutha Pooja - Holiday" }, "2025-10-02": { dayOrder: null, event: "Vijaya Dasami - Holiday" }, "2025-10-03": { dayOrder: 5, event: null }, "2025-10-06": { dayOrder: 1, event: null }, "2025-10-07": { dayOrder: 2, event: null }, "2025-10-08": { dayOrder: 3, event: null }, "2025-10-09": { dayOrder: 4, event: null }, "2025-10-10": { dayOrder: 5, event: null }, "2025-10-13": { dayOrder: 1, event: null }, "2025-10-14": { dayOrder: 2, event: null }, "2025-10-15": { dayOrder: 3, event: null }, "2025-10-16": { dayOrder: 4, event: null }, "2025-10-17": { dayOrder: 5, event: null }, "2025-10-20": { dayOrder: null, event: "Deepavali - Holiday" }, "2025-10-21": { dayOrder: 1, event: null }, "2025-10-22": { dayOrder: 2, event: null }, "2025-10-23": { dayOrder: 3, event: null }, "2025-10-24": { dayOrder: 4, event: null }, "2025-10-27": { dayOrder: 5, event: null }, "2025-10-28": { dayOrder: 1, event: null }, "2025-10-29": { dayOrder: 2, event: null }, "2025-10-30": { dayOrder: 3, event: null }, "2025-10-31": { dayOrder: 4, event: null },
    "2025-11-03": { dayOrder: 5, event: null }, "2025-11-04": { dayOrder: 1, event: null }, "2025-11-05": { dayOrder: 2, event: null }, "2025-11-06": { dayOrder: 3, event: null }, "2025-11-07": { dayOrder: 4, event: null }, "2025-11-10": { dayOrder: 5, event: null }, "2025-11-11": { dayOrder: 1, event: null }, "2025-11-12": { dayOrder: 2, event: null }, "2025-11-13": { dayOrder: 3, event: null }, "2025-11-14": { dayOrder: 4, event: null }, "2025-11-17": { dayOrder: 5, event: null }, "2025-11-18": { dayOrder: 1, event: null }, "2025-11-19": { dayOrder: 2, event: null }, "2025-11-20": { dayOrder: 3, event: null }, "2025-11-21": { dayOrder: 4, event: null }, "2025-11-24": { dayOrder: 5, event: null }, "2025-11-25": { dayOrder: 1, event: null }, "2025-11-26": { dayOrder: 2, event: null }, "2025-11-27": { dayOrder: 3, event: null }, "2025-11-28": { dayOrder: 4, event: null }
};

const timetableData = {
    subjects: [ { id: 'phy', name: 'Physics: Mechanics', location: 'CRC 503' }, { id: 'eng', name: 'Communicative English', location: 'CRC 503' }, { id: 'phylab', name: 'Physics: Mechanics Lab', location: 'Physics Lab' }, { id: 'egd', name: 'Engineering Graphics', location: 'EGD Hall' }, { id: 'eee', name: 'Electrical & Electronics', location: 'EEE Lab' }, { id: 'calc', name: 'Calculus & Linear Algebra' }, { id: 'coi', name: 'Constitution of India', location: 'Online' }, { id: 'evs', name: 'Environmental Science' } ],
    schedule: [ { day: 1, p: [null, null, null, null, null, null, null, null, 'calc', 'phy'] }, { day: 2, p: ['phy', 'phy', 'eng', 'eng', null, null, 'phylab', 'phylab', null, null] }, { day: 3, p: ['egd', 'egd', 'egd', 'egd', null, 'eee', 'eee', null, 'calc', 'phy'] }, { day: 4, p: ['calc', 'calc', 'phy', null, 'eee', null, null, 'coi', 'evs', null] }, { day: 5, p: [null, null, null, null, null, null, null, 'eee', null, 'calc'] } ],
    periodTimes: [ "08:00 AM - 08:50 AM", "08:50 AM - 09:40 AM", "09:45 AM - 10:35 AM", "10:40 AM - 11:30 AM", "11:35 AM - 12:25 PM", "12:30 PM - 01:20 PM", "01:25 PM - 02:15 PM", "02:20 PM - 03:10 PM", "03:10 PM - 04:00 PM", "04:00 PM - 04:50 PM" ]
};

const dayDisplay = document.getElementById('day-display');
const dayLabel = document.querySelector('.day-label');
const prevDayButton = document.getElementById('prev-day');
const nextDayButton = document.getElementById('next-day');
const timetableGrid = document.getElementById('timetable-grid');

let currentDayOrder = 1;
let attendanceData = {};
let isTodayView = true; // NEW: Flag to track if we are viewing "Today" or manually browsing

function getCurrentPeriodIndex() {
    const now = new Date();
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    const periodEndTimes = [530, 580, 635, 690, 745, 800, 855, 910, 960, 1010];
    for (let i = 0; i < periodEndTimes.length; i++) { if (currentTimeInMinutes < periodEndTimes[i]) return i; }
    return -1;
}

function getDayStatus(targetDate) {
    const dateStr = `${targetDate.getFullYear()}-${String(targetDate.getMonth() + 1).padStart(2, '0')}-${String(targetDate.getDate()).padStart(2, '0')}`;
    const data = academicData[dateStr];
    const dayOfWeek = targetDate.getDay();
    if (data && data.dayOrder) { return { type: 'working', dayOrder: data.dayOrder }; }
    let nextDate = new Date(targetDate);
    for (let i = 0; i < 14; i++) {
        nextDate.setDate(nextDate.getDate() + 1);
        const nextDayOfWeek = nextDate.getDay();
        const nextDateStr = `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, '0')}-${String(nextDate.getDate()).padStart(2, '0')}`;
        if (academicData[nextDateStr] && academicData[nextDateStr].dayOrder && nextDayOfWeek !== 0 && nextDayOfWeek !== 6) {
            return { type: 'holiday', nextDayOrder: academicData[nextDateStr].dayOrder };
        }
    }
    return { type: 'holiday', nextDayOrder: 'N/A' };
}

function loadAttendanceData() { const savedData = localStorage.getItem('subjectAttendance'); if (savedData) attendanceData = JSON.parse(savedData); }
function getSubjectById(id) { return timetableData.subjects.find(sub => sub.id === id); }

function renderTimetable(dayOrder, status, isToday = false) {
    dayDisplay.textContent = dayOrder;
    dayLabel.textContent = status;

    const dayData = timetableData.schedule.find(d => d.day === dayOrder);
    if (!dayData) { timetableGrid.innerHTML = `<div class="holiday-message">It's a Holiday!</div>`; return; }

    const currentPeriodIndex = isToday ? getCurrentPeriodIndex() : -1;

    timetableGrid.innerHTML = '';
    timetableData.periodTimes.forEach((time, index) => {
        const isCurrentPeriod = index === currentPeriodIndex;
        const periodGlowClass = isCurrentPeriod ? 'current-period' : '';
        const subjectId = dayData.p[index];
        let cardHTML;
        if (subjectId) {
            const subject = getSubjectById(subjectId);
            const stats = attendanceData[subjectId] || { total: 0, attended: 0 };
            const percentage = stats.total > 0 ? (stats.attended / stats.total) * 100 : 0;
            const maxMissable = Math.floor(stats.total * 0.25);
            const currentlyMissed = stats.total - stats.attended;
            const margin = maxMissable - currentlyMissed;
            const percColor = percentage < 75 ? 'red' : 'green';
            cardHTML = `<div class="class-card ${periodGlowClass}"><div class="time">${time}</div><div class="details"><h3>${subject.name}</h3><p>${subject.location || ''}</p></div><div class="stats"><div class="percentage ${percColor}">${percentage.toFixed(2)}%</div><div class="stat-box">${stats.attended}</div><div class="stat-box">${stats.total}</div><div class="stat-box">Margin ${margin}</div></div></div>`;
        } else {
            cardHTML = `<div class="class-card no-class ${periodGlowClass}"><div class="time">${time}</div><div class="details"><h3>No class</h3></div></div>`;
        }
        timetableGrid.innerHTML += cardHTML;
    });
}

function updateDisplay(dayOrder, isTodayPage = false) {
    isTodayView = isTodayPage; // Update the flag
    if (isTodayPage) {
        const today = new Date();
        const status = getDayStatus(today);
        if (status.type === 'working') {
            currentDayOrder = status.dayOrder;
            renderTimetable(currentDayOrder, `Today - DO ${currentDayOrder}`, true);
        } else {
            renderTimetable(status.nextDayOrder, `Holiday - Next DO ${status.nextDayOrder}`, false);
        }
    } else {
        currentDayOrder = dayOrder;
        renderTimetable(currentDayOrder, `Day Order ${currentDayOrder}`, false);
    }
}

nextDayButton.addEventListener('click', () => { updateDisplay((currentDayOrder % 5) + 1); });
prevDayButton.addEventListener('click', () => { updateDisplay((currentDayOrder === 1) ? 5 : currentDayOrder - 1); });

// --- INITIAL LOAD & PERSISTENT UPDATE ---
loadAttendanceData();
updateDisplay(null, true);

// This interval checks the time every 15 seconds and updates the view if needed.
setInterval(() => {
    // Only auto-update if the user is currently on the "Today" view.
    if (isTodayView) {
        updateDisplay(null, true);
    }
}, 15000); // 15000 milliseconds = 15 seconds