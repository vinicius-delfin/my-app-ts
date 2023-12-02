import { Layout } from './components/Layout';
import { Card } from './components/Card'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
