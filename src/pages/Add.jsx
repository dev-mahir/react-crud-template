import React, { useState } from 'react'
import { Header } from '../components/Header'


const Add = () => {
    const [input, setInput] = useState({});

    const handleInputChange = (e) => { 
    
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
    }


    return (
        <div className="container mt-2">
            <Header home={"/"} add={'/add'} />

            <div className="row">
                <div className="col-lg-6 mx-auto">

                    <div className="card mt-3">
                        <div className="card-body">
                            <form onSubmit={handleCreateUser}>
                                <div class="mb-2">
                                    <label for="name" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="name" name='firstName' onChange={handleInputChange} placeholder="Enter firstname" />
                                </div>
                                <div class="mb-2">
                                    <label for="name" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="name" name='lastName' onChange={handleInputChange} placeholder="Enter lastname" />
                                </div>
                                <div class="mb-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" name='email' onChange={handleInputChange} class="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div class="mb-2">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" name='phone' onChange={handleInputChange} class="form-control" id="phone" placeholder="Enter email" />
                                </div>
                                <div class="mb-2">
                                    <label for="location" class="form-label">Gender</label>
                                    <br />
                                    <div className="d-flex gap-3">
                                        <div>
                                            <input type="radio" name="gender" onChange={handleInputChange} value="Male" />
                                            <label for="location" class="form-label ms-1">Male</label>
                                        </div>
                                        <div>
                                            <input type="radio" name='gender' onChange={handleInputChange} value="Female" />
                                            <label for="location" class="form-label ms-1">Female</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="mb-2">
                                    <label for="location" class="form-label">Image</label>
                                    <input type="file" class="form-control" name='image' placeholder="Enter location" />
                                </div> */}
                                <div class="mb-2">
                                    <input type="submit" className='btn btn-primary' />
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Add