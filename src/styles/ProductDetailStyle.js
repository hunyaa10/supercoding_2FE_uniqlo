import styled from "styled-components";




export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 1136px;
    margin: 0 auto;
    margin-top: 50px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column; /* 화면이 작아지면 column으로 변경 */
    }
`;
export const ImageContainer = styled.div`
    margin-right: 30px;
    @media (max-width: 800px){margin-left: 80px;}
`;

export const Image = styled.div`
    width: 500px;
    height: 600px;
`;
export const Name = styled.div`
    display: flex;
    margin-right: 200px;
    font-weight: bold;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 800px){margin-left: 80px;}
`;
export const Product = styled.div`
    margin-top: 80px;
    margin-bottom: 30px;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px)
`;
export const IconImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;
export const ProductName = styled.div`
    margin-bottom: 30px;
    font-size: 25px;
`;
export const ProductPrice = styled.div`
    margin-bottom: 30px;
    font-size: 18px;
`;
export const ProductInfo = styled.div`
    margin-bottom: 100px;
`;
export const ProductSize = styled.div`
    display: flex;
`;
export const QuantityButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

export const ProductCheck = styled.div`
    font-size: 10px;
    padding-top: 10px;
    
`;
export const ProductCheckButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    cursor: pointer;
    margin-left: 35px;
    color: black;
    font-size: 15px;
`;
export const Option = styled.div`
    font-size: 15px;
`

export const Count = styled.div`
    width: 10px;
    height: 15px;
    text-align: center;
    margin-left: 30px;
    margin-bottom: 15px;
    font-size: 20px;
`;

export const DeleteButton = styled.button`
    margin-top: 10px;
    background-color: white;
    color: black;
    &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
    } 
`


export const OptionBox = styled.div`
    @media (max-width: 800px){margin-left: 100px;}
    margin-top: 70px;
`;
export const DeliveryText = styled.div`
    font-size: 10px;

`;
export const ProductDescription = styled.div`
    font-size: 14px;
    margin-bottom: 50px;

`;

export const Date = styled.div`
    color: rgb(55 65 81);
    text-align: center;
    margin-top: 90px;
    @media (max-width: 800px){text-align: left;}
    @media (max-width: 800px){margin-top: 90px;}
    @media (max-width: 800px){margin-left: 220px;}
`;
export const Text = styled.div`
    padding-bottom: 90px;
    text-align: left;
    width: 100%;
`;
export const Button = styled.button`
    width: 250px;
    height: 60px;
    display: flex;
    margin: 20px;
    font-size: 18px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: black;
    color: white;
    &:hover {
    background: #393a3c;
    color: white;
    transition: 0.5s;
    } 
    border-radius: 30px/ 30px;
    padding: 10px;
    border: 1px solid white;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background-color: gray;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    background-color: white;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const ModalButton = styled.button`
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #393a3c;
    }
`;

export const ModalCloseWord = styled.p`
    margin-bottom: 20px;
`
export const ModalCloseContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gray;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    background-color: white;
    justify-content: space-between;
`

export const ModalCloseButton = styled.button`
    padding: 2px 5px;
    color: black;
    font-size: 20px;
    align-items: center;
    justify-content: ;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    &:hover {
        color: #ff6b6b;
    }
    margin-left: 250px;
`;
