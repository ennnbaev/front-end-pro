let distanceInFeet = prompt('Please write down distance in feet')
let distanceInKilometers = prompt('Please write down distance in kilometers')
const distanceFromFeetToMeters = parseFloat(distanceInFeet) * 0.305;
const distanceFromKilometersToMeters = parseFloat(distanceInKilometers) * 1000;
if (distanceFromFeetToMeters > distanceFromKilometersToMeters) {
    alert('Distance in feet is greater than distance in kilometer')
} else if (distanceFromFeetToMeters > distanceFromKilometersToMeters) {
    alert('Distance in kilometer is greater than distance in feet')
} else {
    alert('Distances are equal')
}