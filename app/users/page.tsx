import ProductCard from "../components/ProductCard";

interface UserType{
  id: number
  name: string
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:'no-store'});
  const users:UserType[] = await res.json();
  return (
    <>
      <h1 className="text-black">User Page</h1>
      {new Date().toLocaleTimeString()}
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
        
      </ul>
      <ProductCard />
    </>
  );
};

export default UserPage;
