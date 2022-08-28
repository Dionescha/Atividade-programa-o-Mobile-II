import { Text, TextInput, View, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import { CadastroStyles } from '../../components/atoms/Styles/Cadastro.Styles';


export function Cadastro() {
    return (
        <View style={CadastroStyles.Container}>
            <View>
            
            <Text style={CadastroStyles.Title} >Registration</Text>
            
            </View>
        
        
        
        
        <SafeAreaView>
           <Image style={CadastroStyles.Image} source={{uri:'https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg?compress=1&resize=1000x750&vertical=top'}}></Image>
           <TextInput style={CadastroStyles.Input}  placeholder='Full Name'></TextInput>
           <TextInput style={CadastroStyles.Input}  placeholder='Email'></TextInput>
           <TextInput style={CadastroStyles.Input}  placeholder='Password'></TextInput>
           <TextInput style={CadastroStyles.Input}  placeholder='Confirm Password'></TextInput>
           <Button title='Create account'></Button>
           <Text style={CadastroStyles.Text} >Already got an account? Log in </Text>
            
        </SafeAreaView>
        
        
        </View>
    );
}
