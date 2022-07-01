import React from 'react'
import '../Register.css'
import registration from '../images/registraion.png'
import new_image from '../images/bg2.png'
import { useForm } from 'react-hook-form'
function Register() 
{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit=(userdata)=>{
        console.log(userdata)
    }
  return (
      
    <div>
     <img src={new_image} className="w-100 mt-5 p-3"></img>
             <form className='register_form total_text' onSubmit={handleSubmit(onFormSubmit)}>
             
             <h1 className='register_heading'>Create a Land to Step In</h1>
             <div className='mt-3'>
                <label htmlFor='email'>Email:</label>
                <input type='email' className='registration_input' placeholder='weareone@gmail.com'id='email' {...register('email',{required:true})}></input>
                {errors.email?.type==='required' && <p className=' login_warning' >*Email required</p>}
             </div>
             <div className='mt-3'>
                <label htmlFor='password'>Password:</label>
                <input type='password' className='registration_input' id='password'{...register('password',{required:true})}></input>
                {errors.password?.type==='required' && <p className=' login_warning' >*Password required</p>}
             </div>
             <div className='mt-3'>
             <label htmlFor='username'>Username:</label>
             <input id='username' type='text' className='registration_input' placeholder='simran1234'{...register('username',{required:true})}></input>
             {errors.username?.type==='required' && <p className=' login_warning' >*Username required</p>}
             </div>
             
             <div className='mt-3 '>

             <label lassName='ml-2'>Gender:</label>
             <input type="radio" id='male' value="male" className='radio_register' {...register("gender")}></input>
             <label htmlFor='male'>Male</label>
             <input type="radio" id='female' value='female' className='radio_register' {...register("gender")}></input>
             <label htmlFor='female'>Female</label>
             <input type="radio" id='other' value='other' className='radio_register'{...register("gender")}></input>
             <label htmlFor='other'>Other</label>
             </div>
             <div className='mt-3'>
             <label htmlFor='phone'>Phonenumber</label>
             <input id="phone" type='tel' className='registration_input' {...register('phone',{required:true})}></input>
             {errors.phone?.type==='required' && <p className=' login_warning' >*Phonenumber required</p>}
             </div>
              <div className='mt-3'>
              <input type='checkbox' id='terms_and_condtions' {...register('terms_and_conditons',{required:true})}></input>
              <label htmlFor='terms_and_condtions'>I agree to the <a className='lamp_terms' href='https://policies.google.com/terms?hl=en'>Lamp Terms</a></label>
              {errors.terms_and_conditons?.type==='required' && <p className=' login_warning' >*Please accept terms and conctions</p>}
              </div>
              <button className='mt-3 registration_button' type="submit">Register</button>
              <img src={registration} className="registration_image"></img>
             </form>
       
    </div>
  )
}

export default Register