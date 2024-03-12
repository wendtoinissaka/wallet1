import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import firestore from "@react-native-firebase/firestore";

export default function SignUpScreen({ route, navigation }) {
    const { uid } = route.params;
    const [accessCode, setAccessCode] = useState("");

    const saveAccessCode = async () => {
        try {
            // Vérifier si le code d'accès est constitué de 4 chiffres
            if (!/^\d{4}$/.test(accessCode)) {
                throw new Error("Le code d'accès doit être composé de 4 chiffres.");
            }

            // Enregistrer le code d'accès dans Firestore
            await firestore().collection("users").doc(uid).set({
                accessCode,
            });

            // Naviguer vers le Dashboard après la création du compte
            navigation.navigate("Dashboard");
        } catch (error) {
            console.log("Error saving access code: ", error);
            Alert.alert("Erreur", "Une erreur s'est produite lors de l'enregistrement du code d'accès.");
        }
    };

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "BEBDB8" }}>
            <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 50 }}>
                Entrez votre code d'accès :
            </Text>
            <TextInput
                style={{
                    height: 50,
                    width: "100%",
                    borderColor: "black",
                    borderWidth: 1,
                    marginBottom: 30,
                    paddingHorizontal: 10,
                }}
                placeholder="Code d'accès (4 chiffres)"
                keyboardType="numeric"
                maxLength={4}
                onChangeText={setAccessCode}
                value={accessCode}
            />
            <TouchableOpacity
                onPress={saveAccessCode}
                style={{
                    backgroundColor: "#841584",
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 20,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
                    Enregistrer le code d'accès
                </Text>
            </TouchableOpacity>
        </View>
    );
}









// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import firestore from "@react-native-firebase/firestore";

// export default function Detail({ route, navigation }) {
//     const { uid } = route.params;
//     const [password, setPassword] = useState("");

//     const savePassword = async () => {
//         try {
//             await firestore().collection("users").doc(uid).set({
//                 password,
//             });

//             // after saving password, navigate to Dashboard
//             navigation.navigate("Dashboard");
//         } catch (error) {
//             console.log("Error saving password: ", error);
//         }
//     };

//     return (
//         <View style={{ flex: 1, padding: 10, backgroundColor: "BEBDB8" }}>
//             <Text
//                 style={{
//                     fontSize: 32,
//                     fontWeight: "bold",
//                     marginBottom: 40,
//                     marginTop: 50,
//                 }}
//             >
//                 Enter your password:
//             </Text>
//             <TextInput
//                 style={{
//                     height: 50,
//                     width: "100%",
//                     borderColor: "black",
//                     borderWidth: 1,
//                     marginBottom: 30,
//                     paddingHorizontal: 10,
//                 }}
//                 placeholder="Password"
//                 secureTextEntry={true}
//                 value={password}
//                 onChangeText={setPassword}
//             />
//             <TouchableOpacity
//                 onPress={savePassword}
//                 style={{
//                     backgroundColor: "#841584",
//                     padding: 10,
//                     borderRadius: 5,
//                     marginBottom: 20,
//                     alignItems: "center",
//                 }}
//             >
//                 <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
//                     Save Password
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }










// // import React, {useState} from "react";
// // import { View, Text, TextInput, TouchableOpacity } from "react-native";
// // // import { firebase } from "@react-native-firebase/auth";
// // import firestore from "@react-native-firebase/firestore";


// // export default function Detail({route, navigation}) {
// //     const { uid } = route.params;
// //     const [name, setName] = useState("");
// //     const [dob, setDob] =useState("");
// //     const [gender, setGender] = useState("");

// //     const saveDetails = async () =>{
// //         try {
// //             await firestore().collection("users").doc(uid).set({
// //                 name,
// //                 dob,
// //                 gender,
// //             });

// //             // after saving details, navigate to Dashbord
// //             navigation.navigate("Dashbord");
// //         } catch (error) {
// //             // console.log("Error saving details : ", error);
// //             console.log("erreur lors de la sauvegarde des données", error);
// //         }
// //     };
// //     return (
// //         <View style={{flex:1, padding:10, backgroundColor: "BEBDB8"}}>
// //             <Text
// //                 style={{
// //                     fontSize:32,
// //                     fontWeight:"bold",
// //                     marginBottom:40,
// //                     marginTop:50,

// //                 }}
// //             >
// //                 {/* Enter your details :  */}
// //                 Entrer vos données
// //             </Text>
// //             <TextInput
// //                 style={{
// //                     height:50,
// //                     width:"100%",
// //                     borderColor:"black",
// //                     borderWidth:1,
// //                     marginBottom:30,
// //                     paddingHorizontal:10,

// //                 }}
// //                 placeholder="Name"
// //                 value={name}
// //                 onChangeText={setName}
// //             />
// //             <TextInput
// //                 style={{
// //                     height:50,
// //                     width: "100%",
// //                     borderColor: "black",
// //                     borderWidth: 1,
// //                     marginBottom :30,
// //                     paddingHorizontal: 10,

// //                 }}
// //                 placeholder="Date of Birth"
// //                 value={dob}
// //                 onChangeText={setDob}
// //             />
// //             <TextInput
// //                 style={{
// //                     height:50,
// //                     width: "100%",
// //                     borderColor: "black",
// //                     borderWidth:1,
// //                     marginBottom :30,
// //                     paddingHorizontal:10,

// //                 }}
// //                 placeholder="Gender"
// //                 value={gender}
// //                 onChangeText={setGender}
// //             />
// //             <TouchableOpacity
// //                 onPress={saveDetails}
// //                 style={{
// //                     backgroundColor: "#841584",
// //                     padding:10,
// //                     borderRadius:5,
// //                     marginBottom:20,
// //                     alignItems: "center",
// //                 }}
// //             >
// //                 <Text style={{color:"white", fontSize: 22, fontWeight: "bold"}}>
// //                     {/* Save Detais */}
// //                     Enregistrer 
// //                 </Text>
// //             </TouchableOpacity>

// //         </View>
// //     );
// // }