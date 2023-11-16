// import { useEffect, useState } from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactservice from "../../services/ContactServices";

// import contactservice from "../../../services/ContactServices";
// import { Navigate, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [replay_id, setReplayId] = useState(0);
  const [status, setStatus] = useState(1);

  async function contactAdd(event) {
      event.preventDefault();
      var contact = new FormData();
      contact.append("name", name);
      contact.append("email", email);
      contact.append("phone", phone);
      contact.append("title", title);
      contact.append("content", content);
      contact.append("replay_id", replay_id);
      contact.append("status", status);
      try {
          await contactservice.themdl(contact)
              .then(function (res) {
                  alert(res.data.message);
                  navigate("/lien-he", { replace: true });
              });
      } catch (error) {
          console.error(error);
      }

  }  return (
    <div className="contact">
      <div className="text-center">
        <h1>Liên hệ</h1></div>
      <div class="row">
        <div class="col-md-2 w-50">
          <div class="mx-2 mb-4">
            <div class="card-body">
              <div class="span3">
                <h4>TuclieShop</h4>
                <p>TuclieShop 50/66a,Đ.79, Phường Phước Long B,Quận 9, TPHCM</p>
                <p>Phone: 0836706514</p>
                <p>Fax: 109876543212</p>
                <p>Email: <a href="https://www.free-css.com/free-css-templates">tuclie@gmail.com</a></p>
                <p>website: <a href="https://www.free-css.com/free-css-templates">www.tuclie.com</a></p>

                <form onSubmit={contactAdd} method="" >
                  <h4>Liên hệ và góp ý cho TuclieShop</h4>
                  <div class="wrap-input1 validate-input my-2" data-validate="Name is required">
                    <input class="input1 w-100" type="text" placeholder ="Name" name="name"value={name} onChange={(e) => setName(e.target.value)} className="form-control"  />
                  </div>
                  <div class="wrap-input1 validate-input my-2" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input1 w-100" type="email" placeholder ="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                  </div>
                  <div class="wrap-input1 validate-input my-2" data-validate="Phone is required">
                    <input class="input1 w-100" type="text" placeholder ="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                  </div>
                  <div class="wrap-input1 validate-input my-2" data-validate="Subject is required">
                    <input class="input1 w-100" type="text"placeholder ="Tiêu đề" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                  </div>
                  <div class="wrap-input1 validate-input my-2" data-validate="Message is required">
                    <textarea class="input1 w-100" name="content" placeholder ="Nội dung" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>
                  </div>
                  <div class="container-contact1-form-btn">
                    <button type="submit" class="btn btn-primary">Gửi</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 w-50">
          <div class="mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.705710763659!2d106.77062887390733!3d10.833818389318465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527aa1390306d%3A0x6f429709858918d6!2zNTAgxJAuIDc5LCBQaMaw4bubYyBMb25nIEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1687203958726!5m2!1svi!2s"
              width="600" height="500" style={{ marginRight: 'em' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
            }
export default Contact;


