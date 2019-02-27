const express = require('express');
const bodyParser = require('body-parser');
const yaml = require('js-yaml');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//run yarn dev

app.get('/api/hello', (req, res) => {
    var inputfile = './demo-app.yaml',
    outputfile = './output.json',
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
    // this code if you want to save
    fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
    
   
    fs.readFile('./output.json', 'utf8', function (err, data) {
        if (err) 
            res.send({ express: 'Hello From Express' });
    
        var obje = JSON.parse(data);
        var meta = obje.apiVersion;
        console.log(meta)
        /*obje.apiVersion="can";
        fs.writeFileSync(outputfile, JSON.stringify(obje, null, 2));*/

        res.send({ express: meta });
    });

    /*
    var jsonData = require('./output.json');
    var change = "extensions/v1beta1";
    jsonData.apiVersion=change;
    fs.writeFileSync('./output.json', JSON.stringify(jsonData));
    */
    
});
app.post('/api/world', (req, res) => {
  console.log(req.body.post);
  console.log(req.body.data);
  var YAML = require('json2yaml');
  var ymlText = YAML.stringify(req.body.data);
  console.log(ymlText);
  /*var jsondata = JSON.stringify(req.body.data);
  var yamlData = JSON.parse(jso.ndata);*/
  fs.writeFileSync('../CANYAML/deneme.yaml', ymlText);
  /*res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );*/
});

app.listen(port, () => console.log(`Listening on port ${port}`));
