import React from 'react'
import { Link } from 'react-router-dom'
import Orders from '../Orders'

export default function HomePage() {
    return (
        <div className="">
            <div className="mb-5 flex flex-row-reverse items-center space-x-5">
                <Link to="/">
                    <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Log out</button>
                </Link>
            </div>

            <Orders />
            
            <div>

            </div>
        </div>
    )
}
