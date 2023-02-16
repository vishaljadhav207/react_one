import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>contact us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="your name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="your email" />
          </div>

          <div>
            <label>Massege</label>
            <input type="text" required placeholder="your msg" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
