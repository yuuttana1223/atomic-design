import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
// console.log(...Array(10).keys());
// 0 1 2 3 4 5 6 7 8 9

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `name${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@gmail.com",
    phone: "000-000-000",
    company: {
      name: "KCG",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧ページです。</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
