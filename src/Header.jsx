import { Link } from "react-router-dom";
const Header =()=> (
  <header style={{width:'fit-content',margin:'0 auto'}}>
    <Link style={{margin:'0 8px'}} to='/absoulute-cinema/'>Bottom Text Studios</Link>
    <Link style={{margin:'0 8px'}} to='/absoulute-cinema/movies'>Movie List</Link>
  </header>
); export default Header;