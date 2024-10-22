// LoginForm.js
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUsersStore } from '../stores/usersStore';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Import the CSS module

// Validation Schema for Login Form
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ user, assignUser }) => {
  const navigate = useNavigate();
  
  // Redirect to home if user is already logged in
  if (user.access_token) {
    navigate('/home');
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('https://demo-flask-app-1kry.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(response.message);
        assignUser(data);
        localStorage.setItem('token', data.access_token);
        navigate('/home');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
