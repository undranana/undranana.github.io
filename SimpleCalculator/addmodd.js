exports.add = function (req, res, vals) {
    var ans = 0;
    if(vals.sign == 'add') ans = parseInt(vals.first) + parseInt(vals.second);
    if(vals.sign == 'mult') ans = parseInt(vals.first) * parseInt(vals.second);
    if(vals.sign == 'divide') ans = parseInt(vals.first) / parseInt(vals.second);
    if(vals.sign == 'substraction') ans = parseInt(vals.first) - parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The Answer is: ");
    res.write(String(ans));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};