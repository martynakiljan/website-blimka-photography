import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = ({ showMessage, showButton, onSubmit }) => {
         const { t } = useTranslation();
  const [formError, setFormError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: 'onChange' }) 

  useEffect(() => {
    if (showMessage) {
      reset()
    }
  }, [showMessage, reset])

  const onSubmitHandler = (data) => {
    setFormError(''); // Reset form error message on successful submit
    onSubmit(data);
  };

  const handleError = () => {
    setFormError('Wypełnij najpierw formularz');
  };

  return (
    <div>
      <h2 className="title title-small" id="contact">
            {t('contact.title')}
      </h2>

      <div className="form__wrapper" id="contact">
        <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
          <input
            placeholder="My name is"
            {...register("firstName", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters long" } })}
            type="text"
            id="firstName"
            className="input-form"
          />
          {errors.firstName && (
            <p className="form-error">
              {errors.firstName.message}
            </p>
          )}
        
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address" },
            })}
            type="email"
            placeholder="My email is"
            id="email"
            className="input-form"
          />
          {errors.email && (
            <p className="form-error">
              {errors.email.message}
            </p>
          )}
        
          <input
            placeholder="My number is"
            className="input-form"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?\d{1,4}[-\s]?(?:\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/,
                message: "Please enter a valid phone number with optional country code",
              },
            })}
            type="tel"
            id="phone"
          />
          {errors.phone && (
            <p className="form-error">
              {errors.phone.message}
            </p>
          )}
        
          <textarea
            {...register("message", { required: "Message is required", minLength: { value: 5, message: "Message must be at least 5 characters long" } })}
            className="input-form"
            id="message"
            placeholder="Ask whatever you want!"
          ></textarea>
          {errors.message && (
            <p className="form-error">
              {errors.message.message}
            </p>
          )}
          
          <button
            type="submit"
            className="header__button form__button"
            disabled={!isDirty || !isValid}
            onClick={() => { if (!isDirty || !isValid) handleError() }} // Show error message if form is not valid or dirty
          >
           {t('contact.button-text')}
          </button>

          {formError && (
            <p className="form-error">
              {formError}
            </p>
          )}
      
          {showMessage && <p className="form-button">Thank you!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
