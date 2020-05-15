### computed
    <div id="app">
      <p>{{ message }}</p>
      <p>{{ messages }}</p>
    </div>

    new Vue({
      el: '#app',
      data: {
        message: 'hello'
      },
      computed: {
        newMessage() {
          return this.message.split(' ').reverse().join(' ')
        }
      }
    })

> computed 값이 캐싱되고 메서드는 렌더링을 다시 할 때마다 함수를 재실행한다.

### 조건부 렌더링
    <div v-if="isShow">A</div>
    <div v-else>B</div>

    <div v-if="type == 0">a</div>
    <div v-else-if="type == 1">b</div>
    <div v-else>c</div>
    <template v-if="isShow">
      <div>A</div>
      <div>B</div>
    </template>

> v-if와 비슷한 조건부로 v-show 존재하지만 엘리먼트에 diplay CSS 속성만 토글한다.
> template 구문을 지원하지 않고 엘리먼트가 항상 렌더링되며, DOM에 남아 있다.

### 리스트 렌더링
    <ul id="app">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>

    new Vue({
      el: "#app",
      data: {
        items: [
          {message: 'Message1'},
          {message: 'Message2'}
        ]
      }
    })
    
    순회하는 배열의 인덱스에 접근하기 위해선 v-for="(item, index) in items"로 작성

> 배열에 v-for은 key와 같이 쓰이는데, 각 항목의 고유한 ID로서, 각 노드의 ID 추적 및 재사용을 위한 힌트제공
    <div v-for="item in itmes" :key="item.id">

    <ul id="app">
      <li v-for="(value, key) in object">
        {{key}} : {{value}}
      </li>
    </ul>

    new Vue({
      el: "#app",
      data: {
        object: {
          address: '0x123',
          name: 'will',
          age: 32
        }
      }
    })

### v-model
> v-model 디렉티브를 사용하면 폼의 input 등의 데이터 엘리먼트에 양방향 데이터 바인딩 생성 가능.

    <input v-model="msg">
    <p> Message: {{msg}} </p>

    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <div>select : {{selected}}</div>


### 컴포넌트
> 재사용 가능한 코드를 캡슐화하고 확장할 수 있는 기능

    var MyComp = {
      template: '<div>Custom Component</div>'
    }

    <div id="app">
      <my-comp></my-comp>
    </div>

    new Vue({
      components: {
        'my-comp': MyComp
      }
    })

> 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때
    Vue.component('child', {
      props: ['message'],
      template: '<div>{{message}}</div>'
    })

    // 상위 컴포넌트에서 해당 컴포넌트로 전달
    <child message="hello"></child>

    // 보내는 프로퍼티가 데이터라면 바인딩을 위한 표현식
    <input v-model="testMsg">
    <child :message="testMsg"></child>

    // 하위 컴포넌트에서 상위 컴포넌트로 데이터 전달
    Vue.component('child', {
      methods: {
        goAction() {
          this.$emit('increment')
        }
      }
    })

    <child v-on:increment="inrementCount"></child>

    v-on으로 해당 액션을 리슨하고 함수를 연동한다.