import React from 'react'

function ColorMenu(props) {
    const {elements, name, colorOptionElements, menuIndex} = props
  
  return (
    <div className=' bg-green-600 h-16 w-96'>
        <h1>{name}</h1>
        <div className=' flex'>
        <div className='flex-1'>
            {colorOptionElements}
        </div> 
        <div className='flex-1'>
        {elements.map((element, index) => {
            return React.cloneElement(element, {key: index})
        }
        )}
        </div>
    </div>
    </div>
  )
}

export default ColorMenu