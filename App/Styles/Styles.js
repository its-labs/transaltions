import React, { Component } from 'react';
import { StyleSheet } from 'react-native'

// here styles begins for Homescreen 
export const cssHome = StyleSheet.create({
    conatianer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    viewRow1: {
        flexDirection: 'row'
    },
    viewRow2: {
        flexDirection: 'row',
        marginTop: 6
    },
    viewRow3: {
        flexDirection: 'row',
        marginTop: 6
    },
})
// here styles ends for Homescreen

// here styles begins for Grievance screen
export const cssGrievance = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 11,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15
    },
    input: {
        height: 38,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    text: {
        paddingTop: 16,
        color:'black'

    },
    input1: {
        height: 38,
        marginTop: 12,
        backgroundColor: 'steelblue',
        borderWidth: 1,
        borderColor: 'steelblue',
        alignSelf: 'stretch',
    },
    submitbotton: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 4
    },
    centerAlign: {
        textAlign: "right",
        color:'black',
        paddingTop: 16,
    },
    rightAlign: {
        textAlign: "left",
        color:'black',
        paddingTop: 16,
    }
})
// here styles ends for Grievenace screen

// here styles begins for Critical screen
export const cssCritical = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
        paddingTop: 44
    },
})
// here styles begins for critical screen

// here styles begins for PersonalDetalis screen
export const cssPersonal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 11
    },
    input: {
        height: 38,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
    },
    text: {
        paddingTop: 16,
        color:'black'
    },
    input1: {
        height: 38,
        marginTop: 12,
        backgroundColor: 'steelblue',
        borderWidth: 1,
        borderColor: 'steelblue',
        //alignSelf: 'stretc'
    },
    submitbotton: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    }
})
// here styles ends for PersonalDetalis screen

// here styles begins for Language screen
export const cssLanguage = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12


    },
    centerAlign: {
        textAlign: "right"
    },
    rightAlign: {
        textAlign: "left"
    }

})
// here styles ends for Language screen

// here styles begins for Idea screen 
export const cssIdea = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 11,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 11
    },
    input: {
        height: 66,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    text: {
        paddingTop: 16
    }
})
// here styles ends for Idea screen

// here styles begins for NearReport screen 
export const cssReport = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        height: 38,
        fontSize: 16,
        marginTop: 6,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    text: {
        paddingTop: 16,
        color: 'black'

    },
    input1: {
        height: 38,
        marginTop: 12,
        backgroundColor: 'steelblue',
        borderWidth: 1,
        borderColor: 'steelblue',
        alignSelf: 'stretch',
    },
    submitbotton: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 4
    },
    upload:{
        backgroundColor:'#E5E0DD',
        height:38,
        marginTop:12,
        borderWidth:1,
        borderColor:'white'
    },
    uploadText:{
        color:'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop:6
    }
})
// here styles ends for NearReport screen