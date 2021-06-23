import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { BrowserRouter } from "react-router-dom";

const user = {
  name: "yuu",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "aaa@gmail.com",
  phone: "000-000-000",
  company: {
    name: "KCG",
  },
  website: "https://google.com",
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
