import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <GenerateIdeasWrapper>
        <GenerateIdeasForm onSubmit={onSubmit}>
          <GenerateIdeasInputs
            type="text"
            name="idea"
            placeholder="Type any idea"
            value={ideaInput}
            onChange={(e) => setIdeaInput(e.target.value)}
          />
        </GenerateIdeasForm>
        <GenerateIdeasButton>Generate Ideas</GenerateIdeasButton>
        <div>{result}</div>
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

const GenerateIdeasForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GenerateIdeasInputs = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none; // may want to come back to this and add accesibilty to it.
  border-bottom: 1px solid black;
`;

