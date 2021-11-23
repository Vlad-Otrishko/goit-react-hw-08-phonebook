const url = 'https://connections-api.herokuapp.com/contacts';

const getToken =()=> JSON.parse(localStorage.getItem('persist:auth')).token;

const readContacts = () => {
  return fetch(url, {
    headers: {
      Authorization: [JSON.parse(getToken())]
    },
  }).then(res => res.json());
}
const addContacts = (contact) => {

    return fetch(url, {
      method: 'POST',
      headers: {
        Authorization: [JSON.parse(getToken())],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
  }

    const deleteContacts = contactId => {
        return fetch(url + '/' + contactId, {
          method: 'delete',
          headers: {
            Authorization: [JSON.parse(getToken())],
          },
        }).then(res => res.json());

    }

    // eslint-disable-next-line import/no-anonymous-default-export
    const api = { readContacts, addContacts, deleteContacts };
export default api;
    
