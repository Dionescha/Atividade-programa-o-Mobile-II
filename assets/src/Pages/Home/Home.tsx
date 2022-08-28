import { Text, TextInput, View, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import { HomeStyles } from '../../components/atoms/Styles/Home.Styles';


export function Home() {
    return (
        <View style={HomeStyles.Container}>
            <View>
            <Text style={HomeStyles.Title} >Home</Text>
            </View>
        
        
        
        
        <SafeAreaView>
        <TextInput style={HomeStyles.Input}  placeholder='Add new entity '></TextInput> <Button title='Add' ></Button>
        <Text style={HomeStyles.Text}>0.Publish tutorial on React Native FireBase </Text>
        <Text style={HomeStyles.Text}>1.Complete Registration UI </Text>
        <Text style={HomeStyles.Text}>2.Test reads and writes to Firebase FireStone </Text>
        <Text style={HomeStyles.Text}>3.Add FireBase Login screen</Text>
        <Text style={HomeStyles.Text}>4.Let's see if this task is great </Text>

        </SafeAreaView>
        
        
        </View>
    );
}
