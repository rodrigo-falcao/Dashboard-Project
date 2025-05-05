import styled from 'styled-components'

const RegistrationArea = styled.div`
    display: flex;
    background-color: #f0f0f0;
`
const RegistrationImage = styled.div`
    background-image: url('/login-image.svg');
    background-size: cover;
    height: 100vh;
    width: 50vw;
`

function Registration() {
    return (
        <>
            <RegistrationArea>
                <h1>Registration</h1>
            </RegistrationArea>
            <RegistrationImage />
        </>
    )
}

export default Registration
