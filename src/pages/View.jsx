import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { GET_USER } from '../graphql/query';

const View = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_USER, { variables: { userId: "1" } })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { firstName,lastName, email } = data.user;



    return (
        <div className="container mt-5 view">
            <Header home={"/"} add={'/add'} />
            <div className="card mt-5">
                <div className="card-body">

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='w-50'>
                                    <img style={{ height: "350px", width: "200px", objectFit: "cover" }} src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=" alt="" />
                                </div>
                                <div className='w-50'>
                                    <ul>
                                        <li> <strong>Name</strong>: {firstName} {lastName}</li>
                                        <li> <strong>Email</strong>: {email}</li>
                                        <li> <strong>Phone</strong>: Md Mahir</li>
                                        <li> <strong>Location</strong>: Md Mahir</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default View;