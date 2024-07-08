import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import RotateLoader from 'react-spinners/ClipLoader';

const Contact = ({ showMessage }) => {
  const form = useRef();
  const { t } = useTranslation();
  const [formError, setFormError] = useState('');
  const [successForm, setSuccessForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (showMessage) {
      reset();
    }
  }, [showMessage, reset]);

  const onSubmitHandler = (data) => {
    setFormError('');
    sendEmailFun(data);
  };

  const sendEmailFun = (data) => {
    setLoading(true);
    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessForm(true);
          setTimeout(() => {
            setSuccessForm(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessForm(false);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const override = {
    width: '20px',
    height: '20px',
  };

  return (
    <div>
      <h2 className="title title-small" id="contact">
        {t('contact.title')}
      </h2>
      <div className="form__wrapper" id="contact">
        <form ref={form} onSubmit={handleSubmit(onSubmitHandler)} className="form">
          <label className="label-form">{t('contact.form-label-name')}</label>
          <input
            placeholder="Alice"
            {...register("firstName", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters long" },
            })}
            type="text"
            name="firstName"
            id="firstName"
            className="input-form"
          />
          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}

          <label className="label-form">{t('contact.form-label-email')}</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address" },
            })}
            type="email"
            placeholder="alice@gmail.com"
            id="email"
            name="email"
            className="input-form"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <label className="label-form">{t('contact.form-label-number')}</label>
          <input
            placeholder="+48 676 234 234"
            className="input-form"
            name="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^(?:\+?\d{1,4}[-\s]?)?(?:\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/,
                message: "Please enter a valid phone number with optional country code",
              },
            })}
            type="tel"
            id="phone"
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}

          <label className="label-form">{t('contact.form-label-message')}:</label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: { value: 5, message: "Message must be at least 5 characters long" },
            })}
            className="input-form"
            id="message"
            name="message"
            placeholder="Hello Ola, I want you to take beautiful photos of me!"
          ></textarea>
          {errors.message && <p className="form-error">{errors.message.message}</p>}

          {loading ? (
            <RotateLoader cssOverride={override} loading={loading} color='#5a4b2d' className='spinner' />
          ) : (
            <button type="submit" className="header__button form__button">
              {t('contact.button-text')}
            </button>
          )}
          {formError && <p className="form-error">{formError}</p>}
          {successForm && <p className="form-button">{t('form.message')}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
