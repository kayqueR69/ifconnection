import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native"
import { DatePickerModal } from "react-native-paper-dates";
import { Provider as PaperProvider} from 'react-native-paper'
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker"

export function Input ({type, name, handleChange, placeHolder}) {
    return (
        <>
            <TextInput id={name} keyboardType={type} onChange={handleChange} placeholder={placeHolder} style={styles.input}/>
        </>
    )
}

export function InputDate ({ onChange }) {

    const [qtdDias, setQtdDias] = useState([])
    const [meses, setMeses] = useState([])
    const [anos, setAnos] = useState([])

    useEffect(() => {

        const listaAnos = []
        for (let c = 2025; c >= 1925; c--) {
            listaAnos.push(c)
        }
        setAnos(listaAnos)

        const listaMeses = []
        for (let c = 1; c <= 12; c++) {
            listaMeses.push(c)
        }
        setMeses(listaMeses)

        const listaDias = []
        for (let c = 1; c <= 31; c++) {
            listaDias.push(c)
        }
        setQtdDias(listaDias)

    }, [])

    const [data, setData] = useState('DD/MM/AAAA')

    const onDayChange = (e) => {
        const dia = e.length === 1 ? '0' + e : e;  
        const novaData = dia + data.substring(2);
        onChange(novaData)
        setData(novaData);
    }
    const onMonthChange = (e) => {
        const mes = e.length === 1 ? '0' + e : e;
        const novaData = data.substring(0,3) + mes + data.substring(5);

        if (e == 2) {
            const dias = qtdDias;
            dias.splice(-3, 3)
            setQtdDias(dias)
        } else if (e == 4 || e == 6 || e == 9 || e == 11) {
            const dias = qtdDias;
            dias.splice(-1, 1)
            setQtdDias(dias)
        }

        onChange(novaData)
        setData(novaData);
    }
    const onYearChange = (e) => {
        const novaData = data.substring(0,6) + e
        onChange(novaData)
        setData(novaData);
    }

    return (
        <View>
            <Text>Data de Nascimento</Text>
            <View style={styles.containerDateInput}>
                <InputSelect placeHolder='dia' options={qtdDias} onChange={onDayChange}/>
                <InputSelect placeHolder='mes' options={meses} onChange={onMonthChange}/>
                <InputSelect placeHolder='ano' options={anos} onChange={onYearChange}/>
            </View>
        </View>
    )

}

export function InputRadio ({onChange, options}) {

    const [selectOption, setSelectOption] = useState(null)

    const handlePress = (option) => {
        setSelectOption(option)
        onChange(option)
    }

    return (
        <View style={styles.radio}>

            <Text>Gênero</Text>

            <View style={styles.conatinerRadio}>
                {options.map((option, key) => (
                    <TouchableOpacity style={styles.radioSelect} key={key} onPress={() => handlePress(option)} >
                        {selectOption === option ? (<View style={styles.selectedRb}></View>) : (<View style={styles.radioCircle}></View>)}
                        <Text style={styles.textRadio}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}

export function InputSelect ({onChange, options, label, placeHolder, type}) {

    const [open, setOpen] = useState(true);
    const[value, setValue] = useState();

    const handleChange = (itemValue) => {
        setOpen(false)
        onChange(itemValue)
    }

    return (
        <View>
            <Text>{label}</Text>

            <Picker selectedValue={value} onValueChange={handleChange} style={type === 'normal' ? styles.input : styles.dateInput}>
                <Picker.Item label={placeHolder} value={''} enabled={open}/>
                {options.map((item, index) => (
                    <Picker.Item label={item} value={item} key={index}/>
                ))}
            </Picker>

        </View> 
    )
}

const styles = StyleSheet.create({
    input : {
        height : 40,
        width : 300,
        padding : 5,
        borderRadius : 7,
        borderWidth : 1,
        borderColor : 'gray',
        borderStyle : 'solid',
        marginBottom : '.7em',
    },
    containerDateInput : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    dateInput : {
        height : 40,
        width : 80,
        padding : 5,
        borderRadius : 7,
        borderWidth : 1,
        borderColor : 'gray',
        borderStyle : 'solid',
        marginBottom : '.7em',
    },
    radio : {
        marginBottom : '.7em'
    },
    conatinerRadio : {
        marginTop : '.5em',
        flexDirection : 'row'
    }, 
    radioSelect : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    }, 
    radioCircle : {
        height : '15px',
        width : '15px',
        borderWidth : '1px',
        borderStyle : 'solid',
        borderColor : 'black',
        backgroundColor : 'white',
        borderRadius : '50%',
        marginRight : '.5em'
    },
    selectedRb : {
        height : '15px',
        width : '15px',
        borderWidth : '1px',
        borderStyle : 'solid',
        borderColor : 'black',
        backgroundColor : 'green',
        borderRadius : '50%',
        marginRight : '.5em'
    },
    textRadio : {
        marginRight : '.7em'
    }
    
}) 