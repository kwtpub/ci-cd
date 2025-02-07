import styled from "styled-components";
import Flex from "./Flex";
import { useState } from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
width:100%;
height:70ch;
background:black;
font-size:20px;
border:none;
resize:none;
color: ${({color}) => color || "white"};


&:focus {
    outline:none;


}

@media ${props => props.theme.media.tablet} {
    border:1px solid red;
}
`

const Console = ({color,...props}) => {
    const [lines,setLines] = useState(['C/users/KWTPUB>'])

    const onKeyPress = e => {
        if (e.charCode === 13) {
            setLines([...lines,'C/users/KWTPUB>' ])
        }
    }

    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {lines.map(line =>
                    <Line color={color}>{line}</Line>
                )
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    );
};
export default Console;