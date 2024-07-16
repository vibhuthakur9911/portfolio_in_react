const Contact = (props) => {
  return (
    <>
      <div className="main_content">
        <div className="contact_sec">
          <div className="container">
          <div className="page_heading">
            <h5 className="stroke_text">Contact us</h5>
            <span className="tag_block">
              We will happy to connect with you! 💼
            </span>
          </div>
          </div>
          <div className="contact">
            <div className="container">
              <div className="overLay-circle overLay-circle_1"></div>
              <div className="overLay-circle overLay-circle_2"></div>
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-12">
                  <div class="form-block">
                    <div className="form-heading">
                      <h3 className=" text-white">Get in touch with us!</h3>
                      <p></p>
                    </div>
                    <form
                      id="contact-form"
                      method="POST"
                      // action="https://api.web3forms.com/submit"
                      action=""
                    >
                      <div id="key-access">
                        {/* <input
                          type="hidden"
                          name="access_key"
                          value="bcb69b45-7647-403f-a791-14f0261bb02f"
                        /> */}
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-input">
                            <input
                              type="text"
                              placeholder="Name*"
                              id="name"
                              name=""
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-input">
                            <input
                              type="email"
                              placeholder="email*"
                              id="email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-input">
                            <input
                              type="text"
                              placeholder="Phone"
                              id="phone"
                              name="phone"
                              required=""
                              title="Please enter exactly 10 digits"
                              pattern="[1-9]{1}[0-9]{9}"
                              maxlength="10"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-input">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Message..."
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-input">
                            <button type="submit" class="default-btn">
                             <span> Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
