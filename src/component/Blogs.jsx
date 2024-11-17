import React from 'react'
import { AppContext } from '../context/AppContext';
import Spineer from './Spineer';
import { useContext } from 'react';

const Blogs = () => {
    // consuming the data from context
    const { post, loading } = useContext(AppContext);
    console.log("printing inside Blog component", post, loading);
    return (
        <div className='w-11/12 max-w-[550px] flex flex-col py-3 gap-y-6 mt-[66px] mb-[100px]'>
            {
                loading ? (<Spineer />) : (
                post.length === 0 ? 
                    (<div>No Post found.</div>) :
                    (post.map((po) => (
                        <div key={po.id}>
                            <p className='font-bold text-xl'>{po.title}</p>
                            <p className='text-[15px]'>By <span className='italic'>{po.author}</span> on <span className='underline font-bold'>{po.category}</span></p>
                            <p className='text-[15px]'>Posted on <span>{po.date}</span></p>
                            <p className='text-[15px] mt-[8px]'>{po.content}</p>
                            <div className='flex flex-wrap gap-x-3'>
                                {po.tags.map( (tag, index) => {
                                    return <span className="text-sm text-blue-500 underline font-bold" key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )))
                )
            } 
        </div>
    )
}

export default Blogs
