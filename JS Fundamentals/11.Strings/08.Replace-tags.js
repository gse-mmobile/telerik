// Write a JavaScript function that replaces in a HTML document given as string 
// all the tags <a href="…">…</a> with corresponding tags [TEXT](URL).

// The input will consist of an array containing one string

// The output should be consisted of one line

function solve(args) {
    
    var str = args[0],
        result = replaceTags(str);
        
    console.log(result);

    function replaceTags(string) {
        
        var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;

        return string.replace(regex, function(tag, url, content) {
            return '[' + content + '](' + url + ')';
        });
    }
}

solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);

// <p>Please visit [our site](http://academy.telerik.com) to choose a training course. Also visit [our forum](www.devbg.org) to discuss the courses.</p>