import Shimmer from './shimmer';
import Login from './login';


export default function Home() {
  const isLoadig = false
  return (isLoadig ? <Shimmer /> : <Login />);
}

