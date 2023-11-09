import React from "react";
import './Login.css'
import {useEffect} from "react";
import { useFormInputValidation } from "react-form-input-validation";

const ValidationForm2 = () => {
    const [fields, errors, form] = useFormInputValidation({
      email_address: "",
      password: "",
    }, {
      email_address: "required|email",
      password: "required"
    });
      useEffect(() => {
      if (form.isValidForm) {
      }
    }, )
      return <div style={{maxWidth: "600px", margin: "0 auto"}}>
    <form
      className="myForm text-center  justify-content-center"
      noValidate
      autoComplete="off"
      onSubmit={form.handleSubmit}
    >
      <h2 className="p-5">Login</h2>
      <div className="m-0 d-flex justify-content-center">
      <a href="https://www.facebook.com" className=" d-flex p-0  row btn facebookBtn w-75"> <i className
="fa-brands facebookIcon col-4 fa-facebook"></i>
      <p className="col-8">Login with Facebook</p>
      </a>
      </div>
      <div className=" mt-2 p-0 d-flex justify-content-center">
      <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.talabat.com%3Fid%3Dauth472293&response_type=permission%20id_token&scope=email%20profile%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&openid.realm&include_granted_scopes=true&client_id=1032961477997-irlg83ld7gbrjeuhsgo8q261or06a183&ss_domain=https%3A%2F%2Fwww.talabat.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow" className=" d-flex p-0 row btn googleBtn w-75"> <i className
="fa-brands googleIcon col-4 fa-google"></i>
      <p className="col-8">Login with Google</p>
</a>
    </div>
  <p className="fs-3 mt-2">  Or</p>
      <p>
        <label className="w-75">
          Email
          <input className="w-100"
            type="email"
            name="email_address"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.email_address}
          />
        </label>
        <label className="error ">
          {errors.email_address
            ? errors.email_address
            : ""}
        </label>
      </p>
  
      <p>
        <label className="w-75">
          Password
          <input className="w-100"
            type="tel"
            name="password"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.password}
          />
        </label>
        <label className="error">
          {errors.password
            ? errors.password
            : ""}
        </label>
      </p>
  
      <p>
        <button className="mt-5 submitionBtn p-2 rounded mb-5 w-75" type="submit">Submit</button>
      </p>
      <p className="fs-6  pb-3">Don't have an account?<span className="creatAccount">Create an account</span> </p>
    </form>
  </div>
  }
  
  export default ValidationForm2;