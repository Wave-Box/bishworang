import React from 'react';
import Title from '../Reviews/Title';

const Description = () => {
    return (
        <div>
            <div className="">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, alias nam! A, vitae maxime fugiat, expedita alias natus assumenda, amet aperiam molestiae asperiores repellat commodi sunt repellendus nisi nobis minima?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolore dolor blanditiis eos soluta exercitationem qui rerum quaerat ea esse! Aspernatur corporis dolore nisi recusandae quidem assumenda cupiditate cum sint!</p>
                <ul className='list-disc list-inside'>
                    <li> Type Of Packing Bottle</li>
                    <li> Color</li>
                    <li> Quantity Per Case</li>
                    <li> Ethyl Alcohol</li>
                </ul>

                <div className="divider"></div>

                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum neque veritatis labore. Animi nisi voluptatibus, ducimus neque nostrum quidem temporibus illum et delectus ratione modi dolores quam velit aspernatur.
                    <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quidem nisi praesentium tempore necessitatibus, aperiam, eum beatae minima velit unde nesciunt odit voluptatibus officiis fugit quis autem officia sunt eveniet.
                </p>

                <Title text={"Packaging & Delivery"} />
                <div className="divider"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores alias eaque deserunt quas! Veniam vero tempore nostrum saepe est, eum alias nesciunt neque assumenda nemo vel voluptates odit sint illum.</p>
            </div>
        </div>
    );
};

export default Description;