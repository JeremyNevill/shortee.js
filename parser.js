shortee
    = ampersand actor:actor space action:action space amount:integer { return {actor:actor,action:action,amount:amount}}

action "action"
    = chars:char+ {return chars.join("")}

actor "actor"
    = chars:char+ {return chars.join("")}

char
    = [a-zA-Z0-9]

space
    = ' '

integer "integer"
    = digits:[0-9]+ { return parseInt(digits.join(""), 10); }

ampersand
    = '@'