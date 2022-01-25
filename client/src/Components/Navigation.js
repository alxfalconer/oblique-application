import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="nav" style={{ 
      backgroundColor: "black", 
      position: "sticky",
      top: "0", 
      borderBottom: "solid", 
      borderWidth: "1px", 
      borderColor: "#929ca7", 
      paddingBottom: "25px", 
      paddingTop: "25px", 
      textAlign: "Center", 
      fontSize: "18px", 
      marginTop:"3%", 
      fontFamily: "Optima", 
      fontWeight: "100", 
      color: "#343a40", 
      display: "flex", 
      justifyContent: "space-around"}}>
        <Link to="/home" style={{fontSize: "23px", fontFamily: "Optima", color: "white", textDecorationColor: "none"}} className="title">O B L I Q U E - A P P</Link>
          <Link to="/profile" className="me-auto" style={{fontSize: "17px", fontFamily: "Optima", color: "white", textDecorationColor: "none"}}>Strategize</Link>
          <Link to="/history" className="me-auto" style={{fontSize: "17px", fontFamily: "Optima", color: "white", textDecorationColor: "none"}}>History</Link>
           
        
     
     </nav>
  );
};
