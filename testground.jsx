//May be i need to change my locations data again right now I've bind each location with 24hour time slots, rather than this I should bind
//Each time slot with every location available to me. Since wheneever user want to book something he's first of all likeyly to select an hour and
//then time slot of 15min, 30min, 45min, 1hour

//Selects the word at the cursor, or the next occurrence of the current selection.
//Ctrl+D

//To add cursors to all the occurrences of a highlighted word
//Ctrl+Shift+L
//Then select all occurrences of that word

// prettier-ignore
const LOCATION_THAPAR_UNIVERSITY = [
    {
        available: true,
        level: "Level 0",
        spot: "A01",
        userId: null,
        parked: false,                                
    },
    {
        available: true,
        level: "Level 0",
        spot: "A02",
        userId: null,
        parked: false,  
    },
    {
        available: true,
        level: "Level 1",
        spot: "B01",
        userId: null,
        parked: false,  
    },
    {
        available: true,
        level: "Level 2",
        spot: "B02",
        userId: null,
        parked: false,  
    }
]
// prettier-ignore
const SLOTS_THAPAR_UNIVERSITY = {
    first: [...LOCATION_THAPAR_UNIVERSITY ],
    second: [...LOCATION_THAPAR_UNIVERSITY ],
    third: [...LOCATION_THAPAR_UNIVERSITY ],
    fourth: [...LOCATION_THAPAR_UNIVERSITY ],
}
// prettier-ignore
const TIME_THAPAR_UNIVERSITY = [
    {
        hour: "0000-0001",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0001-0002",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0002-0003",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0003-0004",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0004-0005",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0005-0006",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0006-0007",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0007-0008",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0008-0009",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0009-0010",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0010-0011",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0011-0012",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0012-0013",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },                {
        hour: "0013-0014",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0014-0015",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0015-0016",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0016-0017",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0017-0018",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0018-0019",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0019-0020",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0020-0021",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0021-0022",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0022-0023",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
    {
        hour: "0023-0024",
        slots: {...SLOTS_THAPAR_UNIVERSITY}
    },
]
// prettier-ignore
const DATE_THAPAR_UNIVERSITY = [
    {
        date: "01-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "02-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "03-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "04-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "05-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "06-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
    {
        date: "07-09-2020",
        time: [...TIME_THAPAR_UNIVERSITY]
    },
]
// prettier-ignore
const locations = [
  {
    id: 1,
    label: "Thapar University",
    name: "thaparuniversity",
    date: [...DATE_THAPAR_UNIVERSITY] 
  }
];
