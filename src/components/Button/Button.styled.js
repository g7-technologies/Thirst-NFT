import styled from "styled-components";


const Wrapper = styled.button`
min-width: 200px;
text-align: center;
background: ${props => props.background || "#ffffff"};
color: ${props => props.color || "#000000"};
border: none;
border-radius: 50px;
padding: 10px 15px;
font-size: 25px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 600px) {
    min-width: 100px;
    font-size: 18px;
}
`
export default Wrapper;
