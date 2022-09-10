export default function singleton() {
    // notSignleton을 singleton으로 수정

    let instance
    let count = 0

    class Counter {
        constructor() {
            if(instance) {
                throw new Error('You ca only create one instance!')
            }
            instance = this
        }

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

    // const counter1 = new Counter()
    // const counter2 = new Counter()
    // console.log(counter1.getInstance() === counter2.getInstance()) // Error occur

    // 인스턴스를 freeze해서 객체를 사용하는 쪽에서 직접 객체를 수정할 수 없도록 해준다.
    // 이 처리로 인해 프로퍼티 추가 및 수정이 불가하므로 Singletone 인스턴스의 프로퍼티를 덮어쓰는 실수를 예방할 수 있다.
    const singletonCounter = Object.freeze(new Counter()) // Counter {}
    console.log(singletonCounter)
}

