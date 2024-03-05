import React,{useState} from 'react'
import Button from './component'

const FormAction=()=>{
    const [formData,setFormData]=useState({
        name:'',
        address:'',
        phone_number:''
    });
    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submitted")
        setFormData({
            name:'',
            address:'',
            phone_number:''
        });
    }
    return(
        <div>
            <Button/>
            <form onSubmit={handleSubmit}>
                <div></div>
                <label htmlFor='name'>Name</label>
                <input type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleInputChange}/>
                <div><label htmlFor='address'>Address</label>
                <input type='text'
                name='address'
                id='address'
                value={formData.address}
                onChange={handleInputChange}/></div>
                
                <div> <label htmlFor='phone_number'>Contact</label>
                <input type='integer'
                name='phone_number'
                id='phone_number'
                value={formData.phone_number}
                onChange={handleInputChange}/></div>
               
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default FormAction;