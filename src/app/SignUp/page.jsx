'use client'
import React from 'react'
import { useFormik } from 'formik'

const Signup = () => {

    const signupForm = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
            confirmpassord:''
        },
    })
  return (
    <div>
        <h1 className='text-2xl font-bold  my-10 text-center'>We welcome you to our community</h1>
        <h2 className='text-xl font-bold my-10 text-center'>Fill up the form, and you are ready to go</h2>
        <div className='max-w-lg mx-auto rounded-lg shadow-lg mt-10 p-10'>
            <form onSubmit={signupForm.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' onChange={signupForm.handleChange} value={signupForm.value.name} className='w-60 p-2 border rounded-lg my-2 bg-gray-100'/>
                {
                    (signupForm.touched.name && signupForm.errors.name)&&(<p className='text-red-500 mb-5 text-sm'>{signupForm.errors.name}</p>

                    )
                }
                <label htmlFor="email">Email Address</label>
          <input type="email" id='email'
            onChange={signupForm.handleChange}
            value={signupForm.values.email}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.email && signupForm.errors.email) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.email}</p>
            )
          }

          <label htmlFor="password">Password</label>
          <input type="password" id='password'
            onChange={signupForm.handleChange}
            value={signupForm.values.password}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.password && signupForm.errors.password) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.password}</p>
            )
          }

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id='confirmPassword'
            onChange={signupForm.handleChange}
            value={signupForm.values.confirmPassword}
            className='w-full p-2 border rounded-lg my-2 bg-gray-100'
          />
          {
            (signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.confirmPassword}</p>
            )
          }
          <button disabled={signupForm.isSubmitting}
          type='submit'
          className='bg-black mt-6 px-3 py-2 round text-white font-bold w-full disabled:bg-gray-600'>I'm in
          </button>    
            </form>
        </div>

    </div>
  )
}

export default Signup