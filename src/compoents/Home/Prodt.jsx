import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const data = [
        {
            head: "Our Products",
            Products: [
                {
                    title: "Summer Sale",
                    Catergory: [
                        { 
                            Productid:"11", 
                            BrandName: 'positive beverage', 
                            ProductName: 'Mandarin Orange', 
                            ProductImage: "/images/mandarin-orange-1.jpeg", 
                            OldPrice: '36.85', 
                            NewPrice: '29.85' 
                        },
                        {Productid:"12", BrandName: 'positive beverage', ProductName: 'Prickly Pear Lemonade', ProductImage: "/images/Product2.jpeg", OldPrice: '36.85', NewPrice: '29.85' },
                        { Productid:"13", BrandName: 'positive beverage', ProductName: 'Pear Lemonade', ProductImage: "/images/Product3.jpeg", OldPrice: '36.85', NewPrice: '29.85' },
                        { Productid:"14", BrandName: 'positive beverage', ProductName: 'Watermelon Mania', ProductImage: "/images/Product4.jpeg", OldPrice: '36.85', NewPrice: '29.85' },
                        { Productid:"15", BrandName: 'Riot Enengy', ProductName: 'Mango Riot', ProductImage: "/images/Product5.jpeg", OldPrice: '39.99', NewPrice: '33.99' },
                        { Productid:"16", BrandName: 'Riot Enengy', ProductName: 'Cherry Watermelon Riot', ProductImage: "/images/Product6.jpeg", OldPrice: '39.99', NewPrice: '33.99' },
                        { Productid:"17", BrandName: 'positive beverage', ProductName: 'Tropical Bliss', ProductImage: "/images/Product7.jpg", OldPrice: '35.85', NewPrice: '29.85' },
                        { Productid:"18", BrandName: 'positive beverage', ProductName: 'Mega Deal', ProductImage: "/images/Product9.jpeg", OldPrice: '71.00', NewPrice: '55.85' }
                    ]
                },
                {
                    title: "Shoes",
                    Catergory: [
                        { Productid:"21", BrandName: 'Bata', ProductName: 'Power-Men ', ProductImage: "/images/Powermen.jpeg", OldPrice: '35', NewPrice: '22' },
                        { Productid:"22", BrandName: 'Bata', ProductName: 'Power-Women ', ProductImage: "/images/Powerwomen.jpeg", OldPrice: '35', NewPrice: '22' },
                        { Productid:"23", BrandName: 'Bata', ProductName: 'Power-Men ', ProductImage: "/images/Powermen1.jpeg", OldPrice: '35', NewPrice: '22' },
                        { Productid:"24", BrandName: 'Bata', ProductName: 'Red Label', ProductImage: "/images/Red-Label-1.jpeg", OldPrice: '44', NewPrice: '38' },
                     ]
                },
                {
                    title: "Mobile",
                    Catergory: [
                        { Productid:"31", BrandName: 'Xiaomi', ProductName: 'Redmi Note 12 Pro', ProductImage: "/images/Mobile1.jpg", OldPrice: '330', NewPrice: '290' },
                        { Productid:"32", BrandName: 'Infinix', ProductName: 'Note 12 G96 ', ProductImage: "/images/Mobile2.jpg", OldPrice: '300', NewPrice: '280' },
                        { Productid:"33", BrandName: 'Oppo', ProductName: 'F21 pro ', ProductImage: "/images/Mobile3.jpeg", OldPrice: '450', NewPrice: '420' }
                    ]
                },
            ]
        },
    ];

    return (
        <>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Our Products</h1>
                {data.map((item) => (
                    <div>
                        {item.Products.map((Products) => (
                            <div>
                                <h1 className="text-4xl font-semibold mt-3">{Products.title}</h1>
                                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 md:gap-x-24 mt-10 mb-14">
                                    {Products.Catergory.map((Catergory, idx) => (
                                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 z-0 hover:scale-105 hover:shadow-xl">
                                            <Link to={`/ProductPage/${Catergory.Productid}`}>
                                                <img key={idx} src={Catergory.ProductImage} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                                                <div className="px-4 py-3 w-72">
                                                    <span className="text-gray-400 mr-3 uppercase text-xs flex">{Catergory.BrandName}</span>
                                                    <p className="text-lg font-bold text-black truncate mt-2 capitalize flex">{Catergory.ProductName}</p>
                                                    <div className="flex items-center">
                                                        <p className="text-lg font-semibold text-black cursor-auto my-3">${Catergory.NewPrice}</p>
                                                        <del>
                                                            <p className="text-sm text-gray-600 cursor-auto ml-2">${Catergory.OldPrice}</p>
                                                        </del>
                                                        <div className="ml-auto">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd"
                                                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                                <path
                                                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                    }
                                </section>
                            </div>
                        ))
                        }
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Products;