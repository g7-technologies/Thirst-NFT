import styled from "styled-components";


const Wrapper = styled.div`
.rarity-value-cards {
     height: 100%;
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

`
export default Wrapper;
