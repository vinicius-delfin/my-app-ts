import { Layout } from './components/Layout';
import { Card } from './components/Card'
import { Box, ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box padding='25px' backgroundColor='#361973' height='100vh'>
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
