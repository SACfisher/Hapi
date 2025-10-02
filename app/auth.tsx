import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {

    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [error, setError]= useState<string | null>("")

    const theme = useTheme();

    const handleSwitchMode = () => {

        setIsSignUp((prev) => !prev )
    }

    const handleAuth = async () => {
        if (!email || !password) {
            setError("Please fill in all fields.")
            return;
        }
        if (password.length < 6 ) {
            setError("passwords must be at least 6 characters. ")
            return;
        }

        setError(null);
    }

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"}>
            <View style={styles.content}>
                <Text style={styles.screenTitle} variant="headlineMedium" > {" "} {isSignUp ?  "Create Account" : "Welcome Back"}</Text>
                <TextInput 
                label="Email" 
                autoCapitalize="none" 
                keyboardType="email-address" 
                placeholder="example@gmail.com"
                mode="outlined"
                style={styles.input}
                onChangeText={setEmail} />

                <TextInput 
                label="Password" 
                autoCapitalize="none"  
                mode="outlined"
                style={styles.input}
                onChangeText={setPassword} />

                {error && <Text style={{color:theme.colors.error }} > {error} </Text>}

                <Button mode="contained" style={styles.button} onPress={handleAuth}>{isSignUp ? "Signup" : "Signin"}</Button>

                <Button mode="text" onPress={handleSwitchMode}>
                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? sign up" }
                </Button>

                
                
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: "#fefefe"
    },
        content: {
        padding:18,
        marginVertical: "45%"
    },
    input: {
        marginBottom: 15,
    },
    screenTitle: {
        marginBottom: 30,
    },
    button: {
        marginVertical: 15,

    },
})