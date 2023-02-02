'use client'

import Image from 'next/image'
import { auth } from '../../services/firebase'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useIdToken } from 'react-firebase-hooks/auth';
import Cookies from 'js-cookie';
import Router from 'next/router'

export default function Home() {
    const [hideRegister, setHideRegister] = useState(true)
    const [emailSingIn, setEmailSingIn] = useState('');
    const [passwordSingIn, setPasswordSingIn] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const [createUserWithEmailAndPassword, userCreate, loadingCreate, errorCreate] =
        useCreateUserWithEmailAndPassword(auth);

    const [signInWithEmailAndPassword, userSingIn, loadingSingIn, errorSingIn] =
        useSignInWithEmailAndPassword(auth);

    if (errorCreate) {
        return (
            <div>
                <p>Error: {errorCreate.message}</p>
            </div>
        );
    }

    if (loadingCreate) {
        return <p>Loading...</p>;
    }

    if (userCreate) {
        console.log('user register', userCreate)
    }

    if (errorSingIn) {
        return (
            <div>
                <p>Error: {errorSingIn.message}</p>
            </div>
        );
    }

    if (loadingSingIn) {
        return <p>Loading...</p>;
    }

    if (userSingIn) {
        Cookies.set('u', JSON.stringify(userSingIn.user))
        window.location.href = '/login'
    }

    function onSingIn(event) {
        event.preventDefault()
        signInWithEmailAndPassword(emailSingIn, passwordSingIn)
    }

    function onRegister(event) {
        event.preventDefault()
        createUserWithEmailAndPassword(emailRegister, passwordRegister)
    }

    return (
        <main>
            <div className="p-[10px] w-screen h-screen bg-secondery flex items-center justify-center">
                <div className="bg-white max-w-[900px] max-h-[560px] h-full w-full rounded-2xl grid grid-rows-1 grid-cols-2 gap-1 md:grid-cols-1">
                    <div className="p-5 flex justify-center items-center w-full ease-in duration-800">
                        {hideRegister ? (
                            <form
                                className='ease-in duration-800'
                                onSubmit={event => onSingIn(event)}
                            >
                                <Image
                                    className="hidden md:block m-auto mb-8"
                                    src="/img/logo-preta.png"
                                    alt="Picture of the author"
                                    width={180}
                                    height={70}
                                />
                                <h1 className="font-bold text-4xl w-full text-center mb-16">
                                    Log in
                                </h1>
                                <input
                                    className="input-primary mb-4"
                                    type="text"
                                    placeholder="E-mail"
                                    name="email_login"
                                    autoComplete='on'
                                    value={emailSingIn}
                                    onChange={e => setEmailSingIn(e.target.value)}
                                />
                                <input
                                    className="input-primary mb-4 tracking-widest"
                                    type="password"
                                    placeholder="Senha"
                                    name="senha_login"
                                    autoComplete='on'
                                    value={passwordSingIn}
                                    onChange={e => setPasswordSingIn(e.target.value)}
                                />
                                <button className="btn-primary mb-4">
                                    Entrar
                                </button>
                                <p className="btn-no-border">
                                    <span>Não poussi conta? </span>
                                    <b
                                        className="hover:underline cursor-pointer"
                                        onClick={e => setHideRegister(false)}
                                    >
                                        Cadastre-se
                                    </b>
                                </p>
                            </form>
                        )
                        :
                        (
                            <form
                                className='ease-in duration-800 relative'
                                onSubmit={e => onSingIn(e)}
                            >
                                <button
                                    className='absolute  py-2 px-2 text-white bg-secondery rounded-xl'
                                    onClick={e => setHideRegister(true)}
                                >
                                    <Image
                                        src="/img/chevron-left.svg"
                                        alt="Picture of the author"
                                        width={20}
                                        height={20}
                                    />
                                </button>
                                <Image
                                    className="hidden md:block m-auto mb-8"
                                    src="/img/logo-preta.png"
                                    alt="Picture of the author"
                                    width={180}
                                    height={70}
                                />
                                <h1 className="font-bold text-4xl w-full text-center mb-16">
                                    Cadastre-se
                                </h1>
                                <input
                                    className="input-primary mb-4"
                                    type="text"
                                    placeholder="E-mail"
                                    name="resgister_email"
                                    autoComplete='on'
                                    value={emailRegister}
                                    onChange={e => setEmailRegister(e.target.value)}
                                />
                                <input
                                    className="input-primary mb-4 tracking-widest"
                                    type="password"
                                    placeholder="Senha"
                                    name="register_senha"
                                    autoComplete='on'
                                    value={passwordRegister}
                                    onChange={e => setPasswordRegister(e.target.value)}
                                />
                                <button
                                    className="btn-primary mb-4"
                                    onClick={e => onRegister(e)}
                                >
                                    Cadastre-se
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="bg-[url('/img/background-login.jpeg')] flex items-center justify-center rounded-2xl md:hidden">
                        <Image
                            src="/img/logo-branca.png"
                            alt="Picture of the author"
                            width={270}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
