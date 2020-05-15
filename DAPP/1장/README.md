# ES8 자바스크립트

## ES8 vs ES5
기존 대부분의 브라우저는 ES5 버전으로 웹 페이지가 동작하고 있으므로 Babel과 같은 트랜스파일러로 상위 버전을 하위 버전인 ES5로 변환하는 과정을 거쳐야 사용 할 수 있다.

> ES6는 ES5에 비해 개선된 사항이 많고, ES8에는 비동기 함수 문법인 async-await를 지원한다.

* let, const - 변수 선언용(let), 상수 선언용(const) 키워드 추가
* 클래스 - 클래스 키워드 추가
* 화살표 함수 - 함수 정의를 위한 화살표 함수 추가
* 템플릿 문자열 - 역따옴표를 이용한 문자열 기능 추가
* 함수 인자 기능 - 인자 기본값 설정, 가변 인자 기능 추가
* 디스트럭처링 - 변수를 매핑하여 할당 가능
* Iterator, for-of - 배열의 Iterator 속성 정의 및 for-of 키워드 추가
* Map, Set - Map, Set 키워드 추가
* 모듈 기능 - import, export 키워드 추가
* Promise - Promise 모듈 추가
* Proxy - Proxy 패턴의 기능을 기본 표준으로 추가
* Symbol - 새로운 Symbol 모듈 추가
* Array.includes - 배열에 해당 요소가 존재하는지 확인하는 메서드 추가(ES7)
* Async, Await - 비동기 문법인 Async-Await 키워드 추가(ES8)

***

### let & const

let과 const는 변수와 상수를 선언하는 키워드.   기존에는 var키워드로 변수, 상수를 모두 정의했지만 ES6 부터 상수, 변수를 구분할 수 있는 키워드 추가
(const로 정의한 값은 다시 재정의 불가)

기존 var 키워드로 선언한 변수를 함수 스코프(scope) 변수라고 하며, 함수 안에 선언하면, 함수 밖을 제외한 내부 어디든지 접근할 수 있다.

let, const는 블록 스코프 변수이며, 블록 안에서만 접근할 수 있다.

> 여러 개의 변수 선언
    let a = 1, b = 2, c;
    값을 할당하지 않은 변수 c는 undefined 할당된다.

> let과 var의 주된 차이점은 this 키워드가 참조하는 오브젝트의 차이이다.

    var car = "자동차"
    console.log(this.car) -> 자동차

    let bus = "버스"
    console.log(this.bus) -> undefined

var 키워드로 선언한 변수의 경우 this가 window 오브젝트를 참조하므로 접근할 수 있으나, let은 그렇지 않다.

### 화살표 함수
ES6에서 익명 함수를 표현하기 위해 화살표 함수 표현식을 지원한다.

    let calculateVolume = (a, b, c) => a * b * c;

### 클래스
[기존] 객체지향을 구현하려고 할 때 function을 사용하여 구현 -> [ES6] class 키워드 추가

  > 기존
    function Animal(name){
      this.name = name;
    }

    Animal.prototype.getName = function() {
      return this.name;
    }

    var lion = new Animal("lion");
    console.log(lion.getName()); -> lion

ES6 클래스는 생성자와 상속을 더욱 간단하고 명확한 구문으로 다룬다. (클래스 자신도 함수이며, 생성자를 가지고 함수를 생성하는 새로운 구문)

    class Animal {
      constructor(name){
        this.name = name;
        this.type = "animal";
      }

      getName(){
        return this.name;
      }
    }

    let animal = new Animal("lion");
    console.log(animal.getName()) -> lion
    console.log(typeof Animal) -> function

[상속]
    class Lion extends Animal {
      constructor(name) {
        super(name);
        this.type = "lion";
      }
    }
    let lion = new Lion("king");
    console.log(lion instanceof Animal); -> true
    console.log(lion.getName()); -> king

> 부모 클래스 생성자를 호출하려면 super 키워드를 이용해 호출한다.
> lion은 Animal의 서브 클래스이므로 Animal의 인스턴스로 확인된다.
> static 키워드를 활용하면 정적 메서드를 구현할 수 있다. -> 클래스의 생성자를 만들 필요 없이 바로 정적 메서드 이름으로 함수를 호출할 수 있다.

    class Animal {
      static getName() {
        return "Animal";
      }
    }
    console.log(Animal.getName());

