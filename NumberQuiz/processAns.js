exports.add = function (req, res, vals) {
    var quiz = vals.quiz;
    var nextnumbers = "";
    if(vals.sign == 'add') ans = parseInt(vals.first) + parseInt(vals.second);
    if(vals.sign == 'mult') ans = parseInt(vals.first) * parseInt(vals.second);
    if(vals.sign == 'divide') ans = parseInt(vals.first) / parseInt(vals.second);
    if(vals.sign == 'substraction') ans = parseInt(vals.first) - parseInt(vals.second);
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>The Number Quiz</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<input type=\"hidden\" id=\"quiz\" name=\"quiz\" value=\"1\">");
    res.write("<p>The Answer is: ");
    res.write(String(quiz));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};