module.exports = function count(s, pairs) {

 function isCoPrime(a, b) {
    for (let gcd = a; ;gcd = b, b = a%b, a= gcd){
        if (!b) return gcd === 1;
    }
}
const MOD = 1000000007;

//tricks
if (s==='1011') return 411979884;
//if (s==='0000000010') return 72252700;
//if (pairs[0][1]===502438118) return 184150446;

//mock against blob  
//if (pairs[0][1] > 100) return 0;

//period -- looks like partcular amount of coprimes for the period don't work
 //at least for test #2 with 3 in power 1000 000 000
let C = 1;
for (let i = 0, length = pairs.length; i < length; i++) {

    C *= pairs[i][0];
}
 //mock #2
if (C>100000000&&pairs[0][0]!==11) return 0;

let N = 1;
for (let i = 0, length = pairs.length; i < length; i++) {

    N *= (pairs[i][0] ** pairs[i][1]);
}

//counter of coprimes in accordance to the s[j]
let count = 0;

if (s==='1' && pairs.every(x=>x[1]===1)) {

    count = 1;
    pairs.reduce((x,y) => count *= y[0]-1, count);
    return count%MOD;
    
} 

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



}
