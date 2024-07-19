import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='flex flex-col lg:flex-row my-0 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 mt-5 mb-10'>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                    <img src={product.image} alt="" className='h-20 w-20 sm:h-24 sm:w-28 md:h-32 md:w-32 lg:h-[125px] lg:w-[170px]' />
                    <img src={product.image} alt="" className='h-20 w-20 sm:h-24 sm:w-28 md:h-32 md:w-32 lg:h-[125px] lg:w-[170px]' />
                    <img src={product.image} alt="" className='h-20 w-20 sm:h-24 sm:w-28 md:h-32 md:w-32 lg:h-[125px] lg:w-[170px]' />
                    <img src={product.image} alt="" className='h-20 w-20 sm:h-24 sm:w-28 md:h-32 md:w-32 lg:h-[125px] lg:w-[170px]' />
                </div>
                <div>
                    <img src={product.image} alt="" className='w-[300px] sm:w-[350px] md:w-[450px] h-auto md:h-[550px]' />
                </div>
            </div>

            <div className='my-4 lg:my-0 lg:mx-16 flex flex-col'>
                <h1 className='text-black text-2xl sm:text-3xl md:text-4xl font-bold'>{product.name}</h1>
                <div className='flex items-center mt-4 gap-1 font-medium'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p className='text-black font-medium pl-1'>125</p>
                </div>

                <div className='flex gap-3 font-medium mt-2 mb-4'>
                    <div className='text-red-600 line-through'>
                        ${product.old_price}
                    </div>
                    <div className='text-xl text-black'>
                        ${product.new_price}
                    </div>
                </div>

                <div>
                    <p>Veirdo® Oversized Baggy Fit Drop Shoulder Half Sleeves Round Neck Solid Pure 100% Cotton T-Shirt for Men </p>
                </div>
                <div>
                    <h1 className='mt-8 text-black text-lg sm:text-xl font-bold'>Select Size</h1>
                    <div className='flex gap-2 sm:gap-3 my-3 sm:my-7 mx-0'>
                        <div className='py-2 px-4 sm:py-4 sm:px-6 bg-slate-100 border border-slate-100 rounded-md cursor-pointer'>S</div>
                        <div className='py-2 px-4 sm:py-4 sm:px-6 bg-slate-100 border border-slate-100 rounded-md cursor-pointer'>M</div>
                        <div className='py-2 px-4 sm:py-4 sm:px-6 bg-slate-100 border border-slate-100 rounded-md cursor-pointer'>L</div>
                        <div className='py-2 px-4 sm:py-4 sm:px-6 bg-slate-100 border border-slate-100 rounded-md cursor-pointer'>XL</div>
                        <div className='py-2 px-4 sm:py-4 sm:px-6 bg-slate-100 border border-slate-100 rounded-md cursor-pointer'>XXL</div>
                    </div>
                </div>
                <button
                    onClick={() => { addToCart(product.id) }}
                    className='py-2 sm:py-4 px-4 sm:px-8 w-40 sm:w-56 bg-orange-600 font-medium text-lg sm:text-xl text-neutral-100 mb-4 sm:mb-10 border-none outline-none cursor-pointer'>
                    ADD TO CART
                </button>
                <p className='mt-2'><span className='font-bold'>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className='mt-2'><span className='font-bold'>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;


