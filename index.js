function findMatching(drivers, name) {
    return drivers.filter(driver => {
        if(driver.toLowerCase() === name.toLowerCase()) {
            return driver;
        }
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        if(driver.name === name) {
            return driver.name;
        }
    })
}