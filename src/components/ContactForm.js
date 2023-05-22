import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvonyybk");
  if (state.succeeded) {
    return (
      <div className="contactBox succeedForm">
        <span class="material-icons-outlined">task_alt</span>
        <p>Thank you for your message!</p>
        <p>I'll reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactBox">
        <h5>Send me a message</h5>
        <div className="row">
          <div className="col-6">
            <div className="contactFields">
              <label htmlFor="company">Name</label>
              <input id="name" type="name" name="name" />
              <ValidationError
                prefix="Name"
                field="Name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="contactFields">
              <label htmlFor="company">Company</label>
              <input id="company" type="company" name="company" />
              <ValidationError
                prefix="Company"
                field="Company"
                errors={state.errors}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mainMessage">
          <textarea
            id="message"
            name="message"
            placeholder="Add your message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          className="contactButton"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