### 템플릿 문자열
> 문자열을 생성하는 새롭게 도입된 리터럴 (문자열을 설정하기 위해 역따옴표(`) 이용.)

    let a = 1;
    let b = 2;
    let str = `${a} 더하기 ${b}는 ${a+b} 이다.`;
    console.log(str); -> 1 더하기 2는 3 이다.

> 여러 줄에 걸친 텍스트를 표현하는데도 템플릿 문자열 활용
    console.log(`a
    b
    c`);

### 디스트럭처링
> object 객체를 개별 변수에 할당하는 것을 말함.
> JSON 형태의 객체를 쉽게 매핑하여 변수에 할당할 수 있고, 반환값도 여러 개를 설정할 수 있다.

    let arr = [1,2,3,4];
    let [a,b,c,d] = arr;

    let arr = [1,2,3];
    let [a,b,c,d] = arr;
    console.log(a,b,c,d) -> 1 2 3 undefiend

    let [a,,c]  = [1,2,3];
    console.log(a,c); -> 1 3
  
> object의 경우
    const obj = {
      name: "Nick",
      age: "31",
      job: "software Engineer"
    }
    
    let {name, age, job} = obj;
    console.log(name,age,job); // Nick 31 Software Engineer

> 기본값 설정
    let arr = [0,1,2];
    let [a=1, b, c=3, d=4] = arr;

### Spread & Rest 연산자
> ES6부터 가변 인자를 표현할 '...' 키워드가 추가되었다.
> 기존에는 배열값을 함수 인자로 넘기려면 apply() or arguments 통해 변수를 받아 Array.prototype.slice()로 잘라야 했지만, ... 키워드를 이용해 여러 개의 인자를 넘길 수 있다.

    function test(a, b) {
      return a+b;
    }

    const data = [1,2];
    const result = test(...data);
    console.log(result); -> 3

> 문자열을 각 문자로 배열을 만들기 위해 Spread 연산자 활용
    const result = [..."abcdef"];
    console.log(result); -> ["a", "b", "c","d","e","f"]

> Rest를 이용해 받은 값을 배열로 전환
    function test(a, b, ...arr) {
      console.log(arr)
    }
    test(1,2,3,4,5); -> [3,4,5]

### for..of 루프
> for of는 iterator 형태로 순환할 수 있는 기능 제공
- iterator는 어떤 데이터 집합을 순서대로 접근할 때 사용
- for..of는 Symbol.iterator 호출하는데 [배열, 문자열]은 이 속성을 제공한다.

    // DOM에 접근하여 반복된 리스트를 가져오는 데 유용할 수 잇다.
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>

    let nodes = document.querySelectorAll("li");
    for(let node of nodes) {
      console.log(node.textContent);
    }

> 오브젝트의 경우 iterator 형태로 순환할 수 없지만, keys 메서드 활용해 구현 가능
    const animal = {
      lion: "사자",
      tiger: "호랑이"
    }
    const keys = Object.keys(animals);
    for(let key of keys){
      console.log(key, animcals[key])
    }

### 프로미스
> 비동기 호출이 일어났을 때, 해당 태스크가 완료됐을 때, 이를 처리할 함수나 에러를 처리할 함수를 설정하는 모듈.

비동기 처리가 많이 일어나는 XMLHttpRequest 처리에서 주로 사용되며, 반환값을 연계적으로 처리할 수 있기에 순차적인 호출을 보장한다.

Callback hell을 해결하고, then() 메서드를 통해 비동기 코드를 절차적으로 동작하는 코드로 바꿀 수 있다.

    function get(url){
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
          resolve(req.response)
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error("Network Error"));
      };
      req.send();
      )
    }

> 프로미스 생성자는 프로미스 인스턴스를 만든다.
> executor 콜백을 넘기는데 resolve, reject 두 개의 파라미터를 가진다.

여러 개의 프로미스를 실행할 경우, 완료 태스크를 정의하기 위해 Promise.all API 사용
    Promise.all([promise1, promise2]).then(function(value){
      console.log("완료", value);
    })

### Import & Export 모듈
모듈 프로그래밍은 각 프로그램 파일을 모듈 단위로 분리하여, 이를 구조화할 수 있다.

    export {val}
    export {val1, val2, val3}
    export {val as myval}; //해당 변수를 alias로 익스포트.
    export {val1, val2} from "otherModule; //하위모듈에서 해당 익스포트된 변수를 익스포트
    export * from "otherModule"

### async, await
> 비동기 함수를 동기 형태로 간단하게.  

> async 함수에는 await 식이 포함되는데, async 함수의 실행을 일시 중지하고 전달된 프로미스의 resolve를 기다린 다음, async 함수의 실행을 다시 시작하고 완료 시 값을 반환.

    async function test() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000)
      });

      const result = await promise;
      console.log(result)
    }
    test()

    function logFetch(url) {
      return fetch(url)
        .then(response => response.text())
        .then(text => {
          console.log(text);
        }).catch(err => {
          console.error('fetch failed', err)
        });
    }

    async function logFetch(url) {
      try {
        const response = await fetch(url);
        console.log(await response.text());
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    }