import {useState} from 'react'

const LikeBtn = () => {

    const [liked, setLiked] = useState(false)
    const [count, setCount] = useState(0)    

    const likeHandler = () => {
        setLiked(prev => !prev)
    }

    let counter = () =>{
        setCount(prev => liked ? prev - 1 : prev + 1)
    }

    return (
        <div  className='p-8 bg-gray-200 rounded mt-12 flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl font-bold text-gray-800'>Like Button</h1>

            <button className='bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-4' onClick={() =>{
                likeHandler(),
                counter()
            }}>
                { liked ? '❤️ Liked' : '🤍 Like'}
            </button>
            <p> {liked ? `Likes: ${count}` : `Likes: ${count}`} </p>
        </div>
    )
}

export default LikeBtn
