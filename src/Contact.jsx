import React, { useState } from 'react'


const Contact = () => {

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""

    })

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value
            }
        })
    }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname} My email is ${data.email} My phone number is ${data.phone} and my message is ${data.msg}`)

    }


    return (

        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit = {formSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" name = "fullname" value = {data.fullname} onChange = {InputEvent} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name = "email" value = {data.email} onChange = {InputEvent} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="text" class="form-control mt-4" id="exampleFormControlInput1" placeholder="enter your phone number" name = "phone" value = {data.phone} onChange = {InputEvent} />
                            </div>


                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>



                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}


export default Contact;