const Contact = () => {
  return (
    <div>
      <h2 className="title title-small" id="contact">
        Now that you've gotten to know me and my work a little bit, help me get
        to know you!
      </h2>

      <div className="form__wrapper" id="contact">
        <form className="form">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="My name is"
            name="fname"
            id="name_input"
            className="input-form"
          ></input>

          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="My email is"
            name="email"
            id="email_input"
            className="input-form"
          ></input>

          <label htmlFor="number"></label>
          <input
            type="text"
            placeholder="My number is"
            name="number"
            id="number_input"
            className="input-form"
          ></input>

          <label htmlFor="message"></label>
          <textarea
            name="message"
            className="input-form"
            id="message_input"
            placeholder="Ask whatever you want!"
          ></textarea>

          <button className="header__button form__button">Contact me!</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
