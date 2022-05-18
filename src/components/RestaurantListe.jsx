import React, { useEffect, useState } from "react";
import { Card, Row, FormControl } from "react-bootstrap";
import RestaurantPlatListe from "./RestaurantPlatListe";
import Select from "./Select";
import { faAdd, faSubtract, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddPlat from "./AddPlat";

const RestaurantListe = ({
  restaurants,
  handleDeleteRestaurant,
  handleAddPlatRestaurant,
  handleDeletePlatRestaurant,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [addingPlat, setAddingPlat] = useState({ restaurantId: 0 });
  const [typeFilter, setTypeFilter] = useState("");

  let data = restaurants;

  data = restaurants.filter(
    (r) =>
      r.nom.toLowerCase().includes(searchQuery.toLowerCase()) &&
      r.type.includes(typeFilter)
  );

  const getUniqueTypes = () => {
    let types = [];

    types = [...new Set(restaurants.map((r) => r.type))];
    types.splice(0, 0, "");

    return types;
  };
  return (
    <>
      <Row>
        <div className="filters">
          <FormControl
            className="searchBar"
            value={searchQuery}
            placeholder="Recherche par nom ... "
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <Select
            className="selectType"
            placeholder="Rechercher par type ..."
            options={getUniqueTypes()}
            onChange={(e) => setTypeFilter(e.target.value)}
          />
        </div>
      </Row>
      <Row>
        {data.map((restaurant) => {
          return (
            <div className="col-3" key={restaurant.restaurantId}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {restaurant.nom}{" "}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        handleDeleteRestaurant(restaurant.restaurantId);
                      }}
                    />
                  </Card.Title>
                  <Card.Subtitle>{restaurant.type}</Card.Subtitle>
                  <Card.Text>
                    <RestaurantPlatListe
                      plats={restaurant.platsList}
                      handleDeletePlatRestaurant={handleDeletePlatRestaurant}
                      restaurantId={restaurant.restaurantId}
                    />
                    {addingPlat.restaurantId !== restaurant.restaurantId && (
                      <FontAwesomeIcon
                        icon={faAdd}
                        onClick={() => {
                          setAddingPlat({
                            restaurantId: restaurant.restaurantId,
                          });
                        }}
                      />
                    )}
                    {addingPlat.restaurantId === restaurant.restaurantId && (
                      <FontAwesomeIcon
                        icon={faSubtract}
                        onClick={() => {
                          setAddingPlat({
                            restaurantId: 0,
                          });
                        }}
                      />
                    )}
                    {addingPlat.restaurantId === restaurant.restaurantId && (
                      <AddPlat
                        handleAddPlatRestaurant={handleAddPlatRestaurant}
                        restaurantId={restaurant.restaurantId}
                      />
                    )}
                  </Card.Text>
                  <Card.Footer>{restaurant.adresse}</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
    </>
  );
};

export default RestaurantListe;
