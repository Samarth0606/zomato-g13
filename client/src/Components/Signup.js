import React from 'react'


const Signup = () => {


    let fun1 = (e)=>{
        console.log(e.target);
    }


  return (
    <div className='row'>
        <div className="col-6 mx-auto mt-5">

            <h1>Signup Form</h1>

            <label class="form-label" htmlFor='naam'>FirstName: </label>
            <input type='text' className="form-control" name='firstName'  onChange={fun1}  id='naam' placeholder='first naam likho' />
            <br/>

            <label class="form-label"  htmlFor='peeche'>lastName: </label>
            <input type='text' className="form-control" name='lastName' onChange={fun1}  id='peeche' placeholder='last naam likho' />
            <br/>

            <label class="form-label" htmlFor='mail'>Email: </label>
            <input type='email' className="form-control" name='email'  onChange={fun1} id='mail' placeholder='email likho' />
            <br/>

            <label class="form-label" htmlFor='pass'>Password: </label>
            <input type='password' className="form-control" name='passWord'  onChange={fun1} id='pass' placeholder='password likho' />
            <br/>

            <button className='btn btn-success btn-md'>Signup</button>

        </div> 
    </div>
  )
}

export default Signup