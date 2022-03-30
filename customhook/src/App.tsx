import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";
import "./styles.css";

// コンポーネント側から呼び出し、アクションやstateを受け取り
export default function App() {
  const { getUsers, UserProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {UserProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
