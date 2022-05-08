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

            <div>
                <h2 className='text-center'>Differences between sql and nosql databases ?</h2>

                <p className='fs-5'>SQL is Relational Database Management system type. noSQl is Non-relational or distributed database system.SQl data save in table structure on the hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. SQL have fixed schema noSQL have dynamic schema.
                    SQL databases are not suited for pecking-order data storage. NoSQL databases are best suited for pecking-order data storage.
                    SQL is Vertically Scalable noSQL is Horizontally scalable.
                </p>
            </div>


            <div>
                <h2 className='text-center'>What is the purpose of jwt and how does it work ?</h2>
                <p className='fs-5'>
                    Jwt is a system that shares information between two parties - a client and a server securely . JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. JSON Web Tokens consist of three parts -  Header, Payload, Signature
                    Header content mechanism type payload content claims type and Signature encoded header and payload

                </p>
            </div>




        </div>
    );
};

export default Blogs;
