# Todo-app / react-redux-async-thunk


redux와 redux-thunk를 사용한 Todo App입니다.

클라이언트와 서버 모두 포함된 monolith application입니다.

## Features


- TodoList 보여주기
- Todo 추가하기
- 실행한 Todo 체크하기
- 실행한 Todo 삭제하기
- APIserver

## I**nstallation**


```
git clone https://github.com/idbdyoung/TodoApp-react-redux-async-thunk.git
cd TodoApp-react-redux-async-thunk
npm install
```

## Execution


client와 server 각각

3000, 3001번 포트를 사용하고 있습니다.

**Client Only**

```jsx
npm run start:client

//react-scripts start
```

**Server Only**

```jsx
npm run start:server

//nodemon server/index.js
```

**Client & Server**

```jsx
npm start

//npm-run-all --parallel start:**
```

## Tech Stack


**Front-End**

- react
- ES6
- redux
- redux-thunk

**Back-End**

- node
- express