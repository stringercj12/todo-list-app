import {Text, TextInput, TextInputProps, View} from "react-native";
import {styles} from "./styles";
import {colors} from "../../theme/colors";
import {Button} from "../Button";


interface Props extends TextInputProps {

}

export function Input({...rest}: Props) {
    let focus = false;
    return (
        <TextInput
            style={[styles.input, focus && styles.borderFocus]}
            onFocus={() => focus}
            placeholderTextColor={colors.gray['300']}
            {...rest}
        />
    );
}