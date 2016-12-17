function solve(array) {

    var a = +array[0],
        b = +array[1],
        c = +array[2],
        d = +array[3],
        e = +array[4];

    if(a >= b) {
        if(a >= c) { 
            if(a >= d) {
                if(a >= e) {
                    return a;
                }
            }
        }
    }

  	if(b >= a) {
        if(b >= c) {
      		if(b >= d) {
        		if(b >= e) {
        			return b;
                }
            }
        }
    }

  	if(c >= a) {
    	if(c >= b) {
      		if(c >= d) {
        		if(c >= e) {
        			return c;
                }
            }
        }
    }

  	if(d >= a) {
    	if(d >= b) {
      		if(d >= c) {
       	 		if(d >= e) {
        			return d;
                }
            }
        }
    }

  	if(e >= a) {
    	if(e >= b) {
      		if(e >= c) {
        		if(e >= d) {
        			return e;
                }
            }
        }
    }
}