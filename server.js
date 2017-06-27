const express = require('express');
const winston = require('winston');
const exec = require('child_process').exec;
const app = express();

app.get('/ping', function(req, res){
    res.send(JSON.stringify(true));
});

app.get('/ligarNote', function(req, res){
    exec('wol', (err, stdout) => {
        if(err){
            winston.error("Erro ao ligar note:");
            winston.error(err);
            res.send(JSON.stringify(false));
        }else{
            winston.info("Commando [wol] executado com sucesso!");
            res.send(JSON.stringify(true));
        }
    });
});

app.get('/desligarNote', function(req, res){
    exec('desligar-note', (err, stdout) => {
        if(err){
            winston.error("Erro ao desligar note:");
            winston.error(err);
            res.send(JSON.stringify(false));
        }else{
            winston.info("Commando [desligarnote] executado com sucesso!");
            res.send(JSON.stringify(true));
        }
    });
});

app.listen(1164);