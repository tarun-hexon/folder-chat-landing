'use client'
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'

const Contact = () => {


const formRef = useRef();
  const [form , setForm] = useState({
    name:"",
    email:"",
    message:"",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(form.name === "" || form.email === "" || form.message === "" ){
      setLoading(false)
      return alert("Please Fill all the field")
    }
    emailjs
      .send(
        REACT_APP_EMAIL_SERVICE_ID,
        REACT_APP_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Tarun",
          from_email: form.email,
          to_email: "ttarunn0709@gmail.com",
          message: form.message,
        },
        REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };



  return (
    <div className='w-full'>
        <h1 className='w-full text-center text-3xl font-bold sm:text-4xl md:text-5xl'>Contact Us</h1>
        <form  ref={formRef} onSubmit={handleSubmit} className='flex mt-12 flex-col gap-8'>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-transparent py-4 px-6 text-white rounded-lg outline-none border font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-transparent py-4 px-6 text-white rounded-lg outline-none border font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-transparent py-4 px-6 text-white rounded-lg outline-none border font-medium'
            />
          </label>
          <Button
          variant={'outline'}
            type='submit'
            className='bg-transparent py-3 px-8 rounded-xl border w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
    </div>
  )
}

export default Contact