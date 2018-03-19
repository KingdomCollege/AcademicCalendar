$(function () {
    $('#calendarView').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,agendaDay'
        },
        displayEventTime: false,
        googleCalendarApiKey: 'AIzaSyCvfqhG0sp2h9YGStl9B0Lx46QAMEPgDpI',
        events: 'kingdomcollege.net_4nj2njko8q2otfrb0jkc2v2ggo@group.calendar.google.com',
        defaultView: 'month',
        eventClick: function (event) {
            window.open(event.url, '_blank', 'width=700,height=600');
            return false;
        }
    });
    
    $('#calendarList').fullCalendar({
        displayEventTime: false,
        googleCalendarApiKey: 'AIzaSyCvfqhG0sp2h9YGStl9B0Lx46QAMEPgDpI',
        events: 'kingdomcollege.net_4nj2njko8q2otfrb0jkc2v2ggo@group.calendar.google.com',
        defaultView: 'listYear'
    });
});
