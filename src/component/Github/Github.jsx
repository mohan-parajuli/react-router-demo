
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    return (
        <>
        <div className='bg-gray-600 text-3xl text-center text-white p-4'>Github Followers:{data.followers}</div>
        </>
    )
}

export default Github

export const githubinfo= async()=>{
    const response=await fetch("https://api.github.com/user/mohanparajuli")
    return response.json();
}