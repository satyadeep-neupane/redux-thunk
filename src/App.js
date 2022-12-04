import { useSelector, useDispatch } from 'react-redux';

import {asyncChangeColor} from './themeSlice';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.color)
  return (
    <div>
      <h1>React App - Thunk</h1>
      <p>Theme - {theme}</p>

      <button onClick={() => dispatch(asyncChangeColor())}>Change Color</button>  
    </div>
  );
}

export default App;
