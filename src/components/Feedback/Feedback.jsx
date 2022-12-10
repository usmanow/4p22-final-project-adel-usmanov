import React from 'react';
import Header from '../Header/Header';
import './Feedback.css';

export const Feedback = () => {

    const [userName, setUserName] = React.useState('');
    const [userSurname, setUserSurname] = React.useState('');
    const [userNameError, setUserNameError] = React.useState();
    const [userSurnameError, setUserSurnameError] = React.useState();
    const [userEmail, setUserEmail] = React.useState('');
    const [userEmailError, setUserEmailError] = React.useState();
    const [textArea, setTextArea] = React.useState('');
    const [textAreaError, setTextAreaError] = React.useState();

    const nameOnChange = (e) => {
        setUserName(e.target.value);
        setUserNameError('');
    }

    const surnameOnChange = (e) => {
        setUserSurname(e.target.value);
        setUserSurnameError('');
    }

    const emailOnChange = (e) => {
        setUserEmail(e.target.value);
        setUserEmailError('');
    }

    const textAreaOnChange = (e) => {
        setTextArea(e.target.value);
        setTextAreaError('');
    }

    const validTextArea = () => {
        if (textArea === '') {
            setTextAreaError('Опишите проблему');
            return false
        }
        return true
    }

    const validName = () => {
        if (userName === '') {
            setUserNameError('Введите имя');
            return false
        }
        return true
    }

    const validSurname = () => {
        if (userSurname === '') {
            setUserSurnameError('Введите фамилию');
            return false
        }
        return true
    }

    const validEmail = () => {
        if (userEmail === '') {
            setUserEmailError('Введите email');
            return false
        }
        if (!validateEmail()) {
            setUserEmailError('Email введён некорректно');
            return false;
        }
        return true;
    }

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(userEmail).toLowerCase());
    }

    const onSubmit = () => {
        const isNameValid = validName();
        const isSurnameValid = validSurname();
        const isTextAreaValid = validTextArea();
        const isEmailValid = validEmail();

        if (isNameValid && isSurnameValid && isTextAreaValid && isEmailValid) {
            console.log({
                'Имя': userName,
                'Фамилия': userSurname,
                'Email': userEmail,
                'Текст': textArea
            })
        }
    }

    return (
        <>
            <Header />
            <div className="support">
                <div className="support-title">
                    Обратная связь
                </div>
                <input className="support-username" onChange={nameOnChange} value={userName} placeholder="Введите имя"/>
                {!!userNameError && <p className="support-username__error">{userNameError}</p>}
                <input className="support-surname" onChange={surnameOnChange} value={userSurname} placeholder="Введите фамилию"/>
                {!!userSurnameError && <p className="support-usersurname__error">{userSurnameError}</p>}
                <input className="support-email" onChange={emailOnChange} value={userEmail} placeholder="Введите email"/>
                {!!userEmailError && <p className="support-useremail__error">{userEmailError}</p>}
                <textarea className="support-textarea" onChange={textAreaOnChange} value={textArea} placeholder="Опишите проблему"/>
                {!!textAreaError && <p className="support-textarea__error">{textAreaError}</p>}
                <button className="support-submit" onClick={onSubmit}>Отправить</button>
            </div>
        </>
    )
}
    
export default Feedback;