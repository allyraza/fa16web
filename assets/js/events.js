var allEvents = [
  {
    title: "Lecture (155 Dwinelle)",
    start: "18:30",
    end: "20:00",
    dow: [1, 3],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 22),
      new Date(2016, 8, 5),
      new Date(2016, 8, 28),
      new Date(2016, 10, 2),
      new Date(2016, 10, 23),
      new Date(2016, 11, 5),
      new Date(2016, 11, 7),
      new Date(2016, 11, 12),
      new Date(2016, 11, 14),
    ]
  },

  {
    title: "Midterm 1 (155 Dwinelle)",
    start: "2016-09-28 18:30",
    end: "2016-09-28 20:00",
    backgroundColor: "#C4820E",
  },

  {
    title: "Midterm 2 (155 Dwinelle)",
    start: "2016-11-02 18:30",
    end: "2016-11-02 20:00",
    backgroundColor: "#C4820E",
  },

  {
    title: "Final Exam (location TBD)",
    start: "2016-12-16 15:00",
    end: "2016-12-16 18:00",
    backgroundColor: "#C4820E",
  },

  {
    title: "Section 101 (229 Dwinelle, Anurag)",
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
    title: "Section 102 (405 Soda, Vikram)",
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
    title: "Section 103 (405 Soda, Vikram)",
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
    title: "Section 104 (289 Cory, Anurag)",
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
    title: "Section 105 (405 Soda, Sammy)",
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
    title: "Section 106 (102 Moffitt, Sammy)",
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
    title: "Section 107 (3105 Etcheverry, Larry)",
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
    title: "Section 108 (320 Soda, Larry)",
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
    title: "Section 109 (102 Moffitt, Amruta)",
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
    title: "Section 110 (70 Evans, Warren)",
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
    title: "Section 111 (9 Evans, Amruta)",
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
    title: "Section 112 (405 Soda, Selena)",
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
    title: "Section 113 (405 Soda, Selena)",
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
    title: "Section 114 (70 Evans, Warren)",
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
    title: "Warren's OH (341A Soda)",
    start: "14:00",
    end: "16:00",
    dow: [1, ],
    backgroundColor: "3B7EA1",
    exceptions: [
      new Date(2016, 7, 22),
    ]
  },

  {
    title: "Larry's OH (611 Soda)",
    start: "15:00",
    end: "17:00",
    dow: [3, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 24),
      new Date(2016, 10, 23),
    ]
  },

  {
    title: "Selena's OH (341B Soda)",
    start: "14:30",
    end: "16:30",
    dow: [4, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },
  
  {
    title: "Anurag's OH (341A Soda)",
    start: "16:00",
    end: "18:00",
    dow: [4, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },

  {
    title: "Vikram's OH (651 Soda)",
    start: "14:00",
    end: "15:00",
    dow: [2, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 23),
      new Date(2016, 10, 22),
    ]
  },

  {
    title: "Vikram's OH (651 Soda)",
    start: "11:00",
    end: "12:00",
    dow: [5, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 26),
      new Date(2016, 10, 25),
    ]
  },


  {
    title: "Amruta's OH (651 Soda)",
    start: "10:00",
    end: "11:00",
    dow: [1, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 22),
    ]
  },


  {
    title: "Amruta's OH (651 Soda)",
    start: "10:00",
    end: "11:00",
    dow: [4, ],
    backgroundColor: "#3B7EA1",
    exceptions: [
      new Date(2016, 7, 25),
      new Date(2016, 10, 24),
    ]
  },
];
