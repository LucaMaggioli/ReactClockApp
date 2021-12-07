import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import AlarmModel from './../Models/AlarmModel';
import Alarm from "./Alarm";

export default function AlarmsView({alarms: alarmsJSON}){

    let alarmList = [];
    console.log(alarmsJSON);


    for (let key in alarmsJSON){
        let alarm = new AlarmModel(alarmsJSON[key]['id'], alarmsJSON[key]['time']);
        alarmList.push(<Alarm key={key} alarm={alarm}/>);
    }

    return (
        <View style={styles.alarmsContainer}>
            <Text>Hello, From Alarms Container!</Text>
            {alarmList}
        </View>
    );
}

const styles = StyleSheet.create({
    alarmsContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    }
});



