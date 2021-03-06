import React, { useState } from 'react';
import './webpage.css';

export default function Homepage() {

  const [form, setForm] = useState({
    Name: " ",
    Mobile: "91",
    Emails: " ",
    Password: " ",
    ConfirmPassword: " ",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }
  function handleSubmit() {
    console.log(form);
  }

  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <div className="home-icon">
                <div className="roof">
                  <div className="roof-edge"></div>
                </div>
                <div className="front"></div>
              </div>
            </li>
            <li>
              <div className="about-icon">
                <div className="head">
                  <div className="eyes"></div>
                  <div className="beard"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="work-icon">
                <div className="paper"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </div>
            </li>
            <li>
              <div className="mail-icon">
                <div className="mail-base">
                  <div className="mail-top"></div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      <div className="topbar">
        <nav className="navMenu">
          <a href="http://localhost:3000/">Login</a>
          <a href="https://www.newsonline.media/articles/happy-guru-purnima-wishes-quotes-images-messages/">About</a>
          <a href="https://www.tv9marathi.com/spiritual-adhyatmik/guru-purnima-2022-vyas-jayanti-muhurat-and-importance-au189-740457.html">Review</a>
          <a href="https://www.thefestivalwishes.com/p/write-name-on-guru-purnima-wishes-quotes-in-english">FAQs</a>
        </nav>
      </div>
        <div className="container">
          <div className="brand-title">JUST BLOGS...</div>
          <div className="inputs">
            <label>NAME</label>
            <input value={form.Name} name="Name" onChange={(e) => handleChange(e)} type="text" placeholder="example@test.com" required />
            <label>MOBILE</label>
            <input value={form.Mobile} name="Mobile" onChange={(e) => handleChange(e)} type="number" placeholder="example@test.com" required />
            <label>EMAIL</label>
            <input value={form.Emails} name="Emails" onChange={(e) => handleChange(e)} type="email" placeholder="example@test.com" required />
            <label>PASSWORD</label>
            <input value={form.Password} name="Password" onChange={(e) => handleChange(e)} type="password" placeholder="Min 6 charaters long" required />
            <label>CONFIRM-PASSWORD</label>
            <input value={form.ConfirmPassword} name="ConfirmPassword" onChange={(e) => handleChange(e)} type="password" placeholder="Min 6 charaters long" required />
            <button type="submit" onClick={handleSubmit}>SIGN-UP</button>
          </div>
          <a href="https://learnings12654600.blogspot.com/2019/12/">MADE BY JAYESH</a>
        </div>
      </div>
      <div>
        <footer className="footer">
          <div className="social">
                <a href="https://twitter.com/">Twitter</a>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.youtube.com/">YouTube</a>
          </div>
        </footer>
      </div>
      </div>
      );
}
