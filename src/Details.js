import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";


export default function detail(route, navigation) {
    const {uid } = route.params;
    const [name, setName] = useState("");
    const [dob, setDob] =useState("");
    const [gender, setGender] = useState("");

    const saveDetails = async () =>{
        try {
            await firestore().collection("users").doc(uid).set({
                name,
                dob,
                gender,
            });

            // after saving details, navigate to Dashbord
            navigation.navigate("Dashbord");
        } catch (error) {
            console.log("Error saving details : ", error);
        }
    };
    return (
        <View style={{flex:1, padding:10, backgroundColor: "BEBDB8"}}>
            <Text
                style={{
                    fontSize:32,
                    fontWeight:"bold",
                    marginBottom:40,
                    marginTop:50,

                }}
            >
                Enter your details : 
            </Text>
            <TextInput
                style={{
                    height:50,
                    width:"100%",
                    borderColor:"black",
                    borderWidth:1,
                    marginBottom:30,
                    paddingHorizontal:10,

                }}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={{
                    height:50,
                    width: "100%",
                    borderColor: "black",
                    borderWidth: 1,
                    marginBottom :30,
                    paddingHorizontal: 10,

                }}
                placeholder="Date of Birth"
                value={dob}
                onChangeText={setDob}
            />
            <TextInput
                style={{
                    height:50,
                    width: "100%",
                    borderColor: "black",
                    borderWidth:1,
                    marginBottom :30,
                    paddingHorizontal:10,

                }}
                placeholder="Gender"
                value={gender}
                onChangeText={setGender}
            />
            <TouchableOpacity
                onPress={saveDetails}
                style={{
                    backgroundColor: "#841584",
                    padding:10,
                    borderRadius:5,
                    marginBottom:20,
                    alignItems: "center",
                }}
            >
                <Text style={{color:"white", fontSize: 22, fontWeight: "bold"}}>
                    Save Detais
                </Text>
            </TouchableOpacity>

        </View>
    );
}