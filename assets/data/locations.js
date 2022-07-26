import { cloneDeep } from "lodash";

// prettier-ignore
const LOCATION_THAPAR_UNIVERSITY = [
    {
        id: "tiet0",
        available: true,
        level: "Level 0",
        spot: "A01",
        userId: null,
        parked: false,                                
    },
    {
        id: "tiet1",
        available: true,
        level: "Level 0",
        spot: "A02",
        userId: null,
        parked: false,  
    },
    {
        id: "tiet2",
        available: true,
        level: "Level 1",
        spot: "B01",
        userId: null,
        parked: false,  
    },
    {
        id: "tiet3",
        available: true,
        level: "Level 2",
        spot: "B02",
        userId: null,
        parked: false,  
    }
  ]

const LOCCATION_OMAX_MALL = [
  {
    id: "omax0",
    available: true,
    level: "Level A",
    spot: "101",
    userId: null,
    parked: false,
  },
  {
    id: "omax1",
    available: true,
    level: "Level B",
    spot: "201",
    userId: null,
    parked: false,
  },
];
// prettier-ignore
const SLOTS_THAPAR_UNIVERSITY = [
  {
    slot: "first",
    slotLabel: "15 min",      
    first: cloneDeep(LOCATION_THAPAR_UNIVERSITY ),
  },    
  {
    slot: "second",
    slotLabel: "30 min",      
    second: cloneDeep(LOCATION_THAPAR_UNIVERSITY),
  },
  {
    slot: "third",
    slotLabel: "45 min",      
    third: cloneDeep(LOCATION_THAPAR_UNIVERSITY),
  },
  {
    slot: "fourth",
    slotLabel: "1 hr",      
    fourth: cloneDeep(LOCATION_THAPAR_UNIVERSITY),
  },    
]

const SLOTS_OMAX_MALL = [
  {
    slot: "first",
    slotLabel: "15 min",
    first: cloneDeep(LOCCATION_OMAX_MALL),
  },
  {
    slot: "second",
    slotLabel: "30 min",
    second: cloneDeep(LOCCATION_OMAX_MALL),
  },
  {
    slot: "third",
    slotLabel: "45 min",
    third: [...LOCCATION_OMAX_MALL],
  },
  {
    slot: "fourth",
    slotLabel: "1 hr",
    fourth: cloneDeep(LOCCATION_OMAX_MALL),
  },
];

// prettier-ignore
const TIME_THAPAR_UNIVERSITY = [
    {
        time: "0000-0001",
        timeLabel: "12am-1am",
        slots: cloneDeep(SLOTS_THAPAR_UNIVERSITY),
    },
    {
        time: "0001-0002",
        timeLabel: "1am-2am",
        slots: cloneDeep(SLOTS_THAPAR_UNIVERSITY),
    },
    {
        time: "0002-0003",
        timeLabel: "2am-3am",
        slots: cloneDeep(SLOTS_THAPAR_UNIVERSITY),
    },
  ]

const TIME_OMAX_MALL = [
  {
    time: "0018-0019",
    timeLabel: "6pm-7pm",
    slots: cloneDeep(SLOTS_OMAX_MALL),
  },
  {
    time: "0019-0020",
    timeLabel: "7pm-8pm",
    slots: cloneDeep(SLOTS_OMAX_MALL),
  },
];
// prettier-ignore
const DATE_THAPAR_UNIVERSITY = [
    {
        date: "01-09-2020",
        time: cloneDeep(TIME_THAPAR_UNIVERSITY),
    },
    {
        date: "02-09-2020",
        time: cloneDeep(TIME_THAPAR_UNIVERSITY),
    },
    {
        date: "03-09-2020",
        time: cloneDeep(TIME_THAPAR_UNIVERSITY),
    },
  ]

const DATE_OMAX_MALL = [
  {
    date: "04-10-2020",
    time: cloneDeep(TIME_OMAX_MALL),
  },
  {
    date: "05-10-2020",
    time: cloneDeep(TIME_OMAX_MALL),
  },
];
// prettier-ignore
const locations = [
  {
    id: 1,
    label: "Thapar University",
    name: "thaparuniversity",
    date: cloneDeep(DATE_THAPAR_UNIVERSITY),
  },
  {
    id:2,
    label: "Omax Mall",
    name: "omax",
    date: cloneDeep(DATE_OMAX_MALL),
  }
  ];

export default locations;
