import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "./styles";
import React, {Component, ElementType, ReactNode} from "react";
import {Feather} from "@expo/vector-icons";
import {colors} from "../../theme/colors";


interface Props extends TouchableOpacityProps {
}

export function Button({...rest}: Props) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Feather name="plus-circle" size={24} color={colors.gray['100']}/>
        </TouchableOpacity>
    )
}