// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var xmlF = require('xml');

let property_id = 'mecca-millennium-makkah-al-naseem-1766593';
let room_id = [
  'standard-room-double-bed-1766593',
  'deluxe-room-double-bed-1766593',
  'junior-suite-king-bed-1766593',
  'standard-room-twin-beds-1766593',
  'standard-room-king-bed-1766593',
  'standard-triple-3-single-beds-1766593',
  'deluxe-room-king-bed-1766593',
  'executive-suite-1766593',
  'economy-junior-quadruple-1766593',
];

var example5 = [
  {
    Transaction: [
      {
        _attr: {
          timestamp: '2023-03-06T16:20:00-04:00',
          id: 'jeddah-ibis-jeddah-city-center-1766850',
          partner: 'almatar',
        },
      },
      {
        PropertyDataSet: [
          {
            _attr: {
              action: 'overlay',
            },
          },
          { Property: 'jeddah-ibis-jeddah-city-center-1766850' },

          {
            RoomData: [
              {
                RoomID:
                  'jeddah-ibis-jeddah-city-center-1766850-standard-room-double-bed',
              },
              {
                Name: [
                  {
                    Text: {
                      _attr: {
                        text: 'King',
                        language: 'en',
                      },
                    },
                  },
                ],
              },
              {
                Description: [
                  {
                    Text: {
                      _attr: {
                        text: 'King',
                        language: 'en',
                      },
                    },
                  },
                ],
              },
              {
                Capacity: 2,
              },
              {
                PhotoURL: [
                  {
                    URL: 'http',
                  },
                  {
                    Caption: [
                      {
                        Text: {
                          _attr: {
                            text: 'King',
                            language: 'en',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            PackageData: [
              {
                PackageID:
                  'jeddah-ibis-jeddah-city-center-1766850-standard-room-double-bed-bed-and-breakfast',
              },
              {
                Name: [
                  {
                    Text: {
                      _attr: {
                        text: 'King',
                        language: 'en',
                      },
                    },
                  },
                ],
              },
              {
                Description: [
                  {
                    Text: {
                      _attr: {
                        text: 'King',
                        language: 'en',
                      },
                    },
                  },
                ],
              },
              {
                Refundable: {
                  _attr: {
                    available: 'King',
                    refundable_until_days: 'en',
                    refundable_until_time: '6',
                  },
                },
              },
              {
                BreakfastIncluded: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];
console.log(xmlF(example5, { declaration: true }));
