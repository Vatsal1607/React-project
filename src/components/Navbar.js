import React from 'react';
import $ from 'jquery';
import propTypes from 'prop-types';




export default function Navbar(props){
    return(
        <><div className="lg:flex bg-black lg:flex-row flex lg:justify-between  justify-between  lg:mt-8 ">
        <div className="lg:flex lg:flex-row ">
            <div className=" text-white text-2xl">{props.logo}</div>
            <div id="navbar" className="lg:flex lg:flex-row hidden  ">
                <div className=" lg:flex lg:flex-row lg:ml-auto flex flex-col md:flex md:flex-col   ">
                    <a href="#"
                        className="lg:inline-flex lg:w-auto lg:px-8  uppercase font-normal font-sans py-1 rounded text-gray-400 hover:text-white "><span>{props.title}</span></a>
                    <a href="#"
                        className="lg:inline-flex lg:w-auto lg:px-8 uppercase font-normal font-sans py-1 rounded text-gray-400 hover:text-white"><span>{props.service}</span></a>
                    <a href="#"
                        className="lg:inline-flex lg:w-auto lg:px-8 uppercase font-normal font-sans py-1 rounded text-gray-400 hover:text-white"><span>{props.about}</span></a>
                    <a href="#"
                        className="lg:inline-flex lg:w-auto lg:px-8 uppercase font-normal font-sans py-1 rounded text-gray-400 hover:text-white"><span>ContactUs</span></a>
                </div>
            </div>
        </div>
        <div id="menu" className=" lg:hidden mt-4 lg:w-min"><button className="text-white"><i id="menuIcon"
                    className="fa-solid fa-bars menuback"></i></button></div>
                
    </div>
    
    </>

    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'set title',
    about: 'about',
    service: 'services',
    logo: 'WELLBENIX'
}