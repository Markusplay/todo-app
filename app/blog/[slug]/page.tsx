import {Metadata} from "next";

type Props = {
    params:{
        slug:string;
    };
}

async function getData(slug:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{
        next:{
            revalidate:60
        }
    });

    return response.json();
}

export async function generateMetadata({params:{slug}}:Props):Promise<Metadata> {
    return{
        title: slug
    }
}

export default async function Post({params}:Props){
    const post = await getData(params.slug);
    return(
        <>
        <h1>Post with post id {params.slug}</h1>
        <p>{post.body}</p>
        </>)
}