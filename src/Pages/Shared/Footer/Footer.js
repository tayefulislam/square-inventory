import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    const date = new Date().getFullYear()
    console.log(date)


    return (
        <div className='container footer'>



            <div>
                <p className='address'>
                    5/1-B, Zigatola, Dhaka-1209 <br />

                    E-mail: info@squareinventory.com <br />

                    Hotline: 09611-000000
                </p>

            </div>



            <div className='copyright'>
                <p className='text-center '> © 2020 - {date} Square Inventory. All right reserved</p>
            </div>

            <div className='icon'>

                <i className="fa-brands fa-facebook p-3"></i>
                <i className="fa-brands fa-instagram-square p-3"></i>
                <i className="fa-brands fa-twitter p-3"></i>

            </div>









        </div>
    );
};

export default Footer;