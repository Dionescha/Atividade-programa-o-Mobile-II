import { Text, TextInput, View, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Styles } from '../../components/atoms/Styles/Login.Styles';


export function Login() {
    return (
        <View style={Styles.Container}>
            <View>
            <Text style={Styles.Title} >Login</Text>
            </View>
        
        
        
        
        <SafeAreaView>
           <Image style={Styles.Image} source={{uri:'https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg?compress=1&resize=1000x750&vertical=top'}}></Image>
            <TextInput style={Styles.Input}  placeholder='Email'></TextInput>
            <TextInput style={Styles.Input}  placeholder='Password'></TextInput>
            <Button title='Log in'></Button>
            <Text style={Styles.Text}>Don`t have an account ? Sign Up</Text>
        </SafeAreaView>
        
        
        </View>
    );
}



