# 모듈

## 1. 모듈 시스템

`Javascript 모듈 시스템`을 구현하는 방법에는 `CommonJS(CJS)`와 `ECMAScript Modules(ESM)` 이 있다.  
각 모듈 시스템의 차이점을 알아보자.

### 1.1. CommonJS(CJS)

`CommonJS`는 `module.exports`와 `require`를 사용해 모듈 시스템을 구성한다.  
`module.exports`
CommonJS 모듈 시스템의 코드는 다음과 같이 작성한다.

#### 1.1.1. 코드 예시

```js
// export
// nodejs_module.js
const a = "hello";
module.exports = a;
```

```js
// import
// nodejs_run.js
const { a } = require("./module");
console.log(a); // hello
```

#### 1.1.2. 특징

CommonJS는 Node.js 에서 기본적으로 채택하는 모듈 시스템이다.  
Node.js 런타임에서 동작하며 브라우저에서 사용하려면 변환 작업이 필요하다.  
그 외 특징으로는 아래와 같다.

- 동기적인 방식으로 모듈을 로드한다. require()를 호출한 다음 모듈이 완전히 로드되어야 다음 코드를 실행한다.
- 동적인 방식으로 모듈을 로드할 수 있다. require() 내부에 모듈 경로를 동적인 값을 전달해도 로드할 수 있다.

### 1.2. ECMAScript Modules(ESM)

ESM은 ES2015(ES6) 부터 추가된 모듈 시스템 구현 방법이다.  
ESM 등장 이전에는 브라우저에서 `<script src="../">`를 사용해 코드를 import할 수 있었는데, ES6부터는 브라우저에서도 모듈 시스템을 사용해 보다 쉽게 코드를 재사용할 수 있게 되었다.  
Node.js에서는 기본적으로 CJS방식만 지원했지만 `Node v8.5.0`부터 ESM방식도 사용할 수 있게 되었다.

ESM은 import, export 키워드를 사용해 모듈을 구성한다.  
ESM방식의 모듈을 사용하려면 파일의 확장자는 반드시 mjs로 정의해야 한다.  
npm project라면 파일 확장자를 보다 단순하게 관리할 수 있는데, `Node v12.0.0` 부터는 package.json 파일에 [`type: module`](https://nodejs.org/api/packages.html#type)을 추가하면 `.js` 파일을 ES module처럼 로드하게 돼서 `.mjs`라는 확장자를 사용하지 않아도 된다.

요즘 프로젝트는 대부분 node project 로 만들어 npm, yarn등의 패키지 매니저로 의존성을 관리하기 때문에 보편적으로 `package.json` 에 `type: module`을 정의하는 방식을 사용한다.

#### 1.2.1. 코드 예제

```js
// es_module.mjs
export const a = "hello";
```

```js
// es_run.mjs
import { a } from "./es_module";
console.log(a); // hello
```

#### 1.2.2. 특징

### ⚠️주의사항

CommonJS와 ESM은 서로 다른 모듈 시스템이기 때문에 두가지 방식을 혼용해서 사용하면 오류가 발생한다.  
A 소스 코드를 CommonJS방식인 `module.exports` 로 export를 하고 ESM 방식으로 `import`를 한다거나 반대로 ESM 방식으로 소스코드를 `export` 로 export를 하고 CommonJS 방식인 `require` 로 import를 하는 방식은 불가능하다.
두 가지 시스템이 호환이 안되는것일 뿐 필요에 따라 2가지 방식을 혼용하는것은 가능하다.  
하지만 협업하는 과정에서 혼란스러운 상황을 방지하기 위해서는 한 가지 시스템을 적용하는 것이 권장된다.

## 참고

- Node.js 공식 문서 - https://nodejs.org/api
