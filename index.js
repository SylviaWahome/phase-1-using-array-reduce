const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
var totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

// Exporting for test visibility (may be optional in some setups)
module.exports = {
  batteryBatches,
  totalBatteries
};
