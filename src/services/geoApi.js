import mockData from "../data/mockData.json";

export const fetchGeoData = async () => {
  // simulate API delay
  await new Promise((res) => setTimeout(res, 500));

  return mockData.map((item, index) => ({
    id: index + 1,
    ...item,
  }));
};
