import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import {  Link } from 'react-router-dom';



const ValidatedLoginForm = () => (
  //USING FORMIK NPM PACKAGE FOR MORE AUTHENICATION , LESS CODE , MORE PERFORMANCE ON FORM VALIDATION
  
  
   <Formik
        initialValues={{ email: "", password: "" }}

        //POSTING A REQUEST BODY TO THE LINK BY USING FETCH AND JSON FUNCTION

        onSubmit={(values ) => {
           
            var mypassword = JSON.stringify(values.password)
            var myusername = JSON.stringify(values.username)
            const requestOptions = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ pwd : mypassword , unme: myusername })
            };
            fetch('https://minimumque.herokuapp.com/login' , requestOptions) //getting a image which not readable

            
        }}
   
     //FORM VALIDATION USING YUP PACKAGE FOR LESS CODE AND MORE EFFICENCY


        validationSchema={Yup.object().shape({
            username: Yup.string()
            .min(3, "Username is too short - should be 3 chars minimum.")
            .max(32, "Username is too long - should be 32 chars maximum.")
            .required("Required"),
            password: Yup.string()
            .matches(/(?=.*[A-Z])/, "password must contain atleast one uppercase letter.")
            .matches(/(?=.*[a-z])/, "password must contain atleast one uppercase letter.")
            .matches(/(?=.*[!@#\$%\^&\*])/, "password must contain atleast one special character.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .max(32, "Password is too long - should be 32 chars maximum.")
            .required("Required")
        })}
   
   >
     

        {props => {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = props;
        
      
    
     
      
      return (
          //FORM USER INFERENCE AREA

        <form onSubmit={handleSubmit}>
          
            <label htmlFor="username">Username</label>  
            
            <Link className="linkclass" to ="/retrieve" >Retrieve</Link>     
          
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          
          
          <label htmlFor="password">Password</label>
          <Link className="linkclass" to ="/retrieve">Reset</Link>   
          <input
            name="password"
            type="password"
            
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <div className="button-center">
          <button type="submit"  disabled={isSubmitting}>
            Login
          </button>
          
          <p><a href="/">New User?</a><a href="/"> Sign Up</a></p>
          </div>
        </form>
      );
    }}
  </Formik>
  

);

export default ValidatedLoginForm;
