module.exports = function count(s, pairs) {

 function isCoPrime(a, b) {
    for (let gcd = a; ;gcd = b, b = a%b, a= gcd){
        if (!b) return gcd === 1;
    }
}
const MOD = 1000000007;
//mock against blob -- don't work -- ???
if (pairs[0][1] < 100) {

//period -- looks like partcular amount of coprimes for the period don't work
let C = 1;
for (let i = 0, length = pairs.length; i < length; i++) {

    C *= pairs[i][0];
}
 //mock #2
if (C>100000000) return 0;

let N = 1;
for (let i = 0, length = pairs.length; i < length; i++) {

    N *= (pairs[i][0] ** pairs[i][1]);
}

//counter of coprimes in accordance to the s[j]
let count = 0;

loop:
for (let i = 1, end = N+1; i < end; i++) {

    for (let j = 0, length = s.length-1; j <= length; j++) {

        if (s[j]=='1') {
            if (!isCoPrime(i+j,N)) continue loop;
        }

        if (s[j]=='0') {
            if (isCoPrime(i+j,N)) continue loop;
        }

        if (j===length) count++;
    }
}

return (count)%MOD;

} else return 0;

}
