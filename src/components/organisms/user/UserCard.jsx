import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = ({
  user: { image, name, email, phone, website, company },
}) => {
  return (
    <Card>
      <UserIconWithName image={image} name={name} />
      <SDl>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>TEL</dt>
        <dd>{phone}</dd>
        <dt>会社名</dt>
        <dd>{company.name}</dd>
        <dt>WEB</dt>
        <dd>{website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
