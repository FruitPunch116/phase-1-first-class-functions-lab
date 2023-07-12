// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//All the logs in the console are part of the testing process, take the comments out and then run node index.js to see the results.

function returnFirstTwoDrivers (drivers) {
    // console.log(drivers.slice(0,2))
    const newDrivers = drivers.slice(0,2);
    return newDrivers
};
// console.log(returnFirstTwoDrivers(drivers))

function returnLastTwoDrivers (drivers) {
    /*console.log(drivers.slice(-2))
    console.log(drivers.splice(2))
    console.log(drivers.slice(2,4))*/
    const newDrivers = drivers.slice(2,4);
    return newDrivers
};
// console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
// console.log(selectingDrivers)
// console.log(selectingDrivers[0](drivers))
// console.log(selectingDrivers[1](drivers))

function createFareMultiplier (fareMultiplier) {
    return (fare) => {
        return fareMultiplier * fare
    };
};

function fareDoubler (fare) {
    return fare * 2
};

function fareTripler (fare) {
    return fare * 3
};

function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}