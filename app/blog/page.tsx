'use client'

import moment from 'moment';
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Blog() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/articles');
            const data = await res.json();
            setPosts(data?.articles);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen md:p-5 p-2">
            <h1 className="text-5xl text-center text-cyan-400 md:mt-0 mt-5" style={{ textShadow: '5px 5px #075985' }}>The Cybernetic Blog</h1>
            <p className="p-2 text-center mt-3">Here's where I post my opinions, I suppose.</p>
            <div className="flex justify-center">
                <div className="p-5 space-y-5 my-5 w-full md:w-3/4">
                    {/* Blog Post*/}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-flow-row gap-4">
                        {posts.map((post: any) => (
                            <div key={post?.id}>
                                <img src="/test-v3.jpg" className='max-w-[700px] w-full mb-5' />
                                <h3 className="text-2xl font-semibold">{post.title}</h3>
                                <h4 className="text-xl text-zinc-300">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                                <p>{post.description}</p>
                                <div className="text-zinc-300 flex items-center space-x-2 my-1">
                                    <p>Tags: </p>
                                    {post.tags.map((tag: any) => (
                                        <span className="text-sm bg-gray-700 text-white px-2 py-1">{tag}</span>
                                    ))}
                                </div>
                                <p className='text-cyan-500'>Posted by Lynix</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}