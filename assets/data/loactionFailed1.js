const SLOTS = [
  {
    first: true,
    parked: false,
    userId: null,
  },
  {
    second: true,
    parked: false,
    userId: null,
  },
  {
    third: true,
    parked: false,
    userId: null,
  },
  {
    fourth: true,
    parked: false,
    userId: null,
  },
];

const TIME_SLOTS = [
  //FIRST QUATER
  {
    time: "0000-0001",
    slots: SLOTS,
  },
  {
    time: "0001-0002",
    slots: SLOTS,
  },
  {
    time: "0002-0003",
    slots: SLOTS,
  },
  {
    time: "0003-0004",
    slots: SLOTS,
  },
  {
    time: "0004-0005",
    slots: SLOTS,
  },
  {
    time: "0005-0006",
    slots: SLOTS,
  },

  //SECOND QUATER
  {
    time: "0006-0007",
    slots: SLOTS,
  },
  {
    time: "0007-0008",
    slots: SLOTS,
  },
  {
    time: "0008-0009",
    slots: SLOTS,
  },
  {
    time: "0009-00010",
    slots: SLOTS,
  },
  {
    time: "0010-0011",
    slots: SLOTS,
  },
  {
    time: "0011-0012",
    slots: SLOTS,
  },

  //THIRD QUATER
  {
    time: "0012-0013",
    slots: SLOTS,
  },
  {
    time: "0013-0014",
    slots: SLOTS,
  },
  {
    time: "0014-0015",
    slots: SLOTS,
  },
  {
    time: "0015-00016",
    slots: SLOTS,
  },
  {
    time: "0016-0017",
    slots: SLOTS,
  },
  {
    time: "0017-0018",
    slots: SLOTS,
  },
  //FOURT QUATER
  {
    time: "0018-0019",
    slots: SLOTS,
  },
  {
    time: "0019-0020",
    slots: SLOTS,
  },
  {
    time: "0020-0021",
    slots: SLOTS,
  },
  {
    time: "0021-0022",
    slots: SLOTS,
  },
  {
    time: "0022-0023",
    slots: SLOTS,
  },
  {
    time: "0023-0024",
    slots: SLOTS,
  },
];

var locations = [
  //FIRST LOCATION
  {
    id: 1,
    date: "",
    label: "Thapar University",
    name: "thapar",
    location: [
      {
        level: "Level 0",
        spotName: "A01",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level 0",
        spotName: "A02",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level 1",
        spotName: "B01",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level 2",
        spotName: "B02",
        timeSlots: TIME_SLOTS,
      },
    ],
  },
  //SECOND LOCATION
  {
    id: 2,
    date: "",
    label: "Omax Mall",
    name: "omax",
    location: [
      {
        level: "Level A",
        spotName: "101",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level A",
        spotName: "102",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level B",
        spotName: "201",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level B",
        spotName: "202",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level B",
        spotName: "203",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level C",
        spotName: "301",
        timeSlots: TIME_SLOTS,
      },
    ],
  },
  //THIRD LOCATION
  {
    id: 3,
    date: "",
    label: "Alcazar",
    name: "alcazar",
    location: [
      {
        level: "Level 0",
        spotName: "01",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level 0",
        spotName: "02",
        timeSlots: TIME_SLOTS,
      },
      {
        level: "Level 0",
        spotName: "03",
        timeSlots: TIME_SLOTS,
      },
    ],
  },
];

export default locations;
