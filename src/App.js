import styled from 'styled-components'
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console'
import Button from './components/Button';
import { useState } from 'react';
const AppWraper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background: black;

`

function App() {
  const [state,setState] = useState(0)

  const increment = setState(prev => prev + 1)
  return (

    <AppWraper>

      <Flex justify={'center'}>
        <Title color={'green'} >Console cmd 2024. KWTPUB</Title>
      </Flex>
      <span>{state}</span>
      <Flex direction={'column'}>
        <Console color={'green'}/>
        <Button onClick={increment} primary background={'red'} color={'green'} align={'flex-end'}>Отправить</Button>
      </Flex>
      
    </AppWraper>

  );
}

export default App;
