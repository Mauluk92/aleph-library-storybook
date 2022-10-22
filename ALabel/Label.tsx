import React, {FC} from 'react'
import "./label.sass";

type FontColor = 'black' | 'white' | 'denim'
type FontWeight = 'medium' | 'bold'
type FontSize = 'small' | 'large' | 'x-large'
type Shadow = 'shadow'

interface ALabelProps {
    content?: string,
    color?: FontColor,
    fontWeight?: FontWeight,
    fontSize?: FontSize,
    shadow?: Shadow
}

export const ALabel : FC<ALabelProps> = (props) => {
    const properties = ['a-label', ...Object.values(props)]
    return(<p className={properties.join('-')}>{props.content}</p>)
}

