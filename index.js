const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "var myVar = 10;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
      respostas: [
        "alert();",
        "prompt();",
        "console.log();"
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta uma única linha de código em JavaScript?",
      respostas: [
        "/ / Este é um comentário",
        "// Este é um comentário",
        "/* Este é um comentário */"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para selecionar um elemento HTML pelo seu ID em JavaScript?",
      respostas: [
        "getElementByTag()",
        "getElementByName()",
        "getElementById()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "addElement()",
        "push()",
        "append()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão `3 + '3'` em JavaScript?",
      respostas: [
        "6",
        "'33'",
        "33"
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toNumber()",
        "castNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para dividir uma string em um array de substrings com base em um separador em JavaScript?",
      respostas: [
        "split()",
        "divide()",
        "separate()"
      ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  // total de itens la dentro, a partir do 1
  const totalDePerguntas = perguntas.length
  // mostrar o total de acertos com o id acertos
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta - ' + perguntas.indexOf (item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // comparar a resposta correta com o que o usuario selecionou
      // true ou false
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        // caso for mudar a resposta ele deleta a quantidade 
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)
          // se caso ele acerte ele vai adicionar o item
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
      
      quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }