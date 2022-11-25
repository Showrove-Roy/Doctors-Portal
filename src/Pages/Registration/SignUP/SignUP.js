import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthProvider";

const SignUP = () => {
  let navigate = useNavigate();
  // error message storage
  const [signUPError, setSignUPError] = useState("");

  //get Authentication function
  const {
    createNewUser,
    updateUserProfile,
    notify,
    googleLogIn,
    setLoading,
    createJWT,
  } = useAuth();

  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // SignUP From submit or Create user handel
  const onSubmit = (data) => {
    setSignUPError("");
    createNewUser(data.email, data.password)
      .then(() => {
        const userDetails = { displayName: data.name };
        updateUserProfile(userDetails)
          .then(() => {
            userInfo(data.name, data.email);
          })
          .catch((error) => {
            const errorMessage = error?.message?.split("/")[1];
            setSignUPError(errorMessage?.split(")")[0]);
          });
      })
      .catch((error) => {
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Google login handel
  const handelGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        if (result?.user?.uid) {
          userInfo(result.user.displayName, result.user.email);
        }
      })
      .catch((error) => {
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // save user info on DB
  const userInfo = (name, email) => {
    const userinfo = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          createJWT(email);
          reset();
          notify("👋 Successfully Created Account!");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='md:my-5 my-3 mx-2'>
      <div className='card w-full max-w-md mx-auto shadow-md rounded-xl'>
        <form className='card-body pt-1' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='text-xl text-center'>Register Now!</h3>

          {signUPError && (
            <p className='text-error mt-1 capitalize text-center font-semibold'>
              {signUPError}
            </p>
          )}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              className='input input-bordered'
              {...register("name", {
                required: "Full Name is required",
                minLength: {
                  value: 4,
                  message: "Name Length Must be 4 Characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name Length Must be under 24 Characters",
                },
              })}
            />
            {errors.name && (
              <p className='text-error mt-1' role='alert'>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              className='input input-bordered'
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            {errors.email && (
              <p className='text-error mt-1' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              className='input input-bordered'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password Length Must be 6 Characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    "Password must have at least one number, one special character, one uppercase & lowercase",
                },
              })}
            />
            {errors.password && (
              <p className='text-error mt-1' role='alert'>
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className='form-control mt-2'>
            <input className='btn btn-accent' type='submit' value='Register' />
            <label className='label'>
              <p className='text-center'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='link link-hover text-center text-secondary'>
                  Login
                </Link>
              </p>
            </label>
          </div>

          <div className='divider'>OR</div>
          <span
            onClick={handelGoogleLogin}
            className='btn btn-outline btn-accent'>
            CONTINUE WITH GOOGLE
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
