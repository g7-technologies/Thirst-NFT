import styled from "styled-components";


const Wrapper = styled.div`
.more-btn {
min-width: 200px;
text-align: center;
background: #ffffff;
color: #FF4D00;
border: none;
border-radius: 50px;
padding: 10px 15px;
font-size: 25px;
box-shadow: 0px 4px 4px #FF4D00;
    @media (max-width: 600px) {
        min-width: 100px;
        font-size: 18px;
    }
}
margin: 50px 0;
padding: 50px 0;
background: #FFFFFF;

.brand-color {
    color: #FF4D00;
}
.flip-card {
    background-color: transparent;
    width: 350px;
    height: 480px;
    margin: auto;
    perspective: 1000px;
    border-radius: 11px;
    overflow: hidden;
    @media (max-width: 1399px) {
      width: 360px;
      height: 470px;
    }
    @media (max-width: 1199px) {
      width: 300px;
      height: 580px;
    }
    @media (max-width: 1023px) {
      width: 300px;
      height: 580px;
    }
    @media (max-width: 991px) {
        width: 350px;
        height: 480px;
    }
    @media (max-width: 767px) {
        width: 360px;
        height: 480px;
    }
    @media (max-width: 540px) {
        width: 380px;
        height: 450px;
    }
    @media (max-width: 440px) {
        width: 350px;
        height: 480px;
    }
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .flip-card:focus {
      outline: 0;
  }
  
  .flip-card:hover .flip-card-inner,
  .flip-card:focus .flip-card-inner{
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background: #ffffff;
    z-index: 2;
    display: block;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
    }
  }

  .heading_bottom {
    position: absolute !important;
    width: inherit !important;
    bottom: 10px !important;
  }
  
  .flip-card-back {
    background: #1E1E27;
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
        background: #1E1E27;
        text-align: left;
    }
  }
`

export default Wrapper;