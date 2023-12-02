import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from '../services/login'

export const Card = () => {
    return (
        <>
            <Box minHeight='100vh' backgroundColor='#9413dc'>
                <Center>
                    <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px' marginTop='100px'>
                        <Center><h1>Faça o login</h1></Center>
                        <Input placeholder='email' />
                        <Input placeholder='password' />
                        <Center><Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>Logar</Button></Center>
                    </Box>
                </Center>
            </Box>
        </>
    )
}