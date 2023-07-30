import s from './Filter.module.css'

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';


const Filter = props=>{
    
    const dispatch = useDispatch();

    const heandleSevFilter=(e)=>{
        e.preventDefault();    
        const search = e.target.value;
        dispatch(filterContact(search));
             
    } 

    return(
        <div>
            <label>Find contact by name</label>
            <input className={s.input} type="text" name="filter" onChange={heandleSevFilter}/>
        </div>
    )
}

export default Filter;