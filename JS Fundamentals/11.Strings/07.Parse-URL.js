// Write a script that parses an URL address given in the format: 
// [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.

// The input will consist of an array containing one string

// The output should be consisted of three line

function solve(args) {
  
    var url = args[0],
    	protocol,
        server,
    	resources,
    	startIndex;
  
    if (url.indexOf('://') > -1) {
        protocol = url.split(':/')[0];
        server = url.split('/')[2];
        startIndex=url.indexOf(server)+server.length;
        resources = url.substring(startIndex, url.length);
    }
    
    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resources);
}

solve(['http://telerikacademy.com/Courses/Courses/Details/212']);
// protocol: http
// server: telerikacademy.com
// resource: /Courses/Courses/Details/212

solve(['https://github.com/gentoo/gentoo.git']);
// protocol: https
// server: github.com
// resource: /gentoo/gentoo.git

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);
// protocol: http
// server: telerikacademy.com
// resource: /Courses/Courses/Details/239