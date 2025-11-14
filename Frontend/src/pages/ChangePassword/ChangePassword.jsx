import React, { useState } from 'react'
import { toast } from 'react-toastify';

function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChangePassword = async () => {
        if(currentPassword.length == 0){
            toast.warning("Please enter current Password");
        }else if(newPassword.length == 0){
            toast.warning("Please Enter New Password");
        }else if(confirmPassword.length == 0){
            toast.warning("Please Confirm your password...");
        }else{
            
        }
    }

  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <div className='register-container'>

        <div className='mb-3'>
          <label htmlFor=''>Current Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>New Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>

        <div>
          Already have an account? <Link to='/'>Login here</Link>
        </div>
        <div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
