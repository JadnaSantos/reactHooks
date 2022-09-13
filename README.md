Repositório dedicado pra os meus estudos de react hooks

### in Progress 👩🏾‍💻⚙🛠

React Hooks

O que é um Hook

<p>De acordo com a Documentação os <strong>Hooks</strong> são funções que permite ligar
aos recursos de state e ciclo de vida do <strong>React</strong></p>

### useState
São variáveis que eu quero que o meu componente monitore.
O React mostra essa nova informação de acordo com a mudança de valor

### useEffect
O useEffect é util, pois ele permite que fica monitorando mudança de uma variável e todas as vezes ela mudar
  -  O useEffect, quando possui um array de dependencias, executará na montagem do componentes e sempre que uma váriavel
  no array de dependência mudar.
  
Quando devemos utilizar o useEffect? 
  - Quando precisamos lidar com efeitos colaterais externos e sincronizar a nossa aplicação com essa informações.

### useContext
O useContext permite compartilhar informações entre vários componentes ao mesmo tempo
 - Para isto, precisamos de um Provider no nível mais acima possível pro volta dos componenentes que dependerão
das informações da Context.
 - O Hook que da Context Api em um componenete para podermos manipular as suas informação é o useContext
 - Para inciarmos a utilização da Context Api devemos utilizar a função createContext

O que é a propriedade children do React?
 - É uma propriedade que representa todo o valor que foi passado entre as tags de abertura e fechamento de um componente

### useReducer
É uma alterantiva ao useState e devemos utlizá-lo quando temos há muita complexidade na regra de alteração do estado. O 
useReducer recebe dois parâmetros
```
  const [cycles, setCycles] useReducer((state, action) => {}, [])
  
  O primeiro parâmetro state é o valor atual da variável cycles
  E o segundo parâmetro é qual ação que o user pode executar 
```

### useRef
O useRef pode ser utilizando com uma alternativa ao useState. O useRef cada vez que valor dele muda,
ele necessariamente não atualiza o componente novamente.
