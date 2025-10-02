import {Account, Client, Databases} from 'react-native-appwrite'

export const client = new Client()
.setEndpoint(process.env.EXPO_PUBLIC_ENDPOINT!)
.setProject(process.env.EXPO_PUBLIC_PROJECT_ID!)
.setPlatform(process.env.EXPO_PUBLIC_PLATFORM!);

export const account = new Account(client);