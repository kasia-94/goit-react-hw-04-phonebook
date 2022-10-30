import PropTypes from 'prop-types';
import { Button, Item } from './ContactItem.styled';
export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
