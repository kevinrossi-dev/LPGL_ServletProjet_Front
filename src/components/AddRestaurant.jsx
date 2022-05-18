import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { createRestaurant } from "../services/restaurantServices";

const AddRestaurant = ({ handleAddRestaurant }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const type = e.target.type.value;
    const adresse = e.target.adresse.value;
    handleAddRestaurant({ nom, type, adresse });
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <FormLabel>Nom</FormLabel>
        <FormControl name="nom" placeholder="Nom du restaurant ..." />
      </FormGroup>
      <FormGroup>
        <FormLabel>Type</FormLabel>
        <FormControl name="type" placeholder="Type du restaurant ..." />
      </FormGroup>
      <FormGroup>
        <FormLabel>Adresse</FormLabel>
        <FormControl name="adresse" placeholder="Adresse du restaurant ..." />
      </FormGroup>
      <FormGroup>
        <Button variant="success" type="submit">
          Ajouter
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddRestaurant;
