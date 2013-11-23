start = shortee

shortee
    = amper actor:word space
    action:word space
    amount:integer units:word
    { return {actor:actor,action:action,amount:amount,units:units}}

word
    = chars:char+
    {return chars.join("")}

char
    = [a-zA-Z0-9]

space
    = ' '

integer "integer"
    = digits:[0-9]+
    { return parseInt(digits.join(""), 10); }

amper
    = '@'

