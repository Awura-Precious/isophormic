import Form  from 'react-bootstrap/Form'

import groupImage from '../images/group2.jpg';
import '../css/index.css'

const LandingPage =()=>{
  return (
    <div className='big-div '>
  
        <img className="landing-image" src={groupImage} alt ="group of people"/>

        <div id='sec-div' className='d-grid '>
          <Form className='sign-in-form'>
          <p className='text-center'>ISOMORPHIC</p>
            <Form.Group>
              <Form.Control className='mb-3' size='md'  type='text' placeholder='Username'/>
            </Form.Group>

            <Form.Group>
              <Form.Control size='md' type='password' placeholder='Password'/>
            </Form.Group>

            <div>
              
            </div>
          </Form>
           
      
        </div>



    </div>
  );
}

export default LandingPage;