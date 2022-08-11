import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function NewsletterSignup() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const submitForm = (values, { resetForm }) => {
    console.log(values);
    const { email } = values;

    const payload = {
      email_address: email,
    };

    axios.post('/api/newsletter', payload);
    alert('Contact details added successfully.');
    resetForm();
  };

  return (
    <div>
      {' '}
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={submitForm}
        validationSchema={SignupSchema}
      >
        {(formik) => (
          <Form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <Field
                  name="email"
                  id="cta-email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                />
                {/* <ErrorMessage
                name="email"
                className="text-black"
                component="div"
              /> */}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  disabled={!formik.isValid || !formik.dirty}
                  type="submit"
                  className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >
                  Sign up
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
              Sign up to join our newsletter and see how we build in public.
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
