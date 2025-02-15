const calendar = document.querySelector('.calendar'),
    date = document.querySelector('.date'),
    daysContainer = document.querySelector('.days'),
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');
    todayBtn = document.querySelector('.today-btn');
    gotoBtn = document.querySelector('.goto-btn');
    dateInput = document.querySelector('.date-input'),
    eventDay = document.querySelector('.event-day'),
    eventDate = document.querySelector('.event-date');
    eventsContainer = document.querySelector('.events');


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const eventsArr = [
    {
        day: 14,
        month: 2,
        year: 2025,
        events: [
            {
                title: "Event 1",
                time: "10:00 AM",
            },
            {
                title: "Event 2",
                time: "11:00 AM",
            },
        ],
    },
    {
        day: 16,
        month: 2,
        year: 2025,
        events: [
            {
                title: "Event 1",
                time: "10:00 AM",
            },
            {
                title: "Event 2",
                time: "11:00 AM",
            },
        ],
    },
]; 
//function to add days

function initCalendar() {
    //to get prev month days and current month all days and rem next month days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day =  firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + ' ' + year;

    //adding days
    let days = '';

    //prev month
    for (let x = day; x > 0; x--) {
        days += `<div class = 'day prev-date'>${prevDays -x + 1}</div>`;
    }

    //current month
    for(let i = 1; i <= lastDate; i++) {
        //check if there is an event on that day
        let event = false;
        eventsArr.forEach((eventObj) => {
            if(
                eventObj.day === i &&
                eventObj.month === month + 1 &&
                eventObj.year === year
            )
            {
                //if there is an event on that day
                event = true;
            }
        })
        if(i === new Date().getDate() && 
        year === new Date().getFullYear() && 
        month === new Date().getMonth()
        ){
            activeDay = i;
            getActiveDay(i);
            updateEvents(i);

            if(event) {
                days += `<div class = 'day today active event'>${i}</div>`;
            } else {
                days += `<div class = 'day today active'>${i}</div>`;
            }
        }
        // add remaining days
        else {
            if(event) {
                days += `<div class = 'day event'>${i}</div>`;
            } else {
                days += `<div class = 'day'>${i}</div>`;
            }
        }
    }

    //next month
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class = 'day next-date'>${j}</div>`;
    }
    daysContainer.innerHTML = days;
    addListener();
}

initCalendar();

//prev month
function prevMonth() {
    month--;
    if(month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

//next month
function nextMonth() {
    month++;
    if(month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

//event listeners
prev.addEventListener('click', prevMonth);
next.addEventListener('click', nextMonth);

//goto date and goto today
todayBtn.addEventListener('click', () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener('input', (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, '');
    if(dateInput.value.length === 2){
        dateInput.value += '/';
    }
    if(dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }
    if(e.inputType === 'deleteContentBackward'){
        if(dateInput.value.length === 3){
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

gotoBtn.addEventListener('click', gotoDate);

function gotoDate() {
    const dateArr =  dateInput.value.split('/');
    if(dateArr.length ===2) {
        if(dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month = dateArr[0] - 1;
            year = dateArr[1];
            initCalendar();
            return;
        }
    }
    alert('Invalid Date');
}

function addListener(){
    const days = document.querySelectorAll('.day');
    days.forEach((day) => {
        day.addEventListener('click', (e) => {
            activeDay = Number(e.target.innerHTML);
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));

            days.forEach(day => {
                day.classList.remove('active');
            })
            if(e.target.classList.contains('prev-date')) {
                prevMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll('.day');
                    days.forEach((day) => {
                        if(!day.classList.contains("prev-date") && day.innerHTML === e.target.innerHTML) {
                            day.classList.add('active');
                        }
                    });
                }, 100);
            }
            else if(e.target.classList.contains('next-date')) {
                nextMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll('.day');
                    days.forEach((day) => {
                        if(!day.classList.contains("next-date") && day.innerHTML === e.target.innerHTML) {
                            day.classList.add('active');
                        }
                    });
                }, 100);
            }
            else {
                e.target.classList.add('active');
            }
        });
    });
}

function getActiveDay(date){
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + ' ' + months[month] + ' ' + year;
}

//function to show events
function updateEvents(date){
    let events = '';
    eventsArr.forEach((event) => {
        //events of active day only
        if (
            date === event.day &&
            month + 1 === event.month &&
            year === event.year
        ){
            event.events.forEach((event) => {
                events += 
                `<div class = 'event'>
                    <div class = 'title'>
                        <i class = 'fas fa-circle'></i>
                        <h3 class = 'event-title'>${event.title}</h3>
                    </div>
                    <div class = 'event-time'>
                    <span class = 'event-time'>${event.time}</span>
                    </div>
                </div>
                `;
            });
        }
    });
    if((events === '')){
        events = `<div class = 'no-event'>
            <h3 class = 'event-none'>No Events</h3>
        </div>`;
    }
    console.log(events);
    eventsContainer.innerHTML = events;
}
