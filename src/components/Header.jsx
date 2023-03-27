import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({home, add}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <Link to={home} className='btn btn-primary'>Home</Link>
                    <Link to={add} className='btn btn-primary ms-3'>Add new membar</Link>
                </div>
            </div>
        </div>
    )
}
