import styled from "styled-components";

export const QouteBox = styled.div`
  background: #fff;
  width: 40rem;
  margin: 10rem auto;
  padding: 3rem;
  border-radius: 15px;
`;

export const QouteText = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const QouteAuthor = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;

export const QouteButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const QouteSocialMedia = styled.div`
  display: flex;
`;

export const QouteSocialMediaLinks = styled.a`
  margin-right: 0.5rem;
  background: #0059ff;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export const QouteSocialMediaImages = styled.img`
  width: 1.5rem;
`;

export const NextQouteButton = styled.button`
  background: #0059ff;
  border: none;
  color: white;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
