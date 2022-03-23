import './Message.style.css';

//Создать компонент Message, отображающий переданный ему пропсом текст.
//export const Message = ({ text }) => <h2>{text}</h2>;

//Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст
//(константу).
export const Message = ({ text }) => <h2 className='message'>{text}</h2>;