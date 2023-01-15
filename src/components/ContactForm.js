import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import {TextField, Button, Grid, Paper} from "@mui/material";



const ContactForm = () => {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [successText, setSuccessText] = useState('');

    const textStyle = { margin: '10px 0' };
    const buttonStyle = { margin: '10px 0' };

    let service_id = process.env.REACT_APP_SERVICE_ID;
    let template_id = process.env.REACT_APP_TEMPLATE_ID;
    let public_key = process.env.REACT_APP_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        emailjs.sendForm(service_id, template_id, e.target, public_key)
            .then((result) => {
                console.log(result.text);
                setSuccessText('Message sent successfully!');
            }
            , (error) => {
                console.log(error.text);
                setSuccessText('Message failed to send.');
            }
        );
    }

    return (
        <Grid>
            <Paper elevation={10} style={{padding: '20px', width: '500px', margin: '20px auto'}}>
                <h1>Contact Form</h1>
                <Grid container direction='column' >
                    <form ref={form} onSubmit={handleSubmit}>
                        <TextField
                            label='Name'
                            placeholder='Enter Name'
                            fullWidth
                            required
                            name={'user_name'}
                            value={name}
                            style={textStyle}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label='Phone Number'
                            placeholder='Enter Phone Number'
                            fullWidth
                            required
                            name={'user_phone'}
                            value={phone}
                            style={textStyle}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            label='Email'
                            placeholder='Enter Email'
                            fullWidth
                            required
                            name={'user_email'}
                            value={email}
                            style={textStyle}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label='Message'
                            placeholder='Enter Message'
                            fullWidth
                            required
                            name={'message'}
                            value={message}
                            style={textStyle}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            type='submit'
                            color='primary'
                            variant='contained'
                            fullWidth
                            style={buttonStyle}
                        >Request Quote</Button>
                    </form>
                    <p>{successText}</p>
                </Grid>
            </Paper>
        </Grid>
    );
};
export default ContactForm;
