import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import AlarmModel from './../Models/AlarmModel';
import Alarm from "./Alarm";
import {getListElementsBindedBy} from "../Services/clockService";

export default function AlarmsView({alarms: alarmsJSON}){

    let alarmList = [];
    console.log(alarmsJSON);


    for (let key in alarmsJSON){
        let alarm = new AlarmModel(alarmsJSON[key]['id'], alarmsJSON[key]['time']);
        alarmList.push(<Alarm key={key} alarm={alarm}/>);
    }
    //TODO 'react native string can't be outside of <Text>'
    // console.log(alarmList);
    // let bindedList = getListElementsBindedBy(alarmList, 2);
    // let bindedAlarmList = []
    // bindedList.forEach((bindedElements)=>{
    //     bindedAlarmList.push(<View key={bindedList.indexOf(bindedElements)}>{bindedElements}</View>);
    // });

    return (
        <View style={styles.alarmsContainer}>
            <Text>Hello, welcome to your Alarms</Text>
            {alarmList}
            {/*{bindedAlarmList}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    alarmsContainer:{
        flex:2,
        backgroundColor:"#ffff90",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:'100%',
        width:'100%',
        margin:0,
        padding:0,
    }
});



