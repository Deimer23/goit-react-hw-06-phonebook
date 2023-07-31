import s from './ContactList..module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact, addStorage } from 'redux/contactSlice';
import { useEffect } from 'react';

const ContactList = (props)=>{     

    const dispatch = useDispatch();
    const contacts = useSelector(state=>state.contact.contacts);  
    const filter = useSelector(state=>state.filter.filter)

    const  handleDeleteContact = (e)=>{
        e.preventDefault();
        const id = e.target.dataset.id;
        console.log(id);
        dispatch(removeContact(id));        
    }

    useEffect(()=>{
        const listContact = JSON.parse(localStorage.getItem('contact'));
        if(listContact !== null){          
            dispatch(addStorage(listContact));
        }
      },[dispatch]);

    useEffect(()=>{
        localStorage.setItem('contact', JSON.stringify(contacts));
        if(contacts.length === 0){
          localStorage.removeItem('contact')
        }
    },[contacts])

     
    return(
        <ul>
            {props.filter === '' ?(                   
                    contacts.map(contact=>(
                        <li key={contact.id}>{contact.name} {contact.number} <button className={s.button} data-id={contact.id} onClick={handleDeleteContact}>Delete</button></li>                    
                    ))                  
                ):(
                    contacts.filter(contact=>(contact.name.includes(filter.toUpperCase()))).map(contact=>(
                        <li key={contact.id}>{contact.name} {contact.number} <button data-id={contact.id} onClick={handleDeleteContact}>Delete</button></li>
                    ))
                )
            }
                     
        </ul>
    )
}
export default ContactList;