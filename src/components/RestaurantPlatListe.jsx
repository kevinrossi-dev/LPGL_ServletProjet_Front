import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const RestaurantPlatListe = ({
  plats,
  handleDeletePlatRestaurant,
  restaurantId,
}) => {
  console.log(plats);
  return (
    <div>
      <ListGroup>
        {plats.map((p) => {
          return (
            <ListGroupItem>
              {`${p.type} - ${p.nom} : ${p.prix}€ `}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  handleDeletePlatRestaurant(restaurantId, p);
                }}
              />
              <FontAwesomeIcon icon={faPenToSquare} />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default RestaurantPlatListe;
