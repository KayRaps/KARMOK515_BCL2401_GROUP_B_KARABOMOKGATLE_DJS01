/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
<<<<<<< HEAD
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
=======
const velocity = { value: 10000, unit: 'km/h' }; // velocity (km/h)
const acceleration = { value: 3, unit: 'm/s^2' }; // acceleration (m/s^2)
const duration = { value: 3600, unit: 's' }; // seconds (1 hour)
const initialDistance = { value: 0, unit: 'km' }; // distance (km)
const fuelAmount = { value: 5000, unit: 'kg' }; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: 'kg/s' };// fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleration
const calcNewVelocity = (acceleration, velocity, duration) => {
  // Validate input parameters
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof duration !== 'number') {
    throw new Error('Invalid input parameter for calcNewVelocity function');
  }
  
// Calculate new velocity based on acceleration
const newVelocity = velocity + (acceleration * duration);

return newVelocity;
}

// Validating input pararmeters
if (velocity.unit !== 'km/h' || acceleration.unit !== 'm/s^2' || duration.unit !== 's' ||
  initialDistance.unit !== 'km' || fuelAmount.unit !== 'kg' || fuelBurnRate.unit !== 'kg/s') {
    throw new Error ('Invalid unit of measurement for one or more input parameters');
  }

  // Converting units to comman unit (m/s, m, kg)
  const velocityInMeterPerSecond = velocity.value / 3.6;
  const initialDistanceInKilometers = initialDistance.value * 1000;

//calcultes new distance
const velocityInMetersPerSecond = (velocity.value * 1000) / 3600; // converting km/h to m/s
const newDistanceInMeters = initialDistance.value + (velocityInMetersPerSecond * duration.value);
const newDistanceInKilometers = newDistanceInMeters / 1000;

//calculates remaining fuel
const reamainingFuelInKilograms = fuelAmount.value - (fuelBurnRate.value * duration.value);

//calculates new velocity based on acceleration
const newVelocityInMetersPerSecond = calcNewVelocity(acceleration.value, velocityInMetersPerSecond, duration.value);
const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6;


// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocity, acceleration, duration) => { 
  return velocity + (acceleration*duration)
}

console.log(`Corrected New Velocity: ${newVelocityInKilometersPerHour} km/h`);
console.log(`Corrected New Distance: ${newDistanceInKilometers} km`);
console.log(`Corrected Remaining Fuel: ${reamainingFuelInKilograms} kg`);
>>>>>>> 86c2470e8fccb23080f3f644fe202b9497b1c04f






