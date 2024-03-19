import React,{useEffect} from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom'; 
import toast from 'react-hot-toast';

function Register() {
    const registerUser = async (e) => {
        e.preventDefault();
        try {
          const formdata = new FormData(e.target);
          const formprops = Object.fromEntries(formdata);
    
          let res = await AxiosService.post(
            ApiRoutes.REGISTER_USER.path,
            formprops
          );
    
          if (res.status === 200) {
           toast.success("Registered Successfully")
            console.log(res.data);
          }
          else{
            alert(res.data.message)
          }
        } catch (error) {
          toast.error("User already exists")
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
        <h2>Welcome</h2>

        <Form onSubmit={registerUser}>
          <Form.Group className="mb-3">
            
            <Form.Control
              type="text"
              placeholder="User Name"
              name="username"
            />
          </Form.Group>
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

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Link to='/login' className='text-secondary'>Click To Login</Link>
      </div>

        </div>
    </>
  )
}

export default Register