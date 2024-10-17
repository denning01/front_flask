// RegistrationForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Welcome to your travel experience journal!');
        resetForm(); // Reset the form after successful registration
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error failed:', error);
    }

    setSubmitting(false);
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
