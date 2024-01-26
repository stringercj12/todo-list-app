import {Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons, Feather} from "@expo/vector-icons";
import {colors} from "../../theme/colors";
import {styles} from "./styles";

interface Props {
    task: TaskProps;
    handleCheckPress: (task: TaskProps) => void;
    handleDeletePress: (task: TaskProps) => void;
}

export interface TaskProps {
    id: string;
    text: string;
    done: boolean;
}

export function Task({task, handleCheckPress, handleDeletePress}: Props) {
    return (
        <View style={[styles.task, task?.done && styles.taskDone]}>
            <TouchableOpacity style={styles.taskIcon} onPress={() => handleCheckPress(task)}>
                {task?.done ?
                    <MaterialIcons name="check-circle" size={24} color={colors.purple_dark}/>
                    :
                    <Feather name="circle" size={24} color={colors.blue}/>
                }
            </TouchableOpacity>
            <View style={styles.taskContainerTitle}>
                <Text style={[styles.taskTitle, task?.done && styles.taskTitleDone]}>
                    {task?.text}
                </Text>
            </View>
            <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeletePress(task)}>
                <Feather name="trash-2" size={20} color={colors.gray['300']}/>
            </TouchableOpacity>
        </View>
    );
}