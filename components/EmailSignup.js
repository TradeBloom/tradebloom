import React from 'react';

const EmailSignup = () => {
  return (
    <section>
      <h2>Sign Up for Updates</h2>
      <form action="https://sheetdb.io/api/v1/33cvpka7flq3t" method="post">
        <input type="email" name="data[email]" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default EmailSignup;