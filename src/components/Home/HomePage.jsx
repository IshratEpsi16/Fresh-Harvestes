import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [products, setProducts] = useState([]);

    // Toggle modal visibility
    const handleLoginToggle = () => {
        console.log("Sign In button clicked"); // Debugging log
        setShowLogin(!showLogin);
    };
    useEffect(() => {
        // Fetch the data.json file
        fetch('../../../public/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className="flex  w-full" >
                <div className="flex flex-1 bg-slate-50 items-center justify-center sm:items-stretch sm:justify-start" style={{ flex: '0 0 70%', paddingTop: '3%', paddingLeft: '3%' }}>
                    <div className="flex shrink-0 items-center">
                        <img className="h-8 w-auto" src="../../../public/Logo.svg" alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <a href="#" className="rounded-md px-1 py-1 text-2xl font-bold font-medium text-black"><h2>Fresh Harvests</h2></a>
                            <a href="#" className="rounded-md px-3 py-2 m-1 text-sm font-medium text-slate-500 hover:bg-gray-700 hover:text-white">Home</a>
                            <a href="#" className="rounded-md px-3 py-2 m-1 text-sm font-medium text-slate-500 hover:bg-gray-700 hover:text-white">Shop</a>
                            <a href="#" className="rounded-md px-3 py-2 m-1 text-sm font-medium text-slate-500 hover:bg-gray-700 hover:text-white">About us</a>
                            <a href="#" className="rounded-md px-3 py-2 m-1 text-sm font-medium text-slate-500 hover:bg-gray-700 hover:text-white">Blog</a>
                        </div>
                    </div>
                </div>
                <div className="flex bg-lime-700 items-center space-x-4 pr-2" style={{ flex: '0 0 30%', paddingTop: '3%', paddingLeft: '3%' }}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Favorites</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Cart</a>
                    <button onClick={handleLoginToggle} className="btn btn-outline btn-success z-30 relative">
                        <p className='text-white'>Sign in</p>
                    </button>
                </div>
            </div>



            <div className="relative w-full h-screen">

                {/* Gray Section */}
                <div className="absolute top-0 left-0 w-[70%] h-full bg-slate-50 p-8 text-left z-10">

                    <p className="text-lg font-medium p-2 text-lime-700"  >Welcome to Fresh Harvest</p>
                    <h1 className="text-6xl font-bold leading-tight mt-4 p-2 ">
                        Fresh Fruits and <br /> Vegetables
                    </h1>
                    <p className="mt-4 p-2 text-base text-gray-700">
                        At Fresh Harvests, we are passionate about providing you with the freshest
                        <br />
                        and most flavorful fruits and vegetables.
                    </p>
                    <button className="btn bg-orange-500 text-white mt-6 "><p className='p-3'>Shop Now</p></button>

                    <div className="bg-zinc-200 p-4 mt-4 rounded-lg shadow-lg flex items-center w-[300px] " style={{ marginLeft: '25%' }}>
                        <div className="ml-4 w-1/2">
                            <p className="text-xs font-semibold text-gray-500">Special Offer</p>
                            <h3 className="text-lg font-bold text-green-700 mt-1">Fresh Salad</h3>
                            <p className="text-sm text-gray-600 mt-1">Up to 70% off</p>
                            <button className="btn btn-success text-sm mt-2">CODE:FRESH25</button>
                        </div>
                        <img
                            src="https://i.ibb.co/xhrFx80/cc411928dcab6c58340e4d0518dd1595.png"
                            alt="Offer Image"
                            className="h-full w-1/2 object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col  space-y-4 mt-5 mb-1">
                        <p className='text-xs text-slate-500'>Download App:</p>
                        <div className="flex space-x-4 w-1/4">
                            <img src="../../../public/appstore.svg" alt="App Store" className="h-12 w-1/2 object-contain" />
                            <img src="../../../public/googleplay.svg" alt="Google Play" className="h-12 w-1/2 object-contain" />
                        </div>
                    </div>
                </div>
                <img
                    src="https://i.ibb.co/ZLtv6Tk/12399b794493c0820ab34cb4e6b433a8.png"
                    alt="Display"
                    className="absolute h-full w-auto left-[20%] object-cover z-20"
                />

                {/* Green Section */}
                <div className="absolute top-0 right-0 w-[30%] h-full bg-lime-700">
                </div>

                {/* Image */}



            </div>

            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-md">Log In</button>
                        </form>
                        {/* Close Button */}
                        <button
                            onClick={handleLoginToggle}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}


            <div className="mt-5">
                <p className="text-lg font-medium p-2 text-center text-lime-700">Our Products</p>
                <h1 className="text-4xl font-bold leading-tight mt-1 p-2">Our Fresh Products</h1>
                <p className="mt-4 p-2 text-center text-base text-gray-700">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits,<br />
                    vegetables, and salad ingredients.
                </p>
                <div className="flex justify-center gap-3 mt-4">
                    <button className="btn btn-success text-white">All</button>
                    <button className="btn btn-outline btn-success">Fruits</button>
                    <button className="btn btn-outline btn-success">Vegetables</button>
                    <button className="btn btn-outline btn-success">Salad</button>
                </div>
                <div className="grid bg-slate-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {products.slice(0, 8).map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
                            <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                            <p className="text-gray-600">${item.price}</p>
                            <button className="btn bg-orange-500 text-white mt-6 "><p className='p-3'>Add to cart</p></button>
                        </div>
                    ))}






                </div>
                <div className="w-full flex justify-center">
                    <button className="btn btn-outline btn-warning text-white mt-6">
                        <p className="p-3">See All Products</p>
                    </button>
                </div>
            </div>

            <div className="flex h-screen">
                {/* Left Side with Image */}
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/R3P90wj/Image-40.png"
                        alt="Placeholder"
                        className="w-3/4 h-auto object-contain"
                    />
                </div>

                {/* Right Side with Text */}
                <div className="w-1/2 flex flex-col justify-center ">
                    <p className="text-lg font-medium p-2 text-left text-lime-700">About us</p>
                    <h1 className="text-4xl text-left font-bold leading-tight mt-1 p-2">Our Fresh Products</h1>
                    <p className="mt-4 p-2 text-left text-base text-gray-700">
                        Welcome to Fresh Harvest, your premier destination for high-quality and <br>
                        </br>fresh produce. We are passionate about providing you with the finest fruits,<br></br>
                        vegetables, and salad ingredients to nourish your body and delight your <br></br>
                        taste buds. With a commitment to excellence, sustainability, and customer<br></br>
                        satisfaction, Fresh Harvest is here to revolutionize your grocery <br></br>shopping experience.
                    </p>
                    <div className="text-left mt-5">
                        <button className="btn bg-orange-500 text-white px-4 py-2">Read More</button>
                    </div>



                </div>

            </div>
            <div className="flex p-5 bg-slate-100">
                {/* Left Side with Image */}


                {/* Right Side with Text */}
                <div className="w-1/2 p-5 flex flex-col justify-center ">
                    <p className="text-lg font-medium p-2 text-left text-lime-700">Special offers</p>
                    <p className="text-4xl text-left font-bold leading-tight mt-4 px-2 py-2">
                        Seasonal Fruit Bundle
                    </p>
                    <p className="mt-4 p-2 text-left text-base text-gray-700">
                        Discount up to 80% OFF
                    </p>
                    <div className="text-left mt-5">
                        <button className="btn bg-slate-50 text-white px-4 py-2 h-24 border border-slate-300">
                            <p className="text-slate-700">03<br />Days</p>
                        </button>&nbsp;&nbsp;&nbsp;
                        <button className="btn bg-slate-50 text-white px-4 py-2 h-24 border border-slate-300">
                            <p className="text-slate-700">18<br />Hour</p>
                        </button>&nbsp;&nbsp;&nbsp;
                        <button className="btn bg-slate-50 text-white px-4 py-2 h-24 border border-slate-300">
                            <p className="text-slate-700">54<br />Min</p>
                        </button>&nbsp;&nbsp;&nbsp;
                        <button className="btn bg-slate-50 text-white px-4 py-2 h-24 border border-slate-300">
                            <p className="text-slate-700">21<br />Second</p>
                        </button>&nbsp;&nbsp;&nbsp;


                    </div>
                    <div className="text-left mt-5">
                        <button className="btn btn-success rounded-full text-white px-4 py-2">CODE : FRUIT28</button>
                    </div>



                </div>
                <div className="w-1/2 p-5 flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/dbmhV2b/image-1.png"
                        alt="Placeholder"
                        className="w-3/4 h-auto object-contain"
                    />
                </div>

            </div>
            <div className="mt-5">
                <p className="text-lg font-medium p-2 text-center text-lime-700">Testimonial</p>
                <h1 className="text-4xl font-bold leading-tight mt-1 p-2">What Our Customers Say</h1>
                <p className="mt-4 p-2 text-center text-base text-gray-700">
                    Don't just take our word for it—here's what some of our customers have to<br></br> say about their experience with Fresh Harvest:
                </p>
            </div>
            <div className="flex justify-center ">
                {/* Left Side with Image */}
                <div className="w-2/2 flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/5FnQz47/Rectangle-3.png"
                        alt="Placeholder"
                        className="w-3/4 h-auto object-contain"
                    />
                </div>

                {/* Right Side with Text */}
                <div className="w-2/2 flex flex-col justify-center ">

                    <p className="mt-4 p-2 text-left text-base text-gray-700 bg-slate-100">
                        Welcome to Fresh Harvest, your premier destination for high-quality and <br>
                        </br>fresh produce. We are passionate about providing you with the finest fruits,<br></br>
                        vegetables, and salad ingredients to nourish your body and delight your <br></br>
                        taste buds. With a commitment to excellence, sustainability, and customer<br></br>
                        satisfaction, Fresh Harvest is here to revolutionize your grocery <br></br>shopping experience.
                    </p>




                </div>

            </div>
            <div className="mt-5">
                <p className="text-lg font-medium p-2 text-center text-lime-700">Our Blog</p>
                <h1 className="text-4xl font-bold leading-tight mt-1 p-2">Fresh Harvest Blog</h1>
                <p className="mt-4 p-2 text-center text-base text-gray-700">
                    Welcome to the Fresh Harvest Blog, your go-to resource for all things<br></br> related to fresh produce, healthy eating, and culinary inspiration.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-4 p-5">
                {/* Card 1 */}
                <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left">
                    <img
                        src="https://i.ibb.co.com/rfdgjRC/image-2.png"
                        alt="Placeholder"
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <p className='text-sm pt-2 text-slate-400'>May 23, 2024</p>
                    <h2 className="text-base font-semibold mt-4">The Art of Meal Prepping: How to Save Time <br></br>and Eat Healthy Throughout the Week</h2>
                    <p className='text-amber-500'>Read More </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>

                {/* Card 2 */}
                <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left">
                    <img
                        src="https://i.ibb.co.com/DwC73p5/image-3.png"
                        alt="Placeholder"
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <p className='text-sm pt-2 text-slate-400'>May 23, 2024</p>
                    <h2 className="text-base font-semibold mt-4">The Art of Meal Prepping: How to Save Time <br></br>and Eat Healthy Throughout the Week</h2>
                    <p className='text-amber-500'>Read More </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>

                {/* Card 3 */}
                <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left">
                    <img
                        src="https://i.ibb.co.com/QYSbL86/image-4.png"
                        alt="Placeholder"
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <p className='text-sm pt-2 text-slate-400'>May 23, 2024</p>
                    <h2 className="text-base font-semibold mt-4">The Art of Meal Prepping: How to Save Time <br></br>and Eat Healthy Throughout the Week</h2>
                    <p className='text-amber-500'>Read More </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>

            </div>


            <footer className="footer bg-base-200 text-base-content mt-5 p-10">
                <aside>
                    <div className="flex shrink-0 items-center">
                        <img className="h-8 w-auto" src="../../../public/Logo.svg" alt="Your Company" />
                    </div>
                    <a href="#" className="rounded-md px-1 py-1 text-2xl font-bold font-medium text-black"><h2>Fresh Harvests</h2></a>
                    <p className='text-xs mt-5 text-slate-500'>Download App:</p>
                    <div className="flex space-x-4 w-1/4">
                        <img src="../../../public/appstore.svg" alt="App Store" className="h-12 w-2/2 object-contain" />
                        <img src="../../../public/googleplay.svg" alt="Google Play" className="h-12 w-2/2 object-contain" />
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick links 1</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Detail Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick links 2</h6>
                    <a className="link link-hover">Favorites</a>
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Sign in</a>
                    <a className="link link-hover">Register</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact us</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>



        </div>
    );
};

export default HomePage;