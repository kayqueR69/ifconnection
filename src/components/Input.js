import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native"
import { DatePickerModal } from "react-native-paper-dates";
import { Provider as PaperProvider} from 'react-native-paper'
import { useState } from "react";
import { Picker } from "@react-native-picker/picker"

export function Input ({type, name, handleChange, placeHolder}) {
    return (
        <>
            <TextInput id={name} keyboardType={type} onChange={handleChange} placeholder={placeHolder} style={styles.input}/>
        </>
    )
}

export function InputDate ({usuario, onChange}) {

    const [date, setDate] = useState(undefined)
    const [open, setOpen] = useState(false)

    const handleConfirm = (params) => {
        setOpen(false)
        setDate(params.date)
        onChange(params.date)
    }

    return (
        <PaperProvider>
            <Text style={styles.label}>Data de Nacimento</Text>
            <View style={styles.dateInput}>
                <Text style={styles.textDate}>{usuario.nascimento}</Text>
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.dateAlterButton}>
                    Alterar
                </TouchableOpacity>
            </View>
            
            <DatePickerModal
                locale="pt"
                mode="single"
                visible={open}
                onDismiss={() => setOpen(false)}
                date={undefined}
                onConfirm={handleConfirm}
            />

        </PaperProvider>
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

            <Text style={styles.label}>Gênero</Text>

            <View style={styles.conatinerRadio}>
                {options.map((option, key) => (
                    <TouchableOpacity style={styles.radioSelect} key={key} onPress={() => handlePress(option)} >
                        {selectOption === option ? (<View style={styles.selectedRb}></View>) : (<View style={styles.radioCircle}></View>)}
                        <Text>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}

export function InputSelect ({onChange, options, label}) {

    const [open, setOpen] = useState(true);
    const[value, setValue] = useState();

    const handleChange = (itemValue) => {
        console.log('teste')
        setOpen(false)
        onChange(itemValue)
    }

    return (
        <View>
            <Text>{label}</Text>

            <Picker selectedValue={value} onValueChange={handleChange} style={styles.input}>
                <Picker.Item label="selecione..." value={''} enabled={open}/>
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

    dateInput : {
        height : 40,
        width : 300,
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
    },
    dateAlterButton : {
        width : '30%',
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
        color : 'white',
        backgroundColor : 'green',
        borderRadius : 10
    },
    textDate : {
        fontSize : '1em'
    },
    label : {
        marginLeft : '1.1em'
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
        marginInline : '.5em'
    },
    selectedRb : {
        height : '15px',
        width : '15px',
        borderWidth : '1px',
        borderStyle : 'solid',
        borderColor : 'black',
        backgroundColor : 'green',
        borderRadius : '50%',
        marginInline : '.5em'
    },
    
}) 