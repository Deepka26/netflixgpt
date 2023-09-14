const CheckValidData=(email,password)=>{
    console.log("")
    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(email) 
//    const validPassword=^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$.test(password)
   if(!emailRegex)
   return "Please enter valid email"
// if(!validPassword)
// return "Please enter valid Password"

return null;
}
export default CheckValidData;