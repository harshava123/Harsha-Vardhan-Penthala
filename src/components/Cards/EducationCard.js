import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        border-color: ${({ theme }) => theme.primary};
    }
    
    @media only screen and (max-width: 768px) {
        width: 300px;
        padding: 16px;
        gap: 12px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: flex-start;
`

const Image = styled.img`
    height: 60px;
    width: 60px;
    background-color: ${({ theme }) => theme.bgLight};
    border-radius: 12px;
    padding: 8px;
    object-fit: contain;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
    
    @media only screen and (max-width: 768px) {
        height: 45px;
        width: 45px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const Degree = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const Grade = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 6px 16px;
    border-radius: 20px;
    display: inline-block;
    margin-top: 4px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        background-color: ${({ theme }) => theme.primary + 25};
    }
    
    @media only screen and (max-width: 768px) {
        font-size: 13px;
        padding: 4px 12px;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    margin-top: 8px;
    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
    
    &:hover {
        -webkit-line-clamp: unset;
    }
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} alt={education.school} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade>Grade: {education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard