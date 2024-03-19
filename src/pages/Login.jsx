import React,{useEffect} from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom'; 
import toast from 'react-hot-toast';

function Login() {
    const navigate=useNavigate()
    const login = async (e) => {
        e.preventDefault();
        try {
          const formdata = new FormData(e.target);
          const formprops = Object.fromEntries(formdata);
    
          let res = await AxiosService.post(
            ApiRoutes.LOGIN_USER.path,formprops
          );
    
          if (res.status === 200) {
            toast.success("Logged in successfully")
           localStorage.setItem("token",res.data.data)
           navigate('/')
          }
          else{
            toast.error(res.data.message)
          }
        } catch (error) {
          console.log(error)
        }
      };
      useEffect(() => {
        sessionStorage.clear();
      }, []);
  return (
    <>
        <div className="conatiner-fluid d-flex justify-content-center mt-5">
        <div className="wrapper">
        <h2>Welcome Back</h2>

        <Form onSubmit={login}>
         
          <Form.Group className="mb-3">
          
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
          
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='login-btn'>
            Login
          </Button>
        </Form>
        <Link to='/register' className='text-secondary'>Click To Register</Link>
      </div>

        </div>
    </>
  )
}

export default Login