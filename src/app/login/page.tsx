"use client";

import React from "react";
import styles from "./login.module.scss";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { AppDispatch, RootState } from "../redux/store/store";

function page() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    const decoded: any = jwt_decode(credentialResponse.credential);
    dispatch(setUser(decoded));
    router.push("/profile");
    console.log(decoded);
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className={styles.main}>
      <GoogleOAuthProvider clientId="297496560407-2misq865a9ubv9urqrun32s6pv8b4k36.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default page;
