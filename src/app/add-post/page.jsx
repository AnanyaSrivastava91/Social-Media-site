'use client';
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPost = () => {
  const [communityList, setCommunityList] = useState([]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const initialValues = {
    userId: '',
    title: '',
    community: '',
    content: '',
    file: null,
  };

  const fetchCommunities = async () => {
    const res = await axios.get('http://localhost:5000/community/getall');
    setCommunityList(res.data);
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

  const validationSchema = Yup.object({
    userId: Yup.string().required('User ID is required'),
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    file: Yup.mixed().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('userId', values.userId);
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('community', values.community);
    if (values.file) {
      formData.append('file', values.file);
    }

    try {
      await axios.post('http://localhost:5000/post/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Post created successfully!');
      resetForm();
    } catch (err) {
      toast.error('Error creating post. Please try again.');
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
        toast.success('File uploaded successfully!');
        setFieldValue('file', result.data.url);
      })
      .catch(() => {
        toast.error('File upload failed!');
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddPost;
