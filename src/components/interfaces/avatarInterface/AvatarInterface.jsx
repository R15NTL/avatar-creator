import React from 'react'
import { interfaceTree , styleOptions, pathOptions } from '../../../avatars/avatarCreator/avatarTree'
import AvatarColorOption from '../../buttons/AvatarColorOption'
import AvatarComponentOption from '../../buttons/AvatarComponentOption'
import ColorMenu from './components/ColorMenu'

function AvatarInterface() {
    const interfaceNames = Object.keys(interfaceTree)

    const interfaceComponents = interfaceNames.map((interfaceName) => {
        const interfaceInfo = interfaceTree[interfaceName]
        const colorOptionName = interfaceInfo.colors
        const colorOptionsIndex = interfaceInfo.colorIndex


        let option
        
        if (interfaceInfo.type === "color"){
            option = styleOptions[interfaceName]
        }
        if (interfaceInfo.type === "component"){
            option = pathOptions[interfaceName]
        }


        const optionElements = option.map((thisOption, optionIndex) => {
        if (interfaceInfo.type === "color"){
            return <AvatarColorOption key={interfaceName} option={thisOption} menuIndex={interfaceInfo.styleIndex} optionIndex={optionIndex}/>
        } if (interfaceInfo.type === "component"){
            return <AvatarComponentOption key={interfaceName} option={thisOption} componentIndex={interfaceInfo.styleIndex} optionIndex={optionIndex}/>
        }
           return <AvatarColorOption key={interfaceName} option={thisOption} />
        })

        let colorOptions

        if (colorOptionName){
            colorOptions = styleOptions[colorOptionName].map((colorOption,index) => {
                return <AvatarColorOption key={index} option={colorOption} menuIndex={colorOptionsIndex} optionIndex={index}/>
            })
        }
        

        return {
            name: interfaceInfo.name,
            type: interfaceInfo.type,
            components: optionElements,
            colorOptionElements: colorOptions
        }

    })

    const menuElements = interfaceComponents.map((interfaceComponent, index) => {
       return <ColorMenu key={interfaceComponent.name} 
       menuIndex={index} 
       elements={interfaceComponent.components} 
       name={interfaceComponent.name} 
       colorOptionElements={interfaceComponent.colorOptionElements}
       />
    })

  return (
    <div>
        {
        menuElements.map((menuElement) => {
            return menuElement
            })
            }
    </div>
  )
}

export default AvatarInterface