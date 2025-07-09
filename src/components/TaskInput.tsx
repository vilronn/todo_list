import React, { useState } from 'react';
import styled from 'styled-components';

type TaskInputProps = {
  onAdd: (text: string) => void;
};

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 60%;
`;

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Введите новую задачу"
      />
      <Button onClick={handleAdd}>Добавить</Button>
    </Container>
  );
};

export default TaskInput;
