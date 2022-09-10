export default function singletonObj() {
    // 다른 언어들과는 달리 js에서는 클래스 대신 객체 리터럴을 사용하여 싱글톤 패턴을 구현할 수도 있다.

    let count = 0;

    const counter = {
        increment() {
            return count++;
        },
        decrement() {
            return --count;
        }
    };

    Object.freeze(counter);
    console.log(counter.getInstance()) // { increment: [Function: increment], decrement: [Function: decrement] }
}

