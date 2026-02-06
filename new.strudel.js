setcpm(130/4)
/*
    |\---/|
    | ,_, |
     \_`_/-..----.
  ___/ `   ' ,""+ \
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+

*/
$:
("[o@2:b2:2 e!2:b2:0 a@2:c3:-4 e:b2:0 o@2:b2:2 e!3:b2:0 a@2:c3:-4 e:b2:0 -]/2")
  .as("vowel:note:penv").fast("<2 1>/2")
  .when("<1!2 0!1000>", x=>x.fast(".5"))
  .pattack(".2")
  .sound("sawtooth")
  .lpf(5000)
  .room(.5)
  .roomsize(3)
  .delay(0)
  .color("pink")


$:
"<0 [2 4]>"
.echoWith(4, 1/8, (p,n) => p.add(n*2))
.scale("b:minor").note()
.sound("tri")
.pan(.4)
.lpf(2000)
.add(note("0,<-!6 12!1000>"))
.color("purple")
.gain("<0!4 .4!1000>")

$:
(`
bd*2 [- bd] sd -,
hh*8,
- - - <- [bd*4:[[0.45 0.55]!2]]>
`).as("s:pan")
.orbit(2)
.lpf(perlin.range(5000,10000))
.gain("<0!16 .3!1000>")
.color("violet")
._scope()

.punchcard({fold:1})

$:

"<0 <0!3 2> 3 <-1 1>>"
.scale("b:minor").note()
.add(note(-24))
.sound("sawtooth")
.lpf(300)
.late(2)
.euclidLegato("<3 5>/4",8)
.decay(.7)
.gain("<0!2 1@1000>")
.compressor("-20:20:10:.002:.02")