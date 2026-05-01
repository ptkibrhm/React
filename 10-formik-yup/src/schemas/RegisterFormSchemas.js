import * as yup from 'yup'

export const registerFormSchemas=yup.object().shape({
    email:yup.string().email("Geçerli bir email adresi giriniz").required("Email adresi zorunludur"),

    age:yup.number().positive("Pozitif bir değer giriniz").min(0).max(120).integer("Tamsayı giriniz").required("Yaş alanı zorunludur"),

    password:yup.string().required("Şifre alanı zorunludur"),

    confirmPassword:yup.string().required("Şifre tekrarı zorunludur").oneOf([yup.ref("password")], "Şifreler eşleşmiyor"),
    
   
    term:yup.boolean().oneOf([true]).required("Lütfen kutuyu onaylayınız")


})
