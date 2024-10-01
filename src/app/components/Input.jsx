import React from 'react'

const Input = ({id,label, type, placeholder}) => {
  return (
    <div>
        <label htmlFor=''></label>
        <input type={type} placeholder={placeholder}
        className='border bg-grey-200 py-1 px-3 rounded w-full'/>
    </div>
  )
}

export default Input