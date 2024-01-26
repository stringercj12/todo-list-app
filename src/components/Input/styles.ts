import {StyleSheet} from "react-native";
import {colors} from "../../theme/colors";

export const styles = StyleSheet.create({
    input: {
        height: 54,
        color: colors.gray['300'],
        backgroundColor: colors.gray['500'],
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.gray['700'],
        borderRadius: 8,
        padding: 16,
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
    },
    borderFocus: {
        borderColor: colors.purple_dark,
    }
})