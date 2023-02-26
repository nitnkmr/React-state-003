import React from 'react'

const Input = ({type,func,origin}) => {
    
  return (
    <div className='bar'>
       <label htmlFor="input">{type}
        <input type="checkbox" id='input' onClick={()=>func(origin)} />
       </label>
    </div>
  )
}

export default Input