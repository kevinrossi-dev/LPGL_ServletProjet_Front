import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddRestaurant from "./components/AddRestaurant";
import RestaurantListe from "./components/RestaurantListe";
import {
  createPlatRestaurant,
  createRestaurant,
  deletePlatRestaurant,
  deleteRestaurant,
  findAllRestaurants,
} from "./services/restaurantServices";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [adding, setAdding] = useState(false);

  const handleAddRestaurant = async (restaurant) => {
    const { data: result } = await createRestaurant(restaurant);
    const data = [...restaurants];
    data.push(result);
    setRestaurants(data);
  };
  const handleDeleteRestaurant = async (restaurantId) => {
    try {
      await deleteRestaurant(restaurantId);
      let data = [...restaurants];
      data = data.filter((r) => r.restaurantId !== restaurantId);
      setRestaurants(data);
    } catch (ex) {}
  };

  const handleAddPlatRestaurant = async (restaurantId, plat) => {
    try {
      const { data: result } = await createPlatRestaurant(restaurantId, plat);

      const updated = { ...result };
      let data = [...restaurants];
      data = data.map((r) => {
        if (r.restaurantId === restaurantId) r.platsList = updated.platsList;
        return r;
      });
      setRestaurants(data);
    } catch (ex) {}
  };
  const handleDeletePlatRestaurant = async (restaurantId, plat) => {
    try {
      const { data: result } = await deletePlatRestaurant(restaurantId, plat);

      const updated = { ...result };
      let data = [...restaurants];
      data = data.map((r) => {
        if (r.restaurantId === restaurantId) r.platsList = updated.platsList;
        return r;
      });
      setRestaurants(data);
    } catch (ex) {}
  };
  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await findAllRestaurants();
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);
  return (
    <div className="App">
      <header></header>
      <main className="container">
        <RestaurantListe
          restaurants={restaurants}
          handleDeleteRestaurant={handleDeleteRestaurant}
          handleAddPlatRestaurant={handleAddPlatRestaurant}
          handleDeletePlatRestaurant={handleDeletePlatRestaurant}
        />
        <Button
          onClick={() => {
            setAdding(true);
          }}
        >
          Ajouter un restaurant
        </Button>
        {adding && (
          <AddRestaurant
            setAdding={setAdding}
            handleAddRestaurant={handleAddRestaurant}
          />
        )}
      </main>
    </div>
  );
}

export default App;
