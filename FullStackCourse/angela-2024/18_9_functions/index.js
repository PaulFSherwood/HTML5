function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleanRoom = function(room) {
        this.room = room;
        console.log("Cleaning " + this.room);
        console.log(this.name + " has completed cleaning the " + this.room);
    }
}
    

let mary = new HouseKeeper(3, "Mary", ["Living Room", "Bathroom"]);

console.log(mary.name);
mary.cleanRoom("BedRoom");


function calculateTravelTime(options) {
    let totalJumps;
    
    // If the number of jumps isn't provided, calculate it using distance and jump distance
    if (!options.numberOfJumps) {
        if (!options.distance || !options.jumpDistance) {
            console.error("Insufficient data: Need either number of jumps or both distance and jump distance.");
            return;
        }
        totalJumps = Math.ceil(options.distance / options.jumpDistance);
    } else {
        totalJumps = options.numberOfJumps;
    }

    // Calculate total time in minutes
    let totalTimeInMinutes = totalJumps * options.cooldownTime;

    // Convert total time into days, hours, minutes, and seconds
    const days = Math.floor(totalTimeInMinutes / 1440);
    const hours = Math.floor((totalTimeInMinutes % 1440) / 60);
    const minutes = totalTimeInMinutes % 60;
    const seconds = Math.floor((totalTimeInMinutes * 60) % 60);

    return { days, hours, minutes, seconds };
}

// Example usage:
let travelTime = calculateTravelTime({
    distance: 65279,          // distance in light years
    jumpDistance: 55,         // max distance per jump in light years
    cooldownTime: 5           // cooldown time in minutes per jump
});

console.log(`Travel Time: ${travelTime.days} days, ${travelTime.hours} hours, ${travelTime.minutes} minutes, ${travelTime.seconds} seconds`);
