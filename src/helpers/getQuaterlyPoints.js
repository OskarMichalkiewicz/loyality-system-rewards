const getQuaterlyPoints = (
  monthlyPoints
) => {
  return Object.keys(monthlyPoints).reduce((acc, month) => {
    return acc + monthlyPoints[month];
  }, 0);
};

export default getQuaterlyPoints;
