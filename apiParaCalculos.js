//criar servidor express porta 8080
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
}).on('error', err => {
    console.log('Erro: ' + err);
});
//criar rota para acessar a api
app.get('/', (req, res) => {
    res.send('Api para cálculos');
}).on('error', err => {
    console.log('Erro: ' + err);
});
//criar rota para calcular a soma de dois números
app.get('/soma', (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2) || req.query.num1 == '' || req.query.num2 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let resultado = num1 + num2;
        res.send('A soma dos números é: ' + resultado);
    }
}).on('error', err => {
    console.log('Erro: ' + err);
});
//criar rota para calcular a subtração de dois números
app.get('/subtracao', (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2) || req.query.num1 == '' || req.query.num2 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let resultado = num1 - num2;
        res.send('A subtração dos números é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a multiplicação de dois números
app.get('/multiplicacao', (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2 || req.query.num1 == '' || req.query.num2 == '')) {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let resultado = num1 * num2;
        res.send('A multiplicação dos números é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a divisão de dois números
app.get('/divisao', (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2) || req.query.num1 == '' || req.query.num2 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let resultado = num1 / num2;
        res.send('A divisão dos números é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a potenciação de dois números
app.get('/potencia', (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2) || req.query.num1 == '' || req.query.num2 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let resultado = Math.pow(num1, num2);
        res.send('A potenciação dos números é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a raiz quadrada de um número
app.get('/raiz', (req, res) => {
    if (isNaN(req.query.num1) || req.query.num1 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let resultado = Math.sqrt(num1);
        res.send('A raiz quadrada do número é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a raiz cúbica de um número
app.get('/raizCubica', (req, res) => {
    if (isNaN(req.query.num1) || req.query.num1 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let resultado = Math.cbrt(num1);
        res.send('A raiz cúbica do número é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
//criar rota para calcular a exponencial de um número
app.get('/exponencial', (req, res) => {
    //verificar se é um número
    if (isNaN(req.query.num1) || req.query.num1 == '') {
        res.send('O número não é um número');
    } else {
        let num1 = parseInt(req.query.num1);
        let resultado = Math.exp(num1);
        res.send('A exponencial do número é: ' + resultado);
    }
}
).on('error', err => {
    console.log('Erro: ' + err);
}
);
