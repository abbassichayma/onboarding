
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Cars(props:any) {
  return (
   <div>
<div className="grid gap-2 lg:grid-cols-4 mb-5" >
                {props.posts?.map((items:any) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm " key={items.id}>
                        <Link href={`/home/${items.id}`}>
                        <Image
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                            width="150"
                            height="100"  
                        />
                        </Link>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
              1              </h4>
                            <p className="mb-2 leading-normal">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Laboriosam soluta et aliquam illo quae amet dolorem,<br></br>
                              molere odio.
                            </p>
                            
                            <Link href={`/home/${items.id}`}><button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
   </div>

  )
}


export async function getStaticProps() {
   const res = await fetch("http://localhost:3000/api/cars");
  const data = await res.json();
   return{
    props:{
        posts:data
    }
   }
}


{/* <div>
        
{props.posts.map((el:any)=>
<div key={el.id}>
<Link href={`/home/${el.id}`}><h1 >{el.title}</h1></Link>
</div>

)}

</div> */}