import styled from "styled-components";


const StyledFlex =  styled.div`

display:flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'strech'};
justify-content: ${props => props.justify || 'sterch'};
margin: ${(props) => props.margin || '0'};

`


const Flex = (props) => {
    return <StyledFlex {...props} />
};
export default Flex;