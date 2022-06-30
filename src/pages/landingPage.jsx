import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'

import groupImage from '../images/group2.jpg';
import '../css/landingPage.css'

const LandingPage =()=>{
  return (
    <div className='big-div '>
  
        <img className="landing-image" src={groupImage} alt ="group of people"/>

        <div id='sec-div' className='d-grid'>
          <Form className='sign-in-form'>
          <p className='text-center'>ISOMORPHIC</p>
            <Form.Group>
              <Form.Control className= 'mb-3' size='md'  type='text' placeholder='Username'/>
            </Form.Group>

            <Form.Group>
              <Form.Control size= 'md' className='mb-3' type='password' placeholder='Password'/>
            </Form.Group>

            <Form.Group>
              <Form.Check label='Remember Me'/>
              <Button>Sign In</Button>
            </Form.Group>

            <div>
              
            </div>
          </Form>
           
      
        </div>



    </div>
  );
}

export default LandingPage;