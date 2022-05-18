import { FormSelect } from "react-bootstrap";

const Select = ({ options, placeholder, onChange, className }) => {
  return (
    <FormSelect className={className} onChange={onChange}>
      <options></options>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </FormSelect>
  );
};

export default Select;
