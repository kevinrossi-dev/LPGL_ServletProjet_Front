import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

const AddPlat = ({ handleAddPlatRestaurant, restaurantId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const type = e.target.type.value;
    const prix = e.target.prix.value;
    handleAddPlatRestaurant(restaurantId, { nom, type, prix });
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <FormLabel>Nom</FormLabel>
        <FormControl name="nom" placeholder="Nom du plat ..." />
      </FormGroup>
      <FormGroup>
        <FormLabel>Type</FormLabel>
        <FormControl name="type" placeholder="Type du plat ..." />
      </FormGroup>
      <FormGroup>
        <FormLabel>Prix</FormLabel>
        <FormControl type="numer" name="prix" placeholder="Prix du plat ..." />
      </FormGroup>
      <FormGroup>
        <Button variant="success" type="submit">
          Ajouter
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddPlat;
