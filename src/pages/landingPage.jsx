import {Link} from 'react-router-link';

import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'

import groupImage from '../images/group2.jpg';
import '../css/landingPage.css'


const LandingPage =()=>{
  return (
    <>

    <div className='big-div mb-5'>
        <div className="landing-image" >

        </div>

        <div id='sec-div' className='d-grid'>
          <Form className='sign-in-form'>
          <p className='text-center para'>ISOMORPHIC</p>
            <Form.Group>
              <Form.Control className= 'mb-3' size='md'  type='text' placeholder='Username'/>
            </Form.Group>

            <Form.Group>
              <Form.Control size= 'md' className='mb-5' type='password' placeholder='Password'/>
            </Form.Group>

            <Form.Group className='label-div mb-5' >
              <Form.Check label='Remember Me'/>
              <Button type='submit' variant ='custom'  id='signin-button' >Sign In</Button>
              
            </Form.Group>

            <div className='buttons-div'>
              <Button type ='submit' variant='custom' id='facebook'>sign in with Facebook</Button>
              <Button type ='submit' variant='custom' id='google'>sign in with Google Plus</Button>
              <Button type ='submit' variant='custom' id='auth' >sign in with Auth0</Button>
              <Button  type ='submit' variant='custom' className='mb-5' id='firebase'  >sign in with Firebase</Button>
              <Link className=' mb-2' id='first-link' href='/'>Forgot Password</Link>
              <Link id='sec-link' href='/'>Create an Isomorphic account</Link>
            </div>
          </Form>
        </div>
    </div>

    

    </>
  );
}

export default LandingPage;