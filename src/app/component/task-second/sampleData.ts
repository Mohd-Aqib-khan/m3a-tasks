export const SAMPLE_DATA = [
  {
    name: 'Level 1 - Row A',
    position: 'CEO',
    weight: 100,
    symbol: 'A',
    expanded: false,
    children: [
      {
        name: 'Level 2 - Row A1',
        position: 'CTO',
        weight: 80,
        symbol: 'A1',
        expanded: false,
        children: [
          {
            name: 'Level 3 - Row A1a',
            position: 'Dev Manager',
            weight: 60,
            symbol: 'A1a',
            expanded: false,
            children: [
              {
                name: 'Level 4 - Row A1a1',
                position: 'Developer',
                weight: 40,
                symbol: 'A1a1',
                expanded: false,
                children: [] // No further nesting
              },
              {
                name: 'Level 4 - Row A1a2',
                position: 'Developer',
                weight: 42,
                symbol: 'A1a2',
                expanded: false,
                children: []
              }
            ]
          },
          {
            name: 'Level 3 - Row A1b',
            position: 'QA Manager',
            weight: 55,
            symbol: 'A1b',
            expanded: false,
            children: [] // No further nesting
          }
        ]
      },
      {
        name: 'Level 2 - Row A2',
        position: 'CFO',
        weight: 85,
        symbol: 'A2',
        expanded: false,
        children: [] // No further nesting
      }
    ]
  },
  {
    name: 'Level 1 - Row B',
    position: 'COO',
    weight: 95,
    symbol: 'B',
    expanded: false,
    children: [
      {
        name: 'Level 2 - Row B1',
        position: 'Operations Manager',
        weight: 70,
        symbol: 'B1',
        expanded: false,
        children: [] // No further nesting
      }
    ]
  }
];


export const SAMPLE_DATA_2 = [
  {
    // Level 1
    RecordId: 1,
    Row1Col1: "CHF",
    Row1Col2: 68907.5,
    Row1Col3: "Cash Account: test manual Ptf.CHF",
    Row1Col4: 0,
    expanded: false,
    // Children (Level 2)
    children: [
      {
        RecordId: 2,
        Row1Col1: "CHF",
        Row1Col2: -14912,
        Row1Col3: "Cash Account: test manual Ptf.CHF",
        Row1Col4: 0,
        expanded: false,
        // Children (Level 3)
        children: [
          {
            RecordId: 3,
            Row1Col1: "CHF",
            Row1Col2: 5000,
            Row1Col3: "Forward",
            Row1Col4: 0,
            expanded: false,
            // Children (Level 4)
            children: [
              {
                RecordId: 4,
                Row1Col1: "CHF",
                Row1Col2: -550000,
                Row1Col3: "Cash Account: test manual Ptf.test manual Ptf.CHF.114888.CHF",
                Row1Col4: 0,
                expanded: false,
                children: [] // No further nesting
              },
              {
                RecordId: 5,
                Row1Col1: "CHF",
                Row1Col2: -85000,
                Row1Col3: "Cash Account: test manual Ptf.test manual Ptf.CHF.604748.CHF",
                Row1Col4: 0,
                expanded: false,
                children: [] // No further nesting
              }
            ]
          },
          {
            RecordId: 6,
            Row1Col1: "CHF",
            Row1Col2: -52000,
            Row1Col3: "Cash Account: test manual Ptf.CHF",
            Row1Col4: 0,
            expanded: false,
            children: [] // Level 4 not needed here
          }
        ]
      },
      {
        RecordId: 7,
        Row1Col1: "EUR",
        Row1Col2: 50500,
        Row1Col3: "Cash Account: test cash-0011992",
        Row1Col4: 0,
        expanded: false,
        children: [] // No further nesting for this branch
      }
    ]
  },
  {
    // Another top-level record (Level 1)
    RecordId: 8,
    Row1Col1: "USD",
    Row1Col2: 50,
    Row1Col3: "AHOLD DEL",
    Row1Col4: 35.15,
    expanded: false,
    children: [
      {
        RecordId: 9,
        Row1Col1: "USD",
        Row1Col2: 5000,
        Row1Col3: "APPLE INC.",
        Row1Col4: 5500,
        expanded: false,
        children: [] // Level 3 not present
      }
    ]
  },
  {
    // Third top-level record (Level 1)
    RecordId: 10,
    Row1Col1: "USD",
    Row1Col2: 30,
    Row1Col3: "MICROSOFT CORPORATION",
    Row1Col4: 413.64,
    expanded: false,
    children: [
      {
        RecordId: 11,
        Row1Col1: "USD",
        Row1Col2: 20,
        Row1Col3: "MICROSOFT CORPORATION",
        Row1Col4: 5500,
        expanded: false,
        children: [] // No further nesting
      }
    ]
  },
  {
    // Fourth top-level record (Level 1)
    RecordId: 12,
    Row1Col1: "USD",
    Row1Col2: 20,
    Row1Col3: "HCL AMERICA INC. 1.375% 2026/03",
    Row1Col4: 90.69,
    expanded: false,
    children: [
      {
        RecordId: 13,
        Row1Col1: "USD",
        Row1Col2: 20,
        Row1Col3: "HCL AMERICA I 1.375% 2026/03",
        Row1Col4: 90.69,
        expanded: false,
        children: [] // No further nesting
      }
    ]
  }
];


export const COLUMNS_TO_DISPLAY = ['Row1Col1', 'Row1Col2', 'Row1Col3', 'Row1Col4'];
