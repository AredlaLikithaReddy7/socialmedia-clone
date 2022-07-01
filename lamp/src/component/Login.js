import { useForm } from 'react-hook-form';
import '../login_form.css'
import login_form_image from '../images/login_form.png'
function Login() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onFormSubmit=(userdata)=>{
    console.log(userdata)
  }
   return (
      <div>
      <form className=' login_form' onSubmit={handleSubmit(onFormSubmit)}>
      <img src={login_form_image} className="w-50 mx-auto d-block"></img>
      <h1 className='text-center login_text mt-1'>START YOUR FIRST STEP</h1>
      <div className='conatiner '>
        <label htmlFor='username  ' className='login_head'>Username:</label>
        <input  className=' mt-3 input_form mx-auto  '  type="text" id="username" placeholder='username' {...register("username",{required:true})}></input>
        {errors.username?.type==='required' && <p className=' login_warning' >*Username required</p>}
      </div>
    
      <div className=' mx-auto mt-3'> 
        <label htmlFor='password ' className='login_head'>Password:</label>
        <input  className=' mt-3 input_form mx-auto'  type="password" id="password" placeholder='password' {...register("password",{required:true,minLength:4})}></input>
        {errors.password?.type==='required' && <p className=' login_warning' >*Password required</p>}
        {errors.password?.type==='minLength' && <p className='login_warning'>*min 4 characters needed</p>}
      </div>
    <div className='mx-auto mt-4 d-block'>
    <button type='submit ' className='  submit_login p-2 '>Log in</button>
    </div>
      </form>
           
      </div>
   )
}

export default Login;