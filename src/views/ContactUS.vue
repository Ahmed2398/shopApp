<template>
 <div class="content"> 
    <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
        <div class="col-md-12">
          <div class="form h-100">
            <h3>Send us a message</h3>
            <form class="mb-5" @submit.prevent="submitForm">
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Name *</label>
                  <input type="text" class="form-control" name="name" v-model="name" placeholder="Your name" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Email *</label>
                  <input type="text" class="form-control" name="email" v-model="email"  placeholder="Your email" required>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Phone</label>
                  <input type="number" class="form-control" name="phone" v-model="phone"  placeholder="Phone #" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Company</label>
                  <input type="text" class="form-control" name="company" v-model="company"  placeholder="Company  name" required>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-5">
                  <label for="message" class="col-form-label">Message *</label>
                  <textarea class="form-control" name="message" v-model="message" cols="30" rows="4"  placeholder="Write your message" required></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  
                  <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4">
                  <span class="submitting"></span>
                  <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
       
      </div>
    </div>

  </div>
  </template>

  <script>
  const WEB3FORMS_ACCESS_KEY = "dfdad7b6-e059-43ee-bccf-a403160a1045";

  export default {
    data() {
      return {
        name: "",
          email: "",
          phone: '',
          Company: '',
        message: "",
      };
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      },
    },
  };
  </script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  line-height: 1.9;
  color: #8c8c8c;
  background-color: #efefef;
  position: relative; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Roboto", sans-serif;
  color: #000; }
h3{
    font-weight: 700;
    font-size: 36px;
}
a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
  a, a:hover {
    text-decoration: none !important; }

.text-black {
  color: #000; }

.content {
  padding: 7rem 0; }

.heading {
  font-size: 2.5rem;
  font-weight: 900; }

.form-control {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  background: none; }
  .form-control:active, .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }

.col-form-label {
  color: #000;
  font-size: 13px; }

.btn, .form-control, .custom-select {
  height: 45px; }

.custom-select:active, .custom-select:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #000; }

.btn {
  border: none;
  border-radius: 0;
  font-size: 12px;
  letter-spacing: .2rem;
  text-transform: uppercase; }
  .btn.btn-primary {
    background: #FF6000;
    color: #fff;
    padding: 15px 20px; }
  .btn:hover {
    color: #fff; }
  .btn:active, .btn:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none; }

.contact-wrap .col-form-label {
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-top: 30px;
    text-transform: capitalize;
    color: #999;
   }

.contact-wrap .form, .contact-wrap .contact-info {
  padding: 40px; }

.contact-wrap .contact-info {
  color: rgba(255, 255, 255, 0.5); }
  .contact-wrap .contact-info ul li {
    margin-bottom: 15px;
    color: rgba(255, 255, 255, 0.5); }
    .contact-wrap .contact-info ul li .wrap-icon {
      font-size: 20px;
      color: #fff;
      margin-top: 5px; }
.contact-info{
    background-image: url('@/assets/map.jpg');
    background-position: center center;
    background-size: cover;
}
.contact-wrap .form {
  background: #fff; }
  .contact-wrap .form h3 {
    color: #FF6000;
    font-size: 35px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: capitalize;
 }

.contact-wrap .contact-info {
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; }
  .contact-wrap .contact-info a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; }
  @media (max-width: 1199.98px) {
    .contact-wrap .contact-info {
      height: 400px !important; } }
  .contact-wrap .contact-info h3 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 30px; }

label.error {
  font-size: 12px;
  color: red; }

#message {
  resize: vertical; }

#form-message-warning, #form-message-success {
  display: none; }

#form-message-warning {
  color: #B90B0B; }

#form-message-success {
  color: #55A44E;
  font-size: 18px;
  font-weight: bold; }

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-weight: bold;
  font-size: 12px;
  color: #000; }
</style>