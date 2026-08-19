import React from 'react'
import CounterApp from './projects/CounterApp'
import LikeBtn from './projects/LikeBtn'
import ShowHidePassword from './projects/ShowHidePassword'
import ToDoApp from './projects/ToDoApp'

const App = () => {
  return (
    <div className='h-screen w-full'>

      <CounterApp />
      <LikeBtn />
      <ShowHidePassword />
      <ToDoApp />

    </div>
  )
}

export default App
