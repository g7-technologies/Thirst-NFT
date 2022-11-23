import styled from "styled-components";


const Wrapper = styled.div`
position: sticky;
top: 0;
min-height: 80px;
display: flex;
align-items: center;
background: #ffffff;
z-index: 9999;
nav {
    width: 100%;
    padding: 0px 80px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        display: none;
    }
    .logo {
        width: 20%;
        img {
            width: 50%;
            @media (max-width: 768px) {
                width: 75%;
            }
        }
    }
    .navlink-items {
        width: 80%;
        text-align: right;
        a {
            text-decoration: none;
            color: #FF4D00;
            font-size: 18px;
            font-weight: 600;
            :not(:last-child) {
                margin-right: 50px;
            }
        }
    }
}
`

export const Mobilenav = styled.div`
    display: none;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .mobile-logo {
            width: 80px;
        }
        @media (max-width: 500px) {
            padding: 0 20px;
        }
        .mobile-nav-baricon {
            font-size: 30px;
            cursor: pointer;
        }
        .mobile-navlink-items {
            position: absolute;
            top: 55px;
            left: 0;
            background: #FF4D00;
            width: 100%;
            height: 0;
            transition: 0.5s ease-in-out;
            overflow: hidden;
            a {
                display: block;
                padding: 10px 40px;
                font-size: 18px;
                text-decoration: none;
                color: #ffffff;
                :not(:last-child) {
                    border-bottom: 1px solid #fff;
                }
            }
        }
    }

`


export default Wrapper;