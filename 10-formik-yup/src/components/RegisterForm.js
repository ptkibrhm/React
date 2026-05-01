import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

const RegisterForm = () => {

    const submit=(values,action)=>{
        setTimeout(()=>{
            action.resetForm();
        },2000)
    }

    

  const { values, errors,touched,handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age:0,
      password:"",
      confirmPassword:"",
      term:false,
    },
    validationSchema:registerFormSchemas,
    onSubmit: submit
  });
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email </label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            
         />
         {errors.email && touched.email && <p className="input-error">{errors.email}</p>}
        </div>

         <div className="inputDiv">
          <label>Yaş </label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz"
            value={values.age}
            onChange={handleChange}
             onBlur={handleBlur}
          />
          {errors.age && touched.age && <p className="input-error">{errors.age}</p>}
        </div>

         <div className="inputDiv">
          <label>Şifre </label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz"
            value={values.password}
            onChange={handleChange}
             onBlur={handleBlur}
          />
          {errors.password && touched.password && <p className="input-error">{errors.password}</p>}
        </div>

        <div className="inputDiv">
          <label>Şifre Tekrarı </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
             onBlur={handleBlur}
          />
            {errors.confirmPassword && touched.confirmPassword && <p className="input-error">{errors.confirmPassword}</p>}

        </div>

        <div className="inputDiv ">
          
          <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
            <input
            style={{width:'20px',height:'12px'}}
            type="checkbox"
            id="term"
            checked={values.term}
            onChange={handleChange}
             onBlur={handleBlur}
            />

            <label>Kullanıcı Sözleşmesini kabul ediyorum </label>
          </div>
            {errors.term && touched.term && <p className="input-error">{errors.term}</p>}

        </div>

        <button type="submit" className="save-buton">Kaydet</button>




      </form>
    </div>
  );
};

export default RegisterForm;
