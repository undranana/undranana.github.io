var http = require('http');
var url = require('url');
var fs = require('fs');
const pug = require('pug');
const compiledFunction = pug.compileFile('webpage.pug');
const compiledFunctionFinish = pug.compileFile('webpagefinish.pug');
var processAns = require('./processAns.js');

const questions = [ ["1", "1", "2", "3", "5"],
                    ["1", "4", "9", "16", "25"],
                    ["2", "3", "5", "7", "11"],
                    ["1", "2", "4", "8", "16"]]; 

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/numberQuiz.js"){
        var vals = q.query;
        var currentScore = vals.score;
        var answer = vals.answer;
        var currentQuiz = parseInt(vals.quiz);
        
        if(currentQuiz != -1){
            var correctAns = questions[currentQuiz][4];
            if(correctAns == answer)
                currentScore++;
        }else
            currentScore = 0;
        
        if(currentQuiz == (questions.length - 1)){
            res.write(compiledFunctionFinish({
                quiz: 0,
                score: currentScore,
                total: questions.length
            }));
        }else{
            var nextquestions = "" + questions[currentQuiz + 1][0];
            for(let i = 1; i < 4; i++){
                nextquestions += (", " + questions[currentQuiz + 1][i]);
            }
            res.write(compiledFunction({
                quiz: currentQuiz + 1,
                score: currentScore,
                nums: nextquestions
            }));
        }
    }
    else
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200); // Content-Type not included
            res.write(data);
            return res.end();
        });
}).listen(8080);