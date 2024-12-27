import React from 'react'
import './form.css'
import { Controller, useForm } from 'react-hook-form'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button, Container, TextField, Typography } from '@mui/material';

function Form() {
    let {handleSubmit, control, formState:{errors} }= useForm()
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container>
            <div className='text-warning bg-dark w-50 mx-auto mt-5 mb-3  py-2'>
                <Typography variant='h4' className='text-center'>
                    Registration Form
                </Typography>
            </div>
            <div className='text-center card bg-body-tertiary p-5 mx-auto w-50'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                    name="firstName"
                    control={control}
                    rules={{required : "This feild is required"}}
                    render={({field})=>{
                        return <TextField
                        {...field}
                        variant="outlined"
                        label="First Name"
                        color="success"
                        fullWidth
                        margin='normal'
                        helperText={errors.firstName ? errors.firstName.message :""}
                        error ={errors.firstName}
                        />
                    }}
                    />
                    <Controller
                    name="lastName"
                    control={control}
                    rules={{required : "This feild is required"}}
                    render={({field})=>{
                        return <TextField
                        {...field}
                        variant="outlined"
                        label="Last Name"
                        color="success"
                        fullWidth
                        margin='normal'
                        helperText={errors.lastName ? errors.lastName.message :""}
                        error ={errors.lastName}
                        />
                    }}
                    />
                    <Controller
                    name="surName"
                    control={control}
                    rules={{required : "This feild is required"}}
                    render={({field})=>{
                        return <TextField
                        {...field}
                        variant="outlined"
                        label=" Surname"
                        color="success"
                        fullWidth
                        margin='normal'
                        helperText={errors.surName ? errors.surName.message :""}
                        error ={errors.surName}
                        />
                    }}
                    />
                    <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{required : "This feild is required"}}
                    render={({field})=>{
                        return <TextField
                        {...field}
                        variant="outlined"
                        label="Phone Number"
                        color="success"
                        fullWidth
                        margin='normal'
                        type='number'
                        helperText={errors.phoneNumber ? errors.phoneNumber.message :""}
                        error ={errors.phoneNumber}
                        />
                    }}
                    />
                    <Controller
                    name="Password"
                    control={control}
                    rules={{required : "This feild is required"}}
                    render={({field})=>{
                        return <TextField
                        {...field}
                        variant="outlined"
                        label="Password"
                        color="success"
                        fullWidth
                        margin='normal'
                        type='password'
                        helperText={errors.Password ? errors.Password.message :""}
                        error ={errors.Password}
                        />
                    }}
                    />
                    <Button type='submit' variant="contained" color="success">Register</Button>
                </form>
            </div>
        </Container>
    )
}

export default Form
