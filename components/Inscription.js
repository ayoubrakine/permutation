import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import axios from 'axios';


const Inscription = () => {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [faculteActuelle, setFaculteActuelle] = useState('');
  const [villeFaculteActuelle, setVilleFaculteActuelle] = useState('');
  const [villeDesiree, setVilleDesiree] = useState('');
  const [password, setPassword] = useState('');




  const handleSignup = () => {
    const formData = {
      nom,
      prenom,
      tel,
      email,
      password,
      grade,
      faculteActuelle,
      specialite,
      villeFaculteActuelle,
      villeDesiree,

    };

    axios.post('https://troubled-red-garb.cyclic.app/professeurs', formData)
      .then(response => {
        // Traitement de la réponse si nécessaire
        console.log(response.data);
        Alert.alert('Inscription réussie');
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error);
        Alert.alert('Erreur lors de l\'inscription');
      });
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' }}>


      <View style={styles.container}>
        <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Nom</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>

          </View>
          <TextInput
            placeholder="Nom"
            style={styles.input}

            value={nom}
            onChangeText={text => setNom(text)}

          />
        </View>


        <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Prénom</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>

          </View>
          <TextInput
            style={styles.input}




            onChangeText={text => setPrenom(text)}
            value={prenom}
            placeholder="Prénom"
          />
        </View>

        <MaterialIcons name="phone" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Téléphone</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Téléphone"
            value={tel}
            onChangeText={text => setTel(text)}
          />
        </View>

        <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Email</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Mot de passe</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Mot de passe"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <MaterialIcons name="school" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Grade</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Grade"
            value={grade}
            onChangeText={text => setGrade(text)}
          />
        </View>

        <MaterialIcons name="business" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Etablissement (abréviation: FST, FS, EST, ENSA ...) </Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}

            value={faculteActuelle}
            placeholder="Etablissement"
            onChangeText={text => setFaculteActuelle(text)}
          />
        </View>

        <MaterialIcons name="label" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Spécialité</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}

            placeholder="Spécialité"

            value={specialite}
            onChangeText={text => setSpecialite(text)}
          />
        </View>

        <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Ville actuelle</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ville actuelle"
            value={villeFaculteActuelle}
            onChangeText={text => setVilleFaculteActuelle(text)}
          />
        </View>

        <MaterialIcons name="location-city" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Villes Désirées</Text>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.labelContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Villes Désirées"
            value={villeDesiree}
            onChangeText={text => setVilleDesiree(text)}
          />
        </View>

        <Button title="S'inscrire" onPress={handleSignup} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',



  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default Inscription;
