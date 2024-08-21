import React from 'react'
import Header from '../components/homepage/header'
import Cards from '../components/homepage/cards'

export default function HomePage() {
    return (
        <div>
            <div className=' container'>
                <Header />
            </div>

            <div>
                <Cards />
            </div>
        </div>
    )
}
