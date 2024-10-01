import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import './TodoList.css'; // 스타일링 파일

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '123132', status: '진행 중' },
        { id: 2, text: '123', status: '진행 중' },
    ]);

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        setTodos([...todos, { id: Date.now(), text: newTodo, status: '진행 중' }]);
        setNewTodo('');
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleUpdateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, status: '수정 완료' } : todo
            )
        );
    };

    return (
        <div className="todo-list">
            <h1>할 일 등록</h1>
            <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="todo-input"
            />
            <Button onClick={handleAddTodo} className="add-button">
                등록
            </Button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <Button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="delete-button"
                        >
                            삭제하기
                        </Button>
                        <Button
                            onClick={() => handleUpdateTodo(todo.id)}
                            className="update-button"
                        >
                            {todo.status === '수정 완료' ? '수정 완료' : '수정 진행'}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
