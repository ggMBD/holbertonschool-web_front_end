function countPrimeNumbers(){
    let pnCount = 0;
    for (let i = 0; i <= 100; i++) {
        let isPrime = true;
        for (let j = 0; j < i; j++) {
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            pnCount++;
        }
    }
    return pnCount;
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
