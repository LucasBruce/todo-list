import { listenSubmit, loadTodoList } from './handler';

function initialize() {
  loadTodoList();
  listenSubmit();
}

initialize();