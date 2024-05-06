import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const changePassword = async () => {
    try {
      // Vérifier si les deux nouveaux mots de passe correspondent
      if (newPassword !== confirmNewPassword) {
        throw new Error("Les nouveaux mots de passe ne correspondent pas.");
      }

      // Changer le mot de passe avec Firebase Auth
      const user = auth().currentUser;
      const credential = auth.EmailAuthProvider.credential(user.email, oldPassword);
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);

      // Afficher une confirmation
      Alert.alert("Succès", "Le mot de passe a été mis à jour avec succès.");

      // Effacer les champs de saisie
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      console.error("Erreur lors de la modification du mot de passe: ", error);
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 50,
          width: '80%',
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Ancien mot de passe"
        secureTextEntry
        onChangeText={setOldPassword}
        value={oldPassword}
      />
      <TextInput
        style={{
          height: 50,
          width: '80%',
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Nouveau mot de passe"
        secureTextEntry
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <TextInput
        style={{
          height: 50,
          width: '80%',
          borderColor: 'black',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Confirmer le nouveau mot de passe"
        secureTextEntry
        onChangeText={setConfirmNewPassword}
        value={confirmNewPassword}
      />
      <TouchableOpacity
        onPress={changePassword}
        style={{
          backgroundColor: "#841584",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          Changer le mot de passe
        </Text>
      </TouchableOpacity>
    </View>
  );
}








// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import { useRoute } from '@react-navigation/native';



// export default function ProfileScreen({ uid }) {
//   const [oldAccessCode, setOldAccessCode] = useState('');
//   const [newAccessCode, setNewAccessCode] = useState('');
//   const [confirmNewAccessCode, setConfirmNewAccessCode] = useState('');


//   const saveNewAccessCode = async () => {
//     try {
//       // Vérifier si les deux nouveaux codes d'accès correspondent
//       if (newAccessCode !== confirmNewAccessCode) {
//         throw new Error("Les nouveaux codes d'accès ne correspondent pas.");
//       }

//       // Vérifier si le nouveau code d'accès est constitué de 4 chiffres
//       if (!/^\d{4}$/.test(newAccessCode)) {
//         throw new Error("Le nouveau code d'accès doit être composé de 4 chiffres.");
//       }

//       // Vérifier l'ancien code d'accès
//       const userDocument = await firestore().collection("users").doc(uid).get();
//       const userData = userDocument.data();
//       if (userData.accessCode !== oldAccessCode) {
//         throw new Error("L'ancien code d'accès est incorrect.");
//       }

//       // Enregistrer le nouveau code d'accès dans Firestore ou tout autre moyen de stockage de données
//       await firestore().collection("users").doc(uid).update({ accessCode: newAccessCode });

//       // Afficher une confirmation
//       Alert.alert("Succès", "Le code d'accès a été mis à jour avec succès.");

//       // Effacer les champs de saisie
//       setOldAccessCode('');
//       setNewAccessCode('');
//       setConfirmNewAccessCode('');
//     } catch (error) {
//       console.log("Error saving new access code: ", error);
//       Alert.alert("Erreur", error.message);
//     }
//   };

//   return (
//     <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         style={{
//           height: 50,
//           width: '80%',
//           borderColor: 'black',
//           borderWidth: 1,
//           marginBottom: 20,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Ancien code d'accès (4 chiffres)"
//         keyboardType="numeric"
//         maxLength={4}
//         onChangeText={setOldAccessCode}
//         value={oldAccessCode}
//       />
//       <TextInput
//         style={{
//           height: 50,
//           width: '80%',
//           borderColor: 'black',
//           borderWidth: 1,
//           marginBottom: 20,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Nouveau code d'accès (4 chiffres)"
//         keyboardType="numeric"
//         maxLength={4}
//         onChangeText={setNewAccessCode}
//         value={newAccessCode}
//       />
//       <TextInput
//         style={{
//           height: 50,
//           width: '80%',
//           borderColor: 'black',
//           borderWidth: 1,
//           marginBottom: 20,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Confirmer le nouveau code d'accès"
//         keyboardType="numeric"
//         maxLength={4}
//         onChangeText={setConfirmNewAccessCode}
//         value={confirmNewAccessCode}
//       />
//       <TouchableOpacity
//         onPress={saveNewAccessCode}
//         style={{
//           backgroundColor: "#841584",
//           padding: 10,
//           borderRadius: 5,
//           marginBottom: 20,
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
//           Enregistrer le nouveau code d'accès
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }






// import React from 'react';
// import { View, Text } from 'react-native';

// export default function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Contenu de l'écran des paramètres</Text>
//     </View>
//   );
// }
