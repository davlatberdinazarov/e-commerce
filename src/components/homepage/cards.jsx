import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Cards() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                if (response.status === 200) {
                    setCards(response.data);
                    setLoading(false);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        getData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    { cards.map((card, index) => {
                        return (
                            <div key={index} class="p-4 md:w-1/3 w-full">
                                <div class="bg-white rounded-lg shadow-md p-6">
                                    <Link to={`/product/${card.id}`}>
                                        <img class="w-full object-cover h-80" src={card.image} alt={card.title} />
                                    </Link>
                                    <div class="mt-4">
                                        <h2 class="text-gray-900 text-2xl title-font font-medium line-clamp-1">{card.title}</h2>
                                        <p class="text-gray-500 text-lg line-clamp-3">{card.description}</p>
                                        <p class="text-gray-500 text-lg">$ {card.price}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
