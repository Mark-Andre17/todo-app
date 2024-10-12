import { TodoList } from './components/TodoList'
import { Header } from './components/Header'
import './assets/styles/style.css'




function App() {
    return (
        <div className="todo">
            <Header />
            <TodoList />
        </div>
    );
}

export default App;
