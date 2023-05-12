import { observer } from 'mobx-react-lite';
import { storeTodo } from '../store/StoreTodo';

const Modal: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        width: '100wh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ backgroundColor: 'white' }}>
        <input
          type="text"
          value={storeTodo.value}
          onChange={(event) => storeTodo.handleChange(event)}
          onKeyDown={(event) => storeTodo.handleKeyDownEnter(event)}
        />
        <button onClick={() => storeTodo.addTodo(storeTodo.value)}>Add</button>
      </div>
    </div>
  );
};

export default observer(Modal);
