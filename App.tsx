import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [pool, setPool] = React.useState(false);
  const [toga, setToga] = React.useState(true);
  const [isVisable, setVisability] = React.useState(false);
  const [myimg, setImage] = React.useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffunny-cat&psig=AOvVaw2m7pXPjMn9gbUFLPptp8gj&ust=1675561400187000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKD92-He-vwCFQAAAAAdAAAAABAJ");
  const handleClick = () => {
    setPool(!pool);
    setToga(!toga);
  };
  const handleClick2 = () => {
    // implementation details
    setCount(count + 1);
  };

  const showBtnLogic = () => {
    setVisability(!isVisable);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button type="button" onClick={handleClick}>
        Show Pool
      </button>
      {count}

      <button type="button" onClick={showBtnLogic}>
        ShowCat
        </button>
      {isVisable && <div>
        <p>CAT HERE</p>
        <img src={myimg} alt="ReactImage"/>
        </div>
        }




      {toga && <p>Closed :(</p>}

      {pool && (
        <div>
          <button type="button" onClick={handleClick2}>
            Click me to count
          </button>
          <p>Oh my the Cabnet is open! :o </p>
        </div>
      )}
    </div>
  );
}
