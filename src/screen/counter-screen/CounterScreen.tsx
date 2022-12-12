import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../constant/theme';
import { selectCounter } from '../../redux/counter-slice';
import { ButtonComponent } from './components';
import { increase, decrease } from '../../redux/counter-slice'

export const CounterScreen = () => {
    const counter = useSelector(selectCounter) 
    const dispatch = useDispatch()

    const onDecrease = () => dispatch(decrease())
    const onIncrease = () => dispatch(increase())

    return (
        <View style={styles.container}>
            <ButtonComponent title='-1' onPress={onDecrease} />
            <Text style={styles.value}>{counter}</Text>
            <ButtonComponent title='+1' onPress={onIncrease}/>
        </View>
    );
}

const styles = StyleSheet.create({
    value:{
        color: colors.value,
        fontSize:64,
        fontWeight:'bold',
        marginVertical:100
    },
    container: {
        backgroundColor: colors.background,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});
