import styled from 'styled-components';

export const ListStyle = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    width: 200px;
    height: 450px;
    cursor: pointer;
    overflow: hidden;
`;

export const WrapCardStyle = styled.div`
    min-height: 169px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`