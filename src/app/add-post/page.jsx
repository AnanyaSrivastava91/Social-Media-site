'use client';
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const AddPost = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [communityList, setCommunityList] = useState([]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Initial values for the form
  const initialValues = {
    userId: '',
    title: '',
    community: '',
    content: '',
    file: null,
  };

  const fetchCommunties = async () => {
    const res = await axios.get('http://localhost:5000/community/getall');
    console.log(res.data);
    setCommunityList(res.data);
  };

  useEffect(() => {
    fetchCommunties();
  }, []);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    userId: Yup.string().required('User ID is required'),
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    file: Yup.mixed().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMessage('');
    setError('');

    const formData = new FormData();
    formData.append('userId', values.userId);
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('community', values.community);
    if (values.file) {
      formData.append('file', values.file);
    }

    try {
      const response = await fetch('http://localhost:5000/post/add', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      await response.json();
      setMessage('Post created successfully!');
      toast.success('Post created successfully!');  // Display success toast

      // Clear the form fields
      resetForm();
    } catch (err) {
      console.error(err);
      setError('Error creating post. Please try again.');
      toast.error('Error creating post. Please try again.');  // Display error toast
    } finally {
      setSubmitting(false);
    }
  };

  const uploadFile = (e, setFieldValue) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mycloud1');
    fd.append('cloud_name', 'drluzvt3t');
    axios
      .post('https://api.cloudinary.com/v1_1/drluzvt3t/image/upload', fd)
      .then((result) => {
        toast.success('File uploaded successfully!'); // Display success toast
        console.log(result.data);
        setFieldValue('file', result.data.url);
      })
      .catch((err) => {
        console.log(err);
        toast.error('File upload failed!'); // Display error toast
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#152331] to-[#000000] min-h-screen relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: '#ffffff' },
          },
        }}
      />
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl text-white font-bold mb-4 text-center">
          Add New Post
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-4 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
              <div>
                <label htmlFor="userId" className="block text-lg">User ID</label>
                <Field
                  type="text"
                  name="userId"
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="userId" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="title" className="block text-lg">Title</label>
                <Field
                  type="text"
                  name="title"
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="title" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="community" className="block text-lg">Select Community</label>
                <Field
                  as="select"
                  name="community"
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={values.community}
                  onChange={handleChange}
                >
                  <option value="">Select Community</option>
                  {communityList.map((community, index) => (
                    <option key={index} value={community.name}>
                      {community.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="community" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="content" className="block text-lg">Content</label>
                <Field
                  as="textarea"
                  name="content"
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
                <ErrorMessage name="content" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="file" className="block text-lg">Upload File</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => uploadFile(e, setFieldValue)}
                />
                <ErrorMessage name="file" component="div" className="text-red-500" />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Post'}
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer /> {/* This will display toast messages */}
        {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default AddPost;
