import React from 'react'
import { Header } from '../component/Header'

const Add = () => {
    return (
        <div className="container mt-2">
            <Header home={"/"} add={'/add'} />

            <div className="row">
                <div className="col-lg-6 mx-auto">

                    <div className="card mt-3">
                        <div className="card-body">
                            <form>
                                <div class="mb-2">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" />
                                </div>
                                <div class="mb-2">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div class="mb-2">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter email" />
                                </div>
                                <div class="mb-2">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Enter location" />
                                </div>
                                <div class="mb-2">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="file" class="form-control" name='image' placeholder="Enter location" />
                                </div>
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