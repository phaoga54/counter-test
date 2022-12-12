import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../constant/theme';

type Props = {
    title: string,
    onPress: () => void
}

export const ButtonComponent = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    label:{
        fontWeight: 'bold',
        fontSize:24,
        color:colors.title
    },
    container: {
        backgroundColor: colors.backgroundButton,
        paddingHorizontal: 69,
        paddingVertical:16,
        borderRadius:24
    },
});
