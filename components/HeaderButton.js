import React from 'react'
import { Platfrom } from 'react-native'

import { HeaderButton } from 'react-navigation-header-buttons'

import { Ionicons } from '@expo/vector-icons'

import Colors from '../Constant/Colors'

const CustomHeaderButton = (props) => {
    return(
        <HeaderButton
        //pass all props
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}></HeaderButton>
    )
}

export default CustomHeaderButton