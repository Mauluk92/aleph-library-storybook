import React from 'react'
import {ALabel} from "./Label";

const color = {
    options: ['denim', 'black'],
    control:  {
        type: 'select',
        labels: {
            denim: 'Denim',
            black: 'Black'
        }
    },
    description: 'Font color'
}

const fontWeight = {
    options: ['bold', 'medium'],
    control: {
        type: 'radio',
        labels: {
            bold: 'Bold',
            medium: 'Medium'
        }
    },
    description: 'Font weight'
}

const fontSize = {
    options: ['small', 'large', 'x-large'],
    control: {
        type: 'select',
        labels: {
            small: 'Small',
            large: 'Large',
            'x-large': 'Extra large'
        }
    }
}

const shadowSwitch = {
    control: 'boolean'
}

const shadow = {
    options: ['shadow'],
    control: {
        type: 'select',
        labels: {
            shadow: 'Shadow'
        }
    },
    if: { arg: 'shadowSwitch'}
}

export default {
    title: 'Example/Label',
    component: ALabel,
    argTypes: {
        color,
        fontWeight,
        fontSize,
        shadowSwitch,
        shadow
}

}

const Template = (args) => <ALabel {...args}></ALabel>

export const Example = Template.bind({});
Example.args = {
    content: 'Label Content',
    color: 'denim',
    fontWeight: 'normal',
    fontSize: 'small'
};