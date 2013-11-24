start = shortee

shortee
    = amper actor:word space
action:word space
amount:integer units:word space
date:datevalue
{ return {actor:actor,action:action,
    amount:amount,units:units, date:date}}

datevalue =
    day:integer datedivider month:char+ datedivider + year:integer
{return day + "/" + month.join("") + "/" + year}

word
    = chars:char+
{return chars.join("")}


integer "integer"
    = digits:[0-9]+
{ return parseInt(digits.join(""), 10); }

amper
    = '@'

char
    = [a-zA-Z0-9]

space
    = ' '

datedivider
    = '/'

