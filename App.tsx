import {FlatList, Image, StyleSheet, Text, View, StatusBar, Keyboard} from 'react-native';
import {colors} from "./src/theme/colors";
import {Input} from "./src/components/Input";
import {Feather} from '@expo/vector-icons';

import Logo from './assets/logo.png';
import {Button} from "./src/components/Button";
import {Task, TaskProps} from "./src/components/Task";
import {EmptyList} from "./src/components/EmptyList";
import {useState} from "react";

export default function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [taskText, setTaskText] = useState('');
    const [errorTaskText, setErrorTaskText] = useState('');
    const [totalTaskDone, setTotalTaskDone] = useState(0);
    const [isConfetti, setIsConfetti] = useState(false);

    function handleDeleteTask(taskDelete: TaskProps) {
        let totalTaskDone = 0;
        const newTasksList = tasks.filter(task => {
            if (task.id !== taskDelete.id && task.done) {
                totalTaskDone++;
            }

            return task.id !== taskDelete.id;
        });
        setTasks(newTasksList);
        setTotalTaskDone(totalTaskDone);
    }

    async function handleDoneTask(taskSelected: TaskProps) {
        const newTasksList = tasks.map(task => {
            if (task.id === taskSelected.id) {
                task.done = !task.done;
            }
            return task;
        });


        console.table(tasks.find(task => task.id === taskSelected.id))

        let totalTaskDone = 0;
        tasks.find(task => {
            if (task.done) {
                totalTaskDone++;
            }
        });

        if (totalTaskDone === tasks.length) {
            setIsConfetti(true);
        }

        setTasks(newTasksList)

        setTotalTaskDone(totalTaskDone);

        setTimeout(() => {
            setIsConfetti(false)
        }, 5000)

    }

    function handleAddNewTask() {

        if (!taskText) {
            setErrorTaskText('Informe o nome da tarefa');
            return;
        }

        const newTask = {
            id: new Date().getTime().toString(),
            text: taskText,
            done: false
        }

        setTasks((state) => [...state, newTask])
        setErrorTaskText('');
        setTaskText('');
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <View style={styles.header}>
                <Image source={Logo}/>
            </View>

            <View style={styles.content}>

                <View style={styles.form}>
                    <Input
                        placeholder="Adicione uma nova tarefa"
                        value={taskText}
                        onChangeText={setTaskText}
                    />
                    {errorTaskText && !taskText &&
                        <Text style={styles.formStatus}>
                            {errorTaskText}
                        </Text>
                    }

                    <Button
                        onPress={handleAddNewTask}
                    />
                </View>

                <View style={styles.statusContainer}>
                    <View style={styles.status}>
                        <Text style={styles.statusCreate}>
                            Criadas
                        </Text>
                        <View style={styles.statusCountCircle}>
                            <Text style={styles.statusCount}>
                                {tasks.length}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.status}>
                        <Text style={styles.statusDone}>
                            Concluídas
                        </Text>
                        <View style={styles.statusCountCircle}>
                            <Text style={styles.statusCount}>
                                {totalTaskDone}
                            </Text>
                        </View>
                    </View>
                </View>


                <FlatList
                    data={tasks}
                    contentContainerStyle={styles.taskList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<EmptyList/>}
                    renderItem={({item}) => (
                        <Task
                            task={item}
                            handleCheckPress={handleDoneTask}
                            handleDeletePress={handleDeleteTask}
                        />
                    )}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray['600'],
    },
    header: {
        height: 220,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray['700'],
    },
    content: {
        padding: 24,
    },
    form: {
        marginTop: -54,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    formStatus: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.danger,
        position: 'absolute',
        bottom: -18,
        left: 0
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 42,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statusCreate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.blue
    },
    statusDone: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.purple
    },
    statusCountCircle: {
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor: colors.gray['400'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusCount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.gray['200'],
    },
    taskList: {
        marginTop: 32,
    }
});
