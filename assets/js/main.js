var ANNOUNCEMENT_THRESHHOLD = 14;

$(document).ready(function() {
  // configure FulLCalendar (fullcalendar.io)
  var getEvents = function(start, end) {
    return allEvents;
  }

  // utility function to check date equality while ignoring the time
  var checkIfSameDay = function(date, other) {
    return date.getYear() === other.getYear() &&
           date.getMonth() === other.getMonth() &&
           date.getDate() === other.getDate();
  }


  $('#calendar').fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: 'prev,next'
    },

    //titleFormat: '[Course\ Calendar]',

    // don't show weekends
    weekends: false,

    defaultView: 'agendaWeek',

    // limit the range of time shown
    minTime: "08:00:00",
    maxTime: "20:00:00",

    contentHeight: "auto",

    // when rendering the view, make sure that the back and forward buttons are
    // disabled for weeks before 8/22 and after 12/16
    viewRender: function(view, element) {
      var now = new Date(2016, 7, 22);
      var end = new Date(2016, 11, 16);

      if (end < view.end) {
        $("#calendar .fc-next-button").addClass('fc-state-disabled');
        return false;
      }
      else {
        $("#calendar .fc-next-button").removeClass('fc-state-disabled');
      }

      if (view.start < now) {
        $("#calendar .fc-prev-button").addClass('fc-state-disabled');
        return false;
      }
      else {
        $("#calendar .fc-prev-button").removeClass('fc-state-disabled');
      }
    },

    // when rendering recurring events, make sure that the date doesn't
    // correspond to one of the exception listed in the event specification
    // if it does, don't render it
    eventRender: function(event, element, view) {
      if(!('exceptions' in event)) {
        return true;
      }

      for (i = 0; i < event.exceptions.length; i++) {
        var e = event.exceptions[i];
        if (checkIfSameDay(event.start.toDate(), e)) {
          return false;
        }
      }

      return true;
    },

    // populate the events by reading from the global events var that is
    // defined in events.js
    events: function(start, end, timezone, callback) {
      var events = getEvents(start, end);
      callback(events);
    },
  });

  // if the date is before the start of the semester, go to the first week of
  // the semester
  if (Date.now() <= new Date(2016, 7, 22)) {
    $('#calendar').fullCalendar('gotoDate', new Date(2016, 7, 22));
  }

  // if the date is after the end of the semester, go to the last week of
  // the semester
  if (Date.now() >= new Date(2016, 11, 16)) {
    $('#calendar').fullCalendar('gotoDate', new Date(2016, 11, 12));
  }

  // load the most recent announcements
  loadAnnouncements(true, ANNOUNCEMENT_THRESHHOLD);  
});

var showOlder = function() {
  loadAnnouncements(false, ANNOUNCEMENT_THRESHHOLD);

  $('#see-older').fadeOut();
};
