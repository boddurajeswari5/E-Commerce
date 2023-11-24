import React from 'react'

import HomeCover from './HomeCover'
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';

const products = [
    {
        name: 'Red Dress 1',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Yellow Hoodie 1',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/SsqtPyT/red-t-Shirt.webp",
    },
    {
        name: 'White Pink Dress 1' ,
        price: 18,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/k6TLGMC/White-pink-dotted.webp",
    },
    {
        name: 'Red Black Dress 1',
        price: 22,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Italy Fashion 2',
        price: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/SsqtPyT/red-t-Shirt.webp",
    },
    {
        name: 'Black Dress 2',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Red T-Shirt 2',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/k6TLGMC/White-pink-dotted.webp",
    },
    {
        name: 'Black Fashion 2',
        price: 18,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Italy Fashion 3',
        price: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/SsqtPyT/red-t-Shirt.webp",
    },
    {
        name: 'Black Dress 3',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Red T-Shirt 3',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/k6TLGMC/White-pink-dotted.webp",
    },
    {
        name: 'Black Fashion 3',
        price: 18,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Italy Fashion 3',
        price: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/SsqtPyT/red-t-Shirt.webp",
    },
    {
        name: 'Black Dress',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
    {
        name: 'Red T-Shirt',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/k6TLGMC/White-pink-dotted.webp",
    },
    {
        name: 'Black Fashion',
        price: 18,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: "https://i.ibb.co/0h0Fnty/red-dress.webp",
    },
];

const Home = () => {
  return (
    <div>
        <Header />
        <HomeCover/>
        <Slider products={products} />
        <Footer />
    </div>
  )
}

export default Home
