import s from './Form.module.css'
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';




const Form = props =>{    

    const dispatch = useDispatch();

    const  heandleSave=(e)=>{
   
        e.preventDefault();    
        const name = e.currentTarget.elements.name.value.toUpperCase();
        const number = e.currentTarget.elements.number.value;   
        
        const contact = {id:nanoid(), name: name, number:number};  
        dispatch(addContact(contact))   
      
        e.target.reset();   
    }

    return(
        <form className={s.form} onSubmit={heandleSave}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            className={s.input}
        />
        <label htmlFor="number">Number</label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id='number'
            className={s.input}
        />
        <button type='submit'>Add Contact</button>
    </form>
    )   
}

export default Form;