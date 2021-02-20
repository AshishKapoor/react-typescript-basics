// import { Child, ChildAsFC } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
  return <>
    {/* <Child color="red" onClick={() => console.log('OnClick Pressed')}><p>asdasd</p></Child> */}
    <ChildAsFC color="red" onClick={() => console.log('OnClick Pressed')}><p>asdasd</p></ChildAsFC>
  </>;
};

export default Parent;
