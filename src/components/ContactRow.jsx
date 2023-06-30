function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td className="clickable">{contact.name}</td>
      <td className="clickable">{contact.email}</td>
      <td className="clickable">{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;
