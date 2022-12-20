# Draggable

## 프로젝트 데모

데모를 실행해볼 수 있습니다.  
[바로가기](https://dragging-5isn0xi7c-wanted-4th.vercel.app/)  

## 프로젝트 세팅 및 실행

node.js는 v16.14.2에서 실행해주시길 바랍니다.

프로젝트 package 설치

```
npm ci
```

프로젝트 실행

```
npm start
```

## 폴더구조

드래그 가능한 컴포넌트와 커스텀 훅 컨텍스트만 필요한 단순한 프로젝트라 폴더 구조를 단순하게 3가지로 분류해서 나누었습니다.

```shell
src
├── App.tsx
├── Components
├── Context
├── hooks
├── index.tsx
```

- Components
  - 컴포넌트가 담겨있는 폴더
- Context
  - ContextProvider 컴포넌트가 담겨있습니다.
- hooks
  - 커스텀 훅을 담은 폴더

## 사용한 라이브러리

styled-componets

- JS 스타일을 사용하기 위해 설치하였습니다.

## 구현하면서 했던 생각

### useDragging 훅

[useDraggig.tsx](./src/hooks/useDragging.tsx)  
어플리케이션에서 함수의 기능을 재사용하는 것은 반복을 줄일 수 있기 때문에 매우 중요합니다. 드래그 할때 필요한 상태와 함수를 커스텀 훅으로 생성하여 해당 기능을 사용하고자 하는 컴포넌트에서 자유롭게 사용할 수 있도록 구현하였습니다.

### 컨텍스트를 통해 Props 드릴 없애기

[useDraggig.tsx](./src/Context/DraggableContextProvider.tsx)  
DraggableContextProvider는 Draggable 컴포넌트의 Props 드릴을 없애고 useDragging의 상태와 메소드를 공유할 수 있습니다. ContextAPI는 맥락을 공유하고 있는 컴포넌트의 상태가 변경되면 하위 컴포넌트들이 전부 다시 랜더링 된다는 단점이 있지만 제가 작성한 코드와 같이 좁은 맥락에서 사용된다면 의존성을 주입하여 상태나 함수가 꼭 필요한 부분에서 호출 할 수 있다는 장점이 있습니다.

### 타입 반복 줄이기, Return 타입으로 함수 리턴값 명확하게 하기

```tsx
type MouseEvetFunction = (e: React.MouseEvent<HTMLDivElement>) => void;
type CommonFunction = () => void;

export interface Offset {
  x: null | number;
  y: null | number;
}

export interface UseDraggingReturn {
  boxOffset: Offset;
  handleMouseCurrentPosition: MouseEvetFunction;
  handleDragableItemCurrentPosition: MouseEvetFunction;
  handleItemDraggingStart: CommonFunction;
  handleItemDraggingEnd: CommonFunction;
}
```

함수 시그니처를 명명된 타입으로 선언하여 타입 선언의 반복을 줄였습니다. 또한 useDraggingReturn이라는 리턴 타입을 작성하여 함수가 리턴하는 값이 무엇인지 정확하게 파악할 수 있습니다.

## 프로젝트의 한계

드래그 하고자 하는 아이템을 클릭 했을 경우 마우스 포인트의 끝에서 드래그가 시작되지 않고 항상 마우스 포인트의 위치가 정해져서 움직임이 부자연스럽습니다.
마우스 포인트가 빠르게 움직일 때, 드래깅 하던 아이템을 벗어나게 되면 드래그 아이템이 따라오지 못한다. 그래서 마우스를 천천히 움직여야합니다.

## 참고한 자료

- [Create Draggable div in React js without external library](http://www.recompile.in/2020/05/create-draggable-div-in-react-js.html)
- [Element.getBoundingClientRect()](https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect)
- [translate3d()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d)
