const { setSourceMapRange } = require("typescript")

var x = 10
delete x

if(1)
{
   setSourceMapRange()
}

console.log( x )
