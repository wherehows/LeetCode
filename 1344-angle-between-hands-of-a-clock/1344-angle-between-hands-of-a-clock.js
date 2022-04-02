/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const hourAngleRate = 30;
  const miniuteAngleRate = 6;
  const hourAngleRateByMiniute = 1 / 2;
  let totalHourAngle = null;
  let totalMinuteAngle = null;

  if (hour < 12) {
    totalHourAngle = hour * hourAngleRate + hourAngleRateByMiniute * minutes;
    totalMinuteAngle = miniuteAngleRate * minutes;
  } else {
    totalHourAngle = hourAngleRateByMiniute * minutes;
    totalMinuteAngle = miniuteAngleRate * minutes;
  }

  console.log(totalHourAngle, totalMinuteAngle);

  return Math.min(
    Math.abs(totalHourAngle - totalMinuteAngle),
    360 - Math.abs(totalHourAngle - totalMinuteAngle)
  );
};

console.log(angleClock(3, 30));
