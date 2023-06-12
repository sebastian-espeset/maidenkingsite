import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";

const userId = import.meta.env.VITE_EMAILJS;

const initialValues = {
  from_name: "",
  reply_to: "",
  message: "",
};

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true);

    emailjs
      .send("from_maidenking_site", "template_exgdupr", formData, userId)
      .then((res) => {
        console.log(res.body);
        setTimeout(() => {
          setMessage(false);
        }, 2000);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contactSection" id="contact">
      <div className="contactContents">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="formBlock">
          <div className="formWrapper">
            <form onSubmit={handleSubmit}>
              <div className="nameInputs">
                <div className="firstName">
                  <input
                    name="from_name"
                    type="text"
                    onChange={changeHandler}
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="emailAddressInputs">
                <input
                  name="reply_to"
                  type="email"
                  placeholder="email address"
                  onChange={changeHandler}
                />
              </div>
              <div className="messageInput">
                <textarea
                  name="message"
                  type="text"
                  placeholder="message"
                  onChange={changeHandler}
                />
              </div>
              <div className="submitFormButton">
                <button>Submit</button>
              </div>
              <div className="submissionmessage">
                {message && <span>Thanks. I&quot;ll be in touch. </span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
