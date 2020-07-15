// https://gist.github.com/epoch/c44eccaf73384517e468f957e412d951
// data transform
// You want to use google maps to show cities around the world but the data file (attached) you have available is not in the shape that fits the google maps API function calls.

// from this:

// test1 = {
// 	'AW':[12.52111,-69.968338,'Aruba'],
//     'AU':[-25.274398,133.775136,'Australia'],
//     'KP':[35.907757,127.766922,'Korea, Democratic People\'s Republic of'],
// 	'AT':[47.516231,14.550072,'Austria']
// }
// Read in the data file and transform it from the shape above to the shape below
// to this:

// [
// 	{ Aruba: { lat: 12.52111, lng: -69.968338 } },
// 	{ Australia: { lat: -25.274398, lng: 133.775136 } },
//  {"Korea, Democratic People's Republic of":{"lat":35.907757,"lng":127.766922}},
// 	{ Austria: { lat: 47.516231, lng: 14.550072 } }
// 	... more items not shown

// ]



const fs = require('fs');
const JSON5 = require('json5'); 

const jsonFileReader = filePath => JSON5.parse(fs.readFileSync(filePath).toString().trim());

const locationFix = locationData => {
    const result = [];
    Object
        .entries(locationData)
        .map(location => location[1])
        .forEach(location => {
            locationObj = {};
            locationObj[location[2]] = { lat: location[0], lng: location[1] };
            result.push(locationObj);
        });
    return result;
}	

const jsonFileWriter = (filePath, json) => {
	const jsonString = JSON.stringify(json, null, 2);
	fs.writeFileSync(filePath, jsonString)
}

const locationData = jsonFileReader('data.txt');
const result = locationFix(locationData);
jsonFileWriter('new_data.txt', result);









