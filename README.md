Custom Hook

1. Input Hook

- custom Hook 함수에 여러가지 인자를 파라메터로 보내고, 그에 따른 Input 의 이벤트 또는 요소 등 반환함으로써 반환한 이벤트 또는 요소를 적용 시킬 수 있다.

2. Tab Hook

- custom Hook 함수에 탭의 초기값을 인자로 하여 디폴트 값을 적용 할 수 있다.
- 또한 여러가지 요소 검사도 가능 할것 같다.

3. Use Effect

- class 타입 react의 lifeCycle 을 거의 전부 포함할 수 있는 Hook
- componentDidMount, componentWillUpdate, componentDidUnMount 의 lifecycle 을 계승한다.
- State 와 같이 함수형 react 를 더 강력하게 만들어 주는 Hook

4. Title Updater

- Effect 와 State 를 함께 사용. 입력값으로 browser의 title 을 변경해 준다.

5. Use Ref & Use Effect Return
- useRef 의 리턴값을 html 태그에 부여함으로써 부여된 html 태그의 reference를 사용 할 수있다.
- useEffect 에서 함수를 return 하면, 사용하는 컴포넌트가 Unmount 될때 호출하게 된다. return 밖의 함수는 component가 DidMount, UpdateMount 될때마다 실행된다.

6. Use Confirm & Use PreventLeave
- useState, useEffect 및 useRef 등의 제공 Hook을 이용하는게 아닌, function 만으로 Hook을 만들 수 있다.