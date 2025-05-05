import styled from 'styled-components'

const LoginArea = styled.div`
    display: flex;
    background-color: #f0f0f0;
`
const LoginImage = styled.div`
    background-image: url('/login-image.svg');
    background-size: cover;
    height: 100vh;
    width: 50vw;
`

function Login() {
    return (
        <>
            <LoginArea>
                <h1>Login</h1>
            </LoginArea>
            <LoginImage />
        </>
    )
}

export default Login
