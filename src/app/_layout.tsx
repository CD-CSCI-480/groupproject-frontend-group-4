import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={
               {
                headerTitle:"Home",
                headerStyle: {
                    backgroundColor:'#2f2f2f'
                },
                headerTitleStyle : {
                    color:"white"
                }

               }
            }/>
            <Stack.Screen name="[id]" options={
                {
                    headerTitle:"Details",
                    headerStyle: {
                        backgroundColor:'#2f2f2f'
                    },
                    headerTitleStyle : {
                        color:"white"
                    }

                }
                }/>
        </Stack>
    )
}

export default RootLayout