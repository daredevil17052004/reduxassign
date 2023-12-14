import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { listAction, listSelector } from '../redux/reducer'

const LikeContainer = () => {

    const [counts, setCount] = useState(0)

    const count = useSelector(listSelector)
    const disptach = useDispatch();

    function handleLike(){
      disptach(listAction.like())
    }

    function handleUnlike(){
      disptach(listAction.unlike())
    }

  return (
    <div>
        {count}<br/>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnlike}>Unlike</button>
    </div>
  )
}

export default LikeContainer