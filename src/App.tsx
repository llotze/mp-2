import RandomUsers from "./components/RandomUsers.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type { RandomUser } from './interfaces/Characters';

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<RandomUser[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://randomuser.me/api/?results=6");
            const {results} : {results: RandomUser[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <RandomUsers data={data}/>
        </ParentDiv>
    )
}
