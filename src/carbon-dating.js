const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string")
    return false;
  else if (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= MODERN_ACTIVITY) 
      return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD) / 0.693);
  return false;
};
