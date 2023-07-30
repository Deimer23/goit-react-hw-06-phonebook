import Section from "./Section/Section";
import Form from './Form/Form';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
const App = ()=>{  
  
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >       
          <Section tittle="Phonebook">
            <Form/>
          </Section>
          <h5>Contacts</h5>
          <Filter />
          <ContactList />           
      </div>
    );  
};

export default App;