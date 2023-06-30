import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  console.log(contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  if (contact) {
    return (
      <>
        <h1>{contact.name}</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="1">Username</th>
              <th colSpan="1">Company</th>
              <th colSpan="2">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contact.username}</td>
              <td>{contact.company.name}</td>
              <td>
                {contact.address.street}, {contact.address.suite}{" "}
                {contact.address.city} {contact.address.zipcode}
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => setSelectedContactId(null)}>Back</button>
      </>
    );
  } else {
    return <div>Loading contact details...</div>;
  }
}

export default SelectedContact;
