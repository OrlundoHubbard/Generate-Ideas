import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <GenerateIdeasWrapper>
        <GenerateIdeasButton>Generate Ideas</GenerateIdeasButton>
      </GenerateIdeasWrapper>
    </div>
  );
}

const GenerateIdeasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GenerateIdeasButton = styled.button`
  font-family: Inter;
  width: 10rem;
  height: 3rem;
  border-radius: 6.25rem;
  border: none;
  cursor: pointer;
  color: grey;
`;
