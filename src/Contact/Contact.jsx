import "./contact.scss";

export default function Contact() {
  return (
    <div className="contactSection">
      <div className="contactContents">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="formBlock">
          <div className="formWrapper">
            <div className="nameInputs">
              <div className="firstName">
                <input type="text" placeholder="First name" />
              </div>
              <div className="lastName">
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="emailAddressInputs">
              <input type="text" placeholder="email address" />
            </div>
            <div className="messageInput">
              <input type="text" placeholder="message" />
            </div>
            <div className="submitFormButton">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
