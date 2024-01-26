import {StyleSheet} from "react-native";
import {colors} from "../../theme/colors";

export const styles = StyleSheet.create({
    task: {
        flex: 1,
        minHeight: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.gray['400'],
        backgroundColor: colors.gray['500'],
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 20,
        gap: 8,
        marginTop: 8
    },
    taskDone: {
        borderColor: colors.purple_dark,
    },
    taskIcon: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskDelete: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskContainerTitle: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 14,
        color: colors.gray['100'],
    },
    taskTitleDone: {
        color: colors.gray['300'],
        textDecorationLine: 'line-through'
    },
    borderFocus: {
        borderColor: colors.purple_dark,
    }
})