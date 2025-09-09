
const a = 5;
let b=6;
b="hej"
var d = 3>4;

console.log(b)

function testscope(parm1) {
    let a1 = "xjeg er lokal";
    var v1 = "jeg er var lokal";
    //out("a3 =" + a3);
    out("v3 =" + v3);
    if (a1 > v1) {
        out("a1 > v1");
        let a2 = "a1 var sjovt nok stÃ¸rre end v1";
        var v2 = "v1 var mindre end";
        if (3 == 3) {
            out("3 == 3");
            let a3 = "heja3";
            var v3 = "hejv3";
        }
    }
}
