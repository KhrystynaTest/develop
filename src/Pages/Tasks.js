import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';

import List from '../components/List/List';
import Title from '../components/Title';
import { fetchTodos, fetchAddTodo, fetchUpdateTodo, fetchDeleteTodo } from '../api';

function Tasks() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);
    const listLength = list.length;

    useEffect(() => {
        fetchTodos()
            .then((res) => setList(res))
            .catch((err) => console.log(err));
    }, []);

    const changeInput = (e) => setInputValue(e.target.value);

    const addItem = () => {
        const id = uuid();

        fetchAddTodo({ id, text: inputValue, completed: false })
            .then(() => {
                setList([...list, { id: id, text: inputValue }]);
                setInputValue('');
            })
            .catch((err) => console.log(err));
    };

    const updateItem = (id) => {
        return fetchUpdateTodo({
            id,
            text: inputValue,
            completed: false,
        });
    };

    const deleteItem = (el) => {
        fetchDeleteTodo(el)
            .then(() => setList(list.filter((item) => item.id !== el)))
            .catch((err) => console.log(err));
    };

    return (
        <div className={'App'}>
            <main>
                <div className={'list'}>
                    <Title title={'List'} />

                    <span>Added {listLength} items</span>

                    <div className={'createSection'}>
                        <input onChange={changeInput} value={inputValue} placeholder="Add Item" />
                        <button onClick={addItem} disabled={inputValue.trim() === ''}>
                            Add
                        </button>
                    </div>
                    <List list={list} handleDelete={deleteItem} handleUpdate={updateItem} />
                </div>
            </main>
        </div>
    );
}
export default Tasks;
