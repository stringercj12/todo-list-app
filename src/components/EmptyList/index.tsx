import {styles} from "./styles";

import emptyTaskImg from '../../../assets/clipboard.png';
import {Image, Text, View} from "react-native";

export function EmptyList() {
    return (
        <View style={styles.emptyTodoList}>
            <Image source={emptyTaskImg}/>
            <View>
                <Text style={styles.emptyTodoListTextBold}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.emptyTodoListText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    );
}