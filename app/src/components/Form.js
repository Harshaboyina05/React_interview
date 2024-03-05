import React,{useState} from 'react';

const SimpleForm = () =>{
    const [formData,setFormData]=useState({
        name:'',
        email:''
    })

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form data",formData)
        setFormData({
            name:'',
            email:''
        });
    };
    return(
        <div>
        <h2>Simple Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <label htmlFor="email">E-Mail:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>   
    );
}
export default SimpleForm;