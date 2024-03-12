import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import auth from "@react-native-firebase/auth"
// import firebase from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
// import { MaterialIcons } from 'react-native-material-icons';

import { Linking } from 'react-native';

export default function Login(){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [confirm, setConfirm] = useState(null);
    const navigation = useNavigation();
    // const WhatsAppIcon = require("./assets/Whatsapp_icon.png");
    const FredoomIcon = require("../assets/freedoom1.png",);
    const WhatsAppIcon = require("../assets/whatsApp_icon.png",);
    const EmailIcon = require("../assets/gmail-icon-free-png.webp",);


    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log("Erreur lors de l'envoie du code", error)
        }
    };
    // const confirmCode = async () => {
    //     try {
    //         const userCredential = await confirm.confirm(code)
    //         const user = userCredential.user;

    //         //Check if the user is new or existing
    //         const userDocument = await firestore()
    //             .collection("users")
    //             .doc(user.id)
    //             .get();
    //         if (userDocument.exists){
    //             //user is existing, navigate to Dashbord
    //             navigation.navigate("Dashbord");
    //         }else{
    //             // user is new, navigate to detail
    //             navigation.navigate("Detail", {uid:user.uid});
    //         }
                
    //     } catch (error) {
    //         console.log("Code invalid.", error);
    //     }
    // };

    const confirmCode = async () => {
        try {
          const userCredential = await confirm.confirm(code);
          const user = userCredential.user;
      
          // Check if the user is new or existing
          const userDocument = await firestore()
            .collection("users")
            .doc(user.uid) // Use user.uid for consistent ID
            .get();
      
          if (userDocument.exists) {
            // User is existing, navigate to Dashbord
            navigation.navigate("Dashboard");
          } else {
            // User is new, navigate to detail
            navigation.navigate("SignUpScreen", { uid: user.uid });
          }
        } catch (error) {
          console.error("Code invalid.", error); // Print full error stack for debugging
        //   console.error("Code invalid.", error.stack); // Print full error stack for debugging
        }
      };

      const handleWhatsAppContact = () => {
        // Replace with your actual WhatsApp number
        const whatsAppNumber = "+226735535254";
        Linking.openURL(`whatsapp://send?phone=${whatsAppNumber}`);
      };
    
      const handleEmailContact = () => {
        // Replace with your support email address
        const emailAddress = "lacapacitee@gmail.com";
        Linking.openURL(`mailto:${emailAddress}`);
      };
      
    return(
        <View style={{flex:1, padding:10, backgroundColor: "#BEBDB8" }}>
 <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
  <Image source={FredoomIcon} style={{ width: 75, height: 100 }} />
</View>

            <Text 
            style={{
                fontSize: 32,
                fontWeight:"bold",
                marginBottom: 2,
                marginTop: 50,
            }}
            >
                {/* phone Number Authentification Using Firebase */}
    {/* <Image source={FredoomIcon} style={{ width: 75, height: 100,  }} /> */}




            </Text>

            {!confirm ?(
                <>
                    <Text
                    style={{
                        marginBottom:20,
                        fontSize:18,
                    }}
                    >
                        {/* Enter your Phone Number : */}
                        Entrer votre numero de Téléphone your Phone Number :
                    </Text>
                    <TextInput
                    style={{
                        height:50,
                        width:"100%",
                        borderColor: "black",
                        borderWidth: 1,
                        marginBottom:30,
                        paddingHorizontal:10,
                    }}
                    placeholder="e.g., +22673535254"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    />
                    <TouchableOpacity
                    onPress={signInWithPhoneNumber}
                    style={{
                        backgroundColor: "#841584",
                        padding:10,
                        borderRadius:5,
                        marginBottom:20,
                        alignItems:'center',
                    }}
                    >
                        <Text style={{color:"white", fontSize: 22, fontWeight: "bold"}}>
                            {/* Send Code */}
                            Envoyer le code
                        </Text>
                    </TouchableOpacity>

                    
                </>
            ) : (
                <>
                    <Text
                        style={{
                            marginBottom:20,
                            fontSize:18
                        }}
                    >
                        {/* Enter the code send to your phone : */}
                        Entrer le code envoyé à votre Téléphone : 
                    </Text>
                    <TextInput
                        style={{height:50,
                                width: "100%",
                                borderColor: "black",
                                borderWidth: 1,
                                marginBottom:30,
                                paddingHorizontal:10,
                        }}
                        placeholder="Entrer le code "
                        value={code}
                        onChangeText={setCode}
                        />
                        <TouchableOpacity
                            onPress={confirmCode}
                            style={{
                                backgroundColor: "#841584",
                                padding:10,
                                borderRadius: 5,
                                marginBottom: 20,
                                alignItems : "center",
                            }}
                        >
                            <Text style={{color:"white", fontSize:22, fontWeight: "bold"}}>
                                {/* Confirm Code */}
                                confirmer
                            </Text>
                        </TouchableOpacity>
                </>
            )}
    <Text style={{textAlign:'center', margin:15}}>Nous contacter</Text>


<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
  <TouchableOpacity onPress={handleWhatsAppContact}>
    <Image source={WhatsAppIcon} style={{ width: 75, height: 75 }} />
  </TouchableOpacity>

  <TouchableOpacity onPress={handleEmailContact}>
    <Image source={EmailIcon} style={{ width: 75, height: 75 }} />
  </TouchableOpacity>
</View>
        </View>
    );

}