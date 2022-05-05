import React from 'react';

const Blogs = () => {

    return (
        <div className='container blogs mt-5'>

            <div>
                <h2 className='text-center'>Difference between javascript and nodejs ?</h2>

                <p className='fs-5'>
                    JavaScript is a high-level, often just-in-time compiled language . it update of version ECMAscript . It Mainly use client side.In run with V8 engine.It can play with DOM.Some of the javascript frameworks are RamdaJS, TypedJS etc.

                    Nodejs is  cross -platform and open source Javascript runtime environment that allows the javascript to be run outside the browser .It Mainly use server-side.It  is not capable for play with DOM. Nodejs modules are Lodash, express etc that inserted by npm.
                </p>
            </div>

            <div>
                <h2 className='text-center'>When should you use nodejs and when should you use mongodb ?</h2>

                <p className='fs-5'>
                    Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is very .JS receives a CPU bound task, so it is a very good choice when you need to do several things at the same time.Node. js would set all the CPU available to process it first, and then answer other requests queued.That results in slow processing and overall delay in the event loop, which is why Node. js is not recommended for heavy computation.
                </p>

                <p className='fs-5'>
                    <span>MongoDB</span> is a NoSQL database. It is easy to  learn and use  . MongoDB is a good choice when data is document type and doesn't fit well into the schema of a relations database. MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents
                </p>


            </div>




        </div>
    );
};

export default Blogs;
