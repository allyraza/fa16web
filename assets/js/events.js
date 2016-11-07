var allEvents = [
  {
    title: "Lecture\n(155 Dwinelle)",
    start: "18:30",
    end: "20:00",
    dow: [1, 3],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 22),
      new Date(2016, 8, 5),
      new Date(2016, 9, 5),
      new Date(2016, 10, 7),
      new Date(2016, 10, 23),
      new Date(2016, 11, 5),
      new Date(2016, 11, 7),
      new Date(2016, 11, 12),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Midterm 1\n(155 Dwinelle)",
    start: "2016-10-05 19:00",
    end: "2016-10-05 20:30",
    backgroundColor: "#C4820E",
    borderColor: "#C4820E"
  },

  {
    title: "Midterm 2\n(Check Piazza for Rooms)",
    start: "2016-11-07 19:00",
    end: "2016-11-07 20:30",
    backgroundColor: "#C4820E",
    borderColor: "#C4820E"
  },

  {
    title: "Final Exam\n(location TBD)",
    start: "2016-12-16 15:00",
    end: "2016-12-16 18:00",
    backgroundColor: "#C4820E",
    borderColor: "#C4820E"
  },

  {
    title: "Section 101\n(229 Dwinelle, Anurag)",
    start: "9:00",
    end: "10:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 102\n(405 Soda, Vikram)",
    start: "11:00",
    end: "12:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },


  {
    title: "Section 103\n(405 Soda, Vikram)",
    start: "12:00",
    end: "13:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },

  {
    title: "Section 104\n(289 Cory, Anurag)",
    start: "11:00",
    end: "12:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 105\n(405 Soda, Sammy)",
    start: "13:00",
    end: "14:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },

  {
    title: "Section 106\n(102 Moffitt, Andrew)",
    start: "12:00",
    end: "13:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 107\n(3105 Etcheverry, Larry)",
    start: "12:00",
    end: "13:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 108\n(320 Soda, Larry)",
    start: "13:00",
    end: "14:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 109\n(102 Moffitt, Warren)",
    start: "13:00",
    end: "14:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 110\n(70 Evans, Warren)",
    start: "14:00",
    end: "15:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 111\n(9 Evans, Amruta)",
    start: "14:00",
    end: "15:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 112\n(405 Soda, Selena)",
    start: "14:00",
    end: "15:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },

  {
    title: "Section 113\n(405 Soda, Selena)",
    start: "15:00",
    end: "16:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },

  {
    title: "Section 114\n(70 Evans, Amruta)",
    start: "16:00",
    end: "17:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
      new Date(2016, 11, 7),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Section 115\n(310 Soda, Sammy)",
    start: "15:00",
    end: "16:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
      new Date(2016, 11, 6),
      new Date(2016, 11, 13),
    ]
  },

  {
    title: "Warren's OH\n(341A Soda)",
    start: "14:00",
    end: "16:00",
    dow: [1, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 22),
    ]
  },

  {
    title: "Larry's OH\n(611 Soda)",
    start: "15:00",
    end: "17:00",
    dow: [3, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
    ]
  },

  {
    title: "Selena's OH\n(341B Soda)",
    start: "10:00",
    end: "12:00",
    dow: [3, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },

  {
    title: "Anurag's OH\n(341A Soda)",
    start: "16:00",
    end: "18:00",
    dow: [4, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },

  {
    title: "Vikram's OH\n(651 Soda)",
    start: "14:00",
    end: "15:00",
    dow: [2, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
    ]
  },

  {
    title: "Vikram's OH\n(283E Soda)",
    start: "14:00",
    end: "15:00",
    dow: [5, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 26),
      new Date(2016, 10, 25),
    ]
  },


  {
    title: "Amruta's OH\n(651 Soda)",
    start: "10:00",
    end: "11:00",
    dow: [1, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 22),
    ]
  },


  {
    title: "Amruta's OH\n(651 Soda)",
    start: "11:00",
    end: "12:00",
    dow: [4, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },
  {
    title: "Sammy's OH\n(341A Soda)",
    start: "16:00",
    end: "17:00",
    dow: [2, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },
  {
    title: "Andrew's OH\n(341B Soda)",
    start: "12:00",
    end: "13:00",
    dow: [1, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },
  {
    title: "Andrew's OH\n(341A Soda)",
    start: "11:00",
    end: "12:00",
    dow: [2, ],
    backgroundColor: "#8C3C5A",
    borderColor: "#8C3C5A",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  }

];
