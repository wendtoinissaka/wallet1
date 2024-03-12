import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native";



export default function Dashboard(){
    const navigation = useNavigation();

    const handleLogout = async () =>{
        try {
            await auth().signOut();

            // reset the navigation stack to "Login" and remove the OTP-related screens
            navigation.reset({
                index:0,
                routes: [{name: "Login"}],
            })
        } catch (error) {
            // console.log("Error during logout : ", error);
            console.log("Erreur lors de la connexion : ", error);
        }
    };

    return(
        <View style={{flex:1, padding:10, backgroundColor: "#BEBDB8"}}>
            <Text
                style={{
                    fontSize:32,
                    fontWeight: "bold",
                    marginBottom: 40,
                    marginTop:  150,

                }}
            >
                Welcome to the Dashbord
            </Text>
{/* 


            // Exemple de bouton d'envoi de paiements dans le tableau de bord
<TouchableOpacity
    onPress={() => navigation.navigate("SendPayments")}
    style={styles.button}
>
    <Text style={styles.buttonText}>Envoyer des paiements</Text>
</TouchableOpacity>

// Exemple de bouton d'accès à l'historique des transactions dans le tableau de bord
<TouchableOpacity
    onPress={() => navigation.navigate("TransactionHistory")}
    style={styles.button}
>
    <Text style={styles.buttonText}>Historique des transactions</Text>
</TouchableOpacity>

// Exemple de bouton d'accès à la gestion du compte dans le tableau de bord
<TouchableOpacity
    onPress={() => navigation.navigate("AccountManagement")}
    style={styles.button}
>
    <Text style={styles.buttonText}>Gestion du compte</Text>
</TouchableOpacity>

// Exemple de bouton d'accès au support technique dans le tableau de bord
<TouchableOpacity
    onPress={() => navigation.navigate("Support")}
    style={styles.button}
>
    <Text style={styles.buttonText}>Support technique</Text>
</TouchableOpacity> */}




            <TouchableOpacity
                onPress={handleLogout}
                style={{
                    backgroundColor: "#841584",
                    padding:10,
                    borderRadius: 5,
                    marginBottom: 20,
                    alignItems: "center",

                }}
            >
                <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>
                    logout
                </Text>
            </TouchableOpacity>


        </View>
    );
}