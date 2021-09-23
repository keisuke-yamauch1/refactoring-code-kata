function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return doriver.numberOfLateDelveries > 5;
}

// =====================================================================================================================

function getRating1(driver) {
  return (driver.numberOfLateDeliveries > 5) > 2 : 1;
}
