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
    reset: resetForm,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (showMessage) {
      resetForm();
      setSuccessForm(false);
    }
  }, [showMessage, resetForm]);

  const onSubmitHandler = (data) => {
    setFormError('');
    sendEmailFun(data);
  };

  const sendEmailFun = (data) => {
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessForm(true);
          resetForm(); 
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
            placeholder={t('contact.form-placeholder-name')}
            {...register("firstName", {
              required: t('contact.form-error-name-required'),
              minLength: { value: 3, message: t('contact.form-error-name-minLength') },
            })}
            type="text"
            name="firstName"
            id="name"
            className="input-form"
          />
          {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}

          <label className="label-form">{t('contact.form-label-email')}</label>
          <input
            {...register("email", {
              required: t('contact.form-error-email-required'),
              pattern: { value: /^\S+@\S+$/i, message: t('contact.form-error-email-pattern') },
            })}
            type="email"
            placeholder={t('contact.form-placeholder-email')}
            id="email"
            name="email"
            className="input-form"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <label className="label-form">{t('contact.form-label-number')}</label>
          <input
            placeholder={t('contact.form-placeholder-number')}
            className="input-form"
            name="phone"
            {...register("phone", {
              required: t('contact.form-error-phone-required'),
              pattern: {
                value: /^(?:\+?\d{1,4}[-\s]?)?(?:\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/,
                message: t('contact.form-error-phone-pattern'),
              },
            })}
            type="tel"
            id="phone"
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}

          <label className="label-form">{t('contact.form-label-message')}:</label>
          <textarea
            {...register("message", {
              required: t('contact.form-error-message-required'),
              minLength: { value: 5, message: t('contact.form-error-message-minLength') },
            })}
            className="input-form large-textarea"
            id="message"
            name="message"
            placeholder={t('contact.form-placeholder-message')}
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
          {successForm && <p className="form-button">{t('contact.form-message')}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
