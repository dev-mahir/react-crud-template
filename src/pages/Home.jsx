import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineEdit, AiFillDelete, AiFillEye } from 'react-icons/ai'
import { Header } from '../component/Header'

const Home = () => {
    return (
        <div className='container mt-5 home'>
            <div className="card">
                <div className="card-body">

                    <Header home={"/"} add={'/add'} />

                </div>
            </div>
            <div className="row mt-3">
                <div className="col mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <table className='w-100 table text-center'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Loction</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>Md Mhahir</td>
                                        <td>mdmahir.ds@gmail.com</td>
                                        <td>0185284164764</td>
                                        <td>TAngail</td>
                                        <td>
                                            <img src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=" alt="" />
                                        </td>
                                        <td>
                                            <Link to='/view/g' className='btn btn-primary btn-sm' > <AiFillEye /></Link>
                                            <Link to='/edit/g' className='btn btn-warning btn-sm mx-2'> <AiOutlineEdit /></Link>
                                            <Link to='/delete' className='btn btn-danger btn-sm'> <AiFillDelete /></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home