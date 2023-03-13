import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import addAvatar from "../assets/addAvatar.png";
import { signUp } from "../services/firebase_auth";
import { uploadImage, getProfilePhoto } from "../services/firebase_storage";
export const Signup = () => {
  const [errMsg, setErrMsg] = useState("");
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const displayImg = e.target[3].files[0];

    const resAuth = await signUp(email, password);
    if (typeof resAuth == "object") {
      console.log(resAuth);

      // [ ]: Implement Pause & Cancel Functionality
      await uploadImage(resAuth.uid, displayImg);
      const resUpload = await getProfilePhoto(resAuth.uid, displayImg);
      console.log(`upload response - ${resUpload}`);
      navigate("/home");
    } else {
      setErrMsg(resAuth);
    }
  };

  function handleSelectAvatar(e) {
    if (e.target.files[0]) setAvatar(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        <span className="auth_logo">Dope Chat</span>
        <span className="auth_title">Sign-up</span>

        <form className="form" onSubmit={handleSubmit}>
          {/* Textfields */}
          <input
            type="text"
            className="form_field"
            placeholder="display name"
          />
          <input className="form_field" type="email" placeholder="email" />
          <input
            className="form_field"
            type="password"
            placeholder="password"
          />

          {/* file Input */}
          <input
            onChange={handleSelectAvatar}
            id="file"
            type="file"
            className="form_avatar"
          />
          {/* label takes an id and it becomes then becomes the label for the specified id */}
          <label className="avatar_label" htmlFor="file">
            <img src={addAvatar} alt="Add avatar" />
            <span>Add an avatar</span>
          </label>

          {/* [ x ]: selected file preview */}
          <img
            src={avatar}
            alt=""
            className={`${avatar ? "" : "form_avatar"} img_preview`}
          />

          {/* Sign-up Button */}
          <button className="form_button">Sign-up</button>
          <span className="form_error">{errMsg}</span>
        </form>

        {/* Switch to Login */}
        <p className="auth_switch">
          Don't have an Account?{" "}
          <Link className="switch_link" to="/log-in">
            Log-in
          </Link>
        </p>
      </div>
    </div>
  );
};
