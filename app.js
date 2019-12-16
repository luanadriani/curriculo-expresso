const express = require('express')
const path = require('path')

const port = 3000
const app = express()

const curriculo = {
        title: 'Meu currículo',
        name: 'Luan Adriani da Silva',
        profession: 'Desenvolvedor Fullstack',
        description: 'Experiencia em Analise de requisitos, desenvolvimento com back-end com JAVA, JBOSS, JPA, Hibernate e PLSQL. Desenvolvimento com front-end com HTML, HTML5, XHTML, CSS3, JAVASCRIPT, JSF, Primefaces alem de pratica com GitHub, Design de Sistemas, Layout, Avaliação visual, Tratamento e montagens de imagens',
        experience: [{
            company: 'Virgolino de Oliveira S/A - Açúcar e Álcool',
            office: 'Analista / Desenvolvedor de Sistemas',
            description: 'Analise de requisitos para o sistema, Desenvolvimento do sistema com as tecnologias (JAVA, JBOSS, JPA, Hibernate e PLSQL) junto á equipe de desenvolvedores. Design do Sistema (Layout, avaliação visual, Tratamento e montagens de imagens, Código Fonte (HTML, HTML5, XHTML, CSS3, JAVASCRIPT), JSF e Primefaces).'
        },
        {
            company: 'Virgolino de Oliveira S/A - Açúcar e Álcool',
            office: 'Analista / Desenvolvedor de Sistemas',
            description: 'Responsável pelo desenvolvimento de imagens. Divulgação de eventos internos (Camisas, Banners Web, Canecas, Folhetos e etc.). Design do Sistema (Layout, avaliação visual, Tratamento e montagens de imagens, Código Fonte (HTML, XHTML, CSS3), JSF e Primefaces).'
        }],
        education: [{
            institution: 'Universidade do Norte Paulista',
            description: 'Análise e Desenvolvimento de Sistemas'
        }],
        skills: ['backend', 'frontend', 'mobile']
    }

// Setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    })
})

app.get('/curriculo',(req, res, next) => {
    res.render('curriculo', curriculo)
})

app.listen(port, err => {
    console.log(`Server is listening on ${port}`)
})