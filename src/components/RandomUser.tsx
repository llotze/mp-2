import styled from "styled-components";
import type {RandomUser} from "../interfaces/Characters.ts";

const AllUsersDiv=styled.div`
    display: flex;
    flex-flow: row wrap;   
    justify-content: space-evenly;
    background-color: rgba(32, 32, 32, 0.5);
    font-size: 20px;
`;

const SingleUserDiv=styled.div<{gender: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    min-width: 300px;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.gender === "male" ? 'rgba(86, 104, 110, 1)' : 'rgba(104, 79, 107, 1)')};
    color: ${(props) => (props.gender === "male" ? 'rgba(190, 192, 205, 1)' : 'rgba(202, 195, 210, 1)')};
    text-align: center;
    border-radius: 10px;
`;

const UserImage = styled.img`
    border-radius: 50%;
`;

export default function RandomUsers(props : { data: RandomUser[] } ){
    return (
        <AllUsersDiv>
            {
                props.data.map((user: RandomUser, index: number) =>
                    <SingleUserDiv key={index} gender={user.gender}>
                        <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                        <UserImage src={user.picture.large} alt={`portrait of ${user.name.first}`} />
                        <p>Age: {user.dob.age}</p>
                        <p>Location: {user.location.city}, {user.location.country}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Nationality: {user.nat}</p>
                    </SingleUserDiv>
                )
            }
        </AllUsersDiv>
    );
}