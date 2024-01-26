import {StyleSheet} from "react-native";
import {colors} from "../../theme/colors";

export const styles = StyleSheet.create({
    emptyTodoList: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginTop: 32,
        borderTopWidth: 1,
        borderTopColor: colors.gray['300'],
        paddingVertical: 64,
    },
    emptyTodoListTextBold: {
        color: colors.gray['300'],
        fontWeight: 'bold',
        fontSize: 14,
    },
    emptyTodoListText: {
        color: colors.gray['300'],
        fontWeight: '400',
        fontSize: 14,
    },
    image: {
        marginBottom: 16,
    }
});