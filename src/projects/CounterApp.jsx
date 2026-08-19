import {useState} from 'react'

const CounterApp = () => {

    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    function jump5(){
        setCount(count + 5)
    }
    function reset(){
        setCount(0)
    }

  return (
    <div className='p-8 bg-gray-200 rounded mt-12 flex flex-col items-center justify-center'>

        <h1 className='text-8xl font-bold text-gray-800'>{count}</h1>
        <div className='btns'>
            <button onClick={increment} className='bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-4'>
                Increment
            </button>
            <button onClick={decrement} className='bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-4'>
                Decrement
            </button>
            <button onClick={jump5} className='bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-4'>
                Increase 5
            </button>
            <button onClick={reset} className='bg-red-800 hover:bg-red-950 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 mt-4'>
                Reset
            </button>
        </div>
      
    </div>
  )
}

export default CounterApp
