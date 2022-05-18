import httpServices, { apiUrl } from "./httpServices";

const apiEndPoint = apiUrl + "/restaurants";
const platEndPoint = apiUrl + "/plats";
export const findAllRestaurants = () => {
  return httpServices.get(apiEndPoint);
};

export const createRestaurant = (restaurant) => {
  return httpServices.post(apiEndPoint, restaurant);
};

export const deleteRestaurant = (restaurantId) => {
  return httpServices.delete(apiEndPoint + "/" + restaurantId);
};

export const createPlatRestaurant = async (restaurantId, plat) => {
  const { data } = await httpServices.post(platEndPoint, plat);
  return await httpServices.post(
    apiEndPoint + "/" + restaurantId + "/plats",
    data
  );
};
export const deletePlatRestaurant = async (restaurantId, plat) => {
  return await httpServices.delete(
    apiEndPoint + "/" + restaurantId + "/plats/" + plat.platId
  );
};
