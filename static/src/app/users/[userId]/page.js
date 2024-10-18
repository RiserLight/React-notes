
import { getUsers } from "@/service/getUsers";
const UserName = (props) => {
  const {
    params: { userId },
  } = props;
  return (
    <div>
      <h1>User {userId}</h1>
    </div>
  );
};

export default UserName;
export const generateStaticParams = async () => {
  const response = await getUsers();
  return response.map((item) => ({
    userId: item.id.toString(), // Make sure userId is a string if dynamic route expects a string
  }));
};
