import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  // pathname: "/page1/detailA", state: Array(100),...

  const { state } = useLocation();
  console.log(state);
  // (100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, …]

  return (
    <div>
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
