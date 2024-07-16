import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';
import './CSS files/Form.css';

const Form = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fk21w1e', 'template_4qtk0bu', e.target, 'PnB5xKsgv3WADs8FG')
            .then((result) => {
                console.log(result.text);
                setShowAlert(true); // Show custom alert on successful submission
            }, (error) => {
                console.log(error.text);
                alert('An error occurred. Please try again later.'); // Display default alert for errors
            });

        // Reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    const closeAlert = () => {
        setShowAlert(false); // Close custom alert
    };

    return (
        <>
            <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
            <div ref={ref} className="form-container bg-transparent text-purple-500">
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
                    <button type="submit" className="form-button text-purple-800">Submit</button>
                </form>
            </div>
            {showAlert && (
                <div className="custom-alert fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                    <div className="bg-purple-300 p-6 rounded-lg">
                        <p className="text-purple-800 text-center font-bold">Your message has been submitted!</p>
                        <button className="block mx-auto mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600" onClick={closeAlert}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                            <path d="M15.7494 15L9.75 9M9.75064 15L15.75 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg></button>
                    </div>
                </div>
            )}
        </>
    );
});

export default Form;


// import React, { useState, forwardRef } from 'react';
// import emailjs from 'emailjs-com';
// import './CSS files/Form.css';

// const Form = forwardRef((props, ref) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_fk21w1e', 'template_4qtk0bu', e.target, 'PnB5xKsgv3WADs8FG')
//             .then((result) => {
//                 console.log(result.text);
//                 alert('Your Form has been submitted!');
//             }, (error) => {
//                 console.log(error.text);
//             });

//         // Reset form fields after submission
//         setFormData({ name: '', email: '', message: '' });
//     };

//     return (
//         <>
//             <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
//             <div ref={ref} className="form-container bg-transparent text-purple-500">
//                 <h1 className="form-title">Contact me</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="form-button">Submit</button>
//                 </form>
//             </div>
//         </>
//     );
// });

// export default Form;
