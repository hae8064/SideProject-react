import React, { useState } from 'react'
import { authService, firebaseInstance } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccout] = useState(true);
    const [error, setError] = useState("");

    const onChange = (e) => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }
    };

    const onSubmit = async(e) => {
        //테스트 커밋 코드
        e.preventDefault();
       try{
        let data;
            if(newAccount){
                //새로운 계정 생성
                data = await createUserWithEmailAndPassword(
                    authService, email, password
                );
            }else{
                //로그인
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
       }catch(error){
        setError(error.message);
       }
    };

    const toggleAccount = () => setNewAccout(prev => !prev);
    const onSocialClick = async (event) => {
        const {target: {name}} = event;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
        }else if(name === "github"){
            provider = new GithubAuthProvider();
        }

        const data = await signInWithPopup(authService, provider);
        console.log(data);
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input name = "email" type="email" placeholder='Email' required value={email} onChange={onChange}/>
            <input name = "password" type="password" placeholder='Password' required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
            {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "로그인" : "회원가입"}</span>
        <div>
            <button onClick={onSocialClick} name = "google">Google Login</button>
            <button onClick={onSocialClick} name = "github">Github Login</button>
        </div>
    </div>

  )
}

export default Auth