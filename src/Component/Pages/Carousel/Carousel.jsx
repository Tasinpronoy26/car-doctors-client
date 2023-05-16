import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';

const Carousel = () => {
    return (
        <div className="carousel h-[650px] w-full mt-10 mb-10 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full " />

                <div className="absolute h-full flex items-center pl-10 left-0 top-0 text-white bg-gradient-to-r from-black">
                    <div className='w-1/2 space-y-7'>
                        <h1 className='text-5xl font-extrabold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline  text-white">Discover More</button>
                            <button className="btn btn-outline text-white ml-5">Latest Project</button>
                        </div>
                    </div>

                </div>

                <div className="absolute transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide4" className="btn btn-circle mr-5 ">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute h-full flex items-center pl-10 left-0 top-0 text-white bg-gradient-to-r from-black">
                    <div className='w-1/2 space-y-7'>
                        <h1 className='text-5xl font-extrabold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white ml-5">Latest Project</button>
                        </div>
                    </div>

                </div>

                <div className="absolute transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute h-full flex items-center pl-10 left-0 top-0 text-white bg-gradient-to-r from-black">
                    <div className='w-1/2 space-y-7'>
                        <h1 className='text-5xl font-extrabold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white ml-5">Latest Project</button>
                        </div>
                    </div>

                </div>

                <div className="absolute transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute h-full flex items-center pl-10 left-0 top-0 text-white bg-gradient-to-r from-black">
                    <div className='w-1/2 space-y-7'>
                        <h1 className='text-5xl font-extrabold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white ml-5">Latest Project</button>
                        </div>
                    </div>

                </div>

                <div className="absolute transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Carousel;