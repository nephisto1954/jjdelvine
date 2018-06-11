import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="links">
          <a className="social" href="https://www.facebook.com/jj.delvine.9" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a className="social" href="https://www.instagram.com/jjdelvine" target="_blank"><i class="fab fa-instagram"></i></a>
          <a className="social" href="https://twitter.com/jjdelvine" target="_blank"><i class="fab fa-twitter-square"></i></a>
        </div>
          <a className="blog" href="https://www.npg.org.uk/whatson/bp-portrait-award-2018/exhibition/" target="_blank">NATIONAL PORTRAIT GALLERY</a>
        <br/>
          <a className="blog" href="http://www.oolographer.com" target="_blank" alt="oolographer.com">OOLOGRAPHER.COM</a>
        <br/>
          <a className="blog" href="http://jjdelvine.blogspot.com" target="_blank">BLOG</a>
        <div>

        </div>
      </div>
    );
  }
}
export default Contact;
