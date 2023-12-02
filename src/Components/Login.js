import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [token , setToken] = useState('');


  const clickHandler = () => {
    const getEmail = document.getElementById("email");
    const emailTrue = getEmail.value;
    setEmail(emailTrue);

    const getPassword = document.getElementById("password");
    const passwordTrue = getPassword.value;
    setPassword(passwordTrue);

     if(token){
        navigate("/dashboard")
     } else{
       console.log("Email or Password Invalid or Wrong");
     }
 }
 useEffect(() => {
  const sendPost = async () => {

      await axios({
          method: "post",
          url: "https://admin-api.pwskills.com/backend/login?jwtLogin=true",
          data: {
              email: email,
              password: password
          }
      }).then(
          (response) => {
              const tok = response.data
              const finalToken = tok.token
              setToken(finalToken)
              localStorage.setItem("user", JSON.stringify(token))
          }).catch((error) => console.log(error))

  }
  sendPost()
}, [password, email, token])


  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10 '>
        <img src='../Images/pwskills.png' alt='main-logo' className='h-8 w-26' />
        <h1 className='text-2xl font-bold'>Sign in to the PW Skills Admin</h1>
      </div>
      <div className='flex flex-col justify-center items-center mt-5'>
        <input
          type='text'
          id="email"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='px-16 py-2 text-center mb-5 border border-gray-400 bg-blue-100 hover:border-none! focus:border-none!'
        />
        <input
          type='password'
          id="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          className='px-16 py-2 text-center mb-5 border border-gray-400 bg-blue-100'
        />
        <button onClick={() => clickHandler()} className='bg-blue-500 px-32 py-2 rounded-lg text-white'>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Login;




// import React , { useState } from 'react';
// import { useHistory } from 'react-router-dom';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();


//   const handleSignIn = async () => {
//     try {
//         const response = await fetch('https://admin-api.pwskills.com/backend/login?jwtLogin=true' , {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email , password }),
//         });
//         if(response.ok){
//           history.push("/dashboard")
//         }else{
//           console.log('Authentication failed');
//         }

      
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   }
     
//   }

//   return (
    
//     <div>
//         <div>
//             <div className='flex flex-col justify-center items-center mt-10 '>
//                 <img src='../Images/pwskills.png' alt='main=logo' className='h-8 w-26' />
//                 <h1 className='text-2xl font-bold'>Sign in to the PW Skills Admin</h1>
//             </div>
//             <div className='flex flex-col justify-center items-center mt-5'>
//                 <input onChange={(e) => setEmail(e.target.value)} type='text' value={email} placeholder='Email' className='px-16 py-2 text-center mb-5 border border-gray-400 bg-blue-100 hover:border-none! focus:border-none!'/>
//                 <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' className='px-16 py-2 text-center mb-5 border border-gray-400 bg-blue-100'/>
//                 <button onClick={handleSignIn} className='bg-blue-500 px-32 py-2 rounded-lg text-white '>SIGN IN</button>
//             </div>
//         </div>
//     </div>
//   )
  

// export default Login;