import styled from "styled-components";

const Wrapper = styled.div`
background: #FF4D00;
padding: 10px 50px;
.footer-logo {
    max-width: 100px;
    width: 100%;
}
.social-media-icons {
    a {
        text-decoration: none;
        font-size: 40px;
        :not(:last-child) {
            margin-right: 20px;
        }
    }
}
`
export default Wrapper;