Course website for CS 186, Fall 2016. Published at www.cs186berkeley.net.

To add an announcement, make an entry in `announcement-list.js` with the specified format. The entry key is the date that 
you're making the announcement. The value is either an announcement or a list of announcements. Any announcements that are 
older than 2 weeks old will automatically be hidden. Let me know if you need to change this for whatever reason. You can set
the `ANNOUNCEMENT_THRESHHOLD` defined at the top of `assets/js/main.js`.

To add an event, add to the list in `assets/js/events.js`. If it's a repeating event, specify a start and end time and the 
the day of the week (in the `dow` field; numbered with Monday as 1). The color scheme I used was the main color (`#3B7EA1`)
as the background for lecture, section, and OH. The secondary color (`#C4820E`) is for exams, review sessions, and so on. If
the event is not repeating, then the start and end fields must also have dates, not just times.

TODOs: 

- [x] modify image styling (remove?) so that it works on phones
- [x] add bios on hover over images
- [ ] add OH to schedule
- [ ] add lecture schedule
