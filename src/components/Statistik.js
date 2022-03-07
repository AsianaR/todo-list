import { useSelector } from "react-redux";
import styled from "styled-components";

const StatistikWrapper = styled.div`
    width: 100%;
    height: 60px;
    line-height: 120px;
    text-align: center;
`;

const Statistik = () => {
    
    const taskText = useSelector(state => state.text)
    const length = taskText.length
    return(
        <StatistikWrapper>
                You have {length} tasks!            
        </StatistikWrapper>
    );
};

export default Statistik;