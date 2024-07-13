import React, { useState } from 'react';
import './CSS files/Form.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        console.log('Form data submitted:', formData);
        alert('Form submitted!');
    };

    return (<>
        <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto mb-4'></div>
        <div className="form-container bg-transparent text-purple-500">
           
            <h1 className="form-title">Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
        </>
    );
};

export default ContactForm;
