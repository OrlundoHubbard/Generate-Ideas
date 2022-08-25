import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {

  const [data, setData] = useState({ text: " "});
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const res = await fetch(`/api/openai`, {
          body: JSON.stringify({
            name: search,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search])


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

