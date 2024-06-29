import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactList}>
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
