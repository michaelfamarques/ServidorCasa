const express = require('express');
const winston = require('winston');
const exec = require('child_process').exec;
const app = express();

app.get('/ligarNote', function(req, res){
    exec('wol', (err, stdout) => {
        if(err){
            winston.error("Erro ao ligar note:");
            winston.error(err);
            res.send(JSON.stringfy(false));
        }else{
            winston.info("Commando [wol] executado com sucesso!");
            res.send(JSON.stringfy(true));
        }
    });
});

app.get('/desligarNote', function(req, res){
    exec('desligarnote', (err, stdout) => {
        if(err){
            winston.error("Erro ao desligar note:");
            winston.error(err);
            res.send(JSON.stringfy(false));
        }else{
            winston.info("Commando [desligarnote] executado com sucesso!");
            res.send(JSON.stringfy(true));
        }
    });
});

app.listen(1164);