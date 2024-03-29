// Import stylesheets
import './style.css';
var moment = require('moment');
import * as crypto from 'crypto-js';

let amount = 0;
let utfEncoded = crypto.enc.Utf8.parse(amount.toString());
let base64Enc = crypto.enc.Base64.stringify(utfEncoded);
let aecEnc = crypto.AES.encrypt(base64Enc, 'AB7792DC58D7413443147D85CD2977BA');

aecEnc = 'U2FsdGVkX1/3zfSrNw5nmk+8XXWfGDqBtlDffCskE8o=';
let b = crypto.AES.decrypt(aec, 'AB7792DC58D7413443147D85CD2977BA');
let b1 = crypto.AES.encrypt('f', 'AB7792DC58D7413443147D85CD2977BA');
let b2 = crypto.AES.decrypt(
  aecEnc,
  'AB7792DC58D7413443147D85CD2977BA'
).toString(crypto.enc.Utf8);
//let ut = crypto.dec.base64.stringify(b);

var words = crypto.enc.Base64.parse(b2);
var textString = crypto.enc.Utf8.stringify(words);
console.log(aecEnc.toString(), textString, b2);
// Write Javascript code!
/*const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var xmlF = require('xml');
const { XMLBuilder } = require('fast-xml-parser');

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
let package_id = [
  'jeddah-ibis-jeddah-city-center-1766850-standard-room-double-bed-bed-and-breakfast',
  'jeddah-ibis-jeddah-city-center-1766850-standard-room-twin-beds-bed-and-breakfast',
];

var example = [
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
var example1 = {
  Transaction: {
    
      _attr: {
        timestamp: '2023-03-06T16:20:00-04:00',
        id: 'jeddah-ibis-jeddah-city-center-1766850',
        partner: 'almatar',
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
};
const options = {
  ignoreAttributes: false,
  format: true,
};
const options1 = {
  attrPrefix: '@_',
  textNodeName: '#text',
  ignoreNonTextNodeAttr: true,
  ignoreTextNodeAttr: true,
  ignoreNameSpace: true,
  ignoreRootElement: false,
  textNodeConversion: true,
  textAttrConversion: false,
  ignoreAttributes: false,
  format: true,
};

const builder = new XMLBuilder(options1);
//console.log(xmlF(example, { declaration: true }));
//console.log(builder.build(example1));




const jsonObj = builder.build(example1);

console.log('ggg');
console.log(jsonObj);*/
