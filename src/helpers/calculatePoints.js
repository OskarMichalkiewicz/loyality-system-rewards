const calculatePoints = (total) => {
  const intTotal = Math.trunc(total);
  if (intTotal > 100) {
    const over100Points = (intTotal-100) * 2;
    const between50And100Points = 50 * 1;

    return over100Points + between50And100Points;
  } else if (intTotal > 50) {
    return intTotal - 50;
  } else {
    return 0;
  }
};
export default calculatePoints;

