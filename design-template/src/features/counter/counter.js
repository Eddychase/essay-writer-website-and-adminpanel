import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './counter.css'



export function Counter() {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <div>
      <div className='counter select-form'>
       <h1  className='form-headings'>Pages</h1> 
       <div className="buttons">
        <button
        className='add-button'
          aria-label="Increment value"
          onClick={() => dispatch(increment()
            )}
        >
          +
        </button>
        <span className='page-count'>{count}</span>
        <button
        className='minus-button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          _
        </button>
        </div>
      </div>
    </div>
  )
}