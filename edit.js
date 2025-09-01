// This file is for edit.html

const timetableData = {
    subjects: [
        { id: 'phy', name: 'Physics: Mechanics', credits: 5 },
        { id: 'eng', name: 'Communicative English', credits: 3 },
        { id: 'phylab', name: 'Physics: Mechanics Lab', credits: 5 },
        { id: 'egd', name: 'Engineering Graphics', credits: 2 },
        { id: 'eee', name: 'Electrical & Electronics', credits: 4 },
        { id: 'calc', name: 'Calculus & Linear Algebra', credits: 4 },
        { id: 'coi', name: 'Constitution of India', credits: 0 },
        { id: 'evs', name: 'Environmental Science', credits: 0 }
    ]
};

const form = document.getElementById('attendance-form');
let attendanceData = {};

function loadAttendanceData() {
    const savedData = localStorage.getItem('subjectAttendance');
    if (savedData) {
        attendanceData = JSON.parse(savedData);
    }
}

function renderForm() {
    form.innerHTML = '';
    timetableData.subjects.forEach(subject => {
        const stats = attendanceData[subject.id] || { total: 0, attended: 0 };
        const formGroup = `
            <div class="subject-group">
                <h3>${subject.name}</h3>
                <div class="subject-credits">${subject.credits} Credits</div>
                <div class="input-wrapper">
                    <label for="${subject.id}-attended">Classes Attended:</label>
                    <input type="number" id="${subject.id}-attended" value="${stats.attended}" min="0">
                </div>
                <div class="input-wrapper">
                    <label for="${subject.id}-total">Total Classes:</label>
                    <input type="number" id="${subject.id}-total" value="${stats.total}" min="0">
                </div>
            </div>`;
        form.innerHTML += formGroup;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    timetableData.subjects.forEach(subject => {
        const attended = document.getElementById(`${subject.id}-attended`).value;
        const total = document.getElementById(`${subject.id}-total`).value;
        attendanceData[subject.id] = {
            attended: parseInt(attended) || 0,
            total: parseInt(total) || 0,
        };
    });
    localStorage.setItem('subjectAttendance', JSON.stringify(attendanceData));
    alert('Attendance saved!');
    window.location.href = 'index.html';
});

loadAttendanceData();
renderForm();