export default function notSingleton() {
// singleton이 아닌 코드
// Counter의 인스턴스를 여러 번 만들 수 있으므로!
    let count = 0

    class Counter {
        getInstance() {
            return this
        }

        getCount() {
            return count
        }

        increment() {
            return count++
        }

        decrement() {
            return count--
        }
    }

    const counter1 = new Counter()
    const counter2 = new Counter()


// 즉, counter1과 counter2는 각각 별개의 인스턴스를 가리킨다.
// 각 인스턴스의 getInstance 메서드를 호출해 반환되는 레퍼런스를 다르다.
    console.log(counter1.getInstance() === counter2.getInstance()) // false
}

