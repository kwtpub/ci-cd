import styled, {css, keyframes} from "styled-components";

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
50% {
    transform: rotateZ(3deg);
}

100% {
    transform: rotateZ(-3deg);
}

`

const StyleButton = styled.button`
border:none;
padding: 10px 15px;
font-size:18px;
cursor:pointer;
&:focus {
    outline:none;
}

&:hover {
    animation: ${rotateAnimation} 0.1s infinite linear;
}

align-self: ${props => props.align || 'strech'};

${props => props.primary && css`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'white'}
    `}
`


const Button = (props) => {
    
    return <StyleButton {...props}/>
};
export default Button;