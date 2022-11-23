import styled from "styled-components";


const Wrapper = styled.div`
.rarity-level-cards {
    align-items: center;
    .div {
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .rarity-level-card {
          border-radius: 11px;
          overflow: hidden;
          @media (max-width: 600px) {
            width: 300px;
          }
        }
    }
}
.rarity-value-cards {
    .card {
        border-radius: 11px;
        min-height: 188px;
        @media (max-width: 992px) {
            min-height: 208px;
        }
        @media (max-width: 992px) {
            min-height: 188px;
        }
        .card-body {
            padding: 10px;
            border-radius: 5px;
        }
    }
}
.mint-button {
  min-width: 200px;
  text-align: center;
  background: #ffffff;
  color: #FF4D00;
  border: none;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
`
export default Wrapper;
