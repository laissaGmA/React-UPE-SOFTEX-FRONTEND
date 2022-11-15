import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  navigate(-2);

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        background: 'blue',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}    
    >
      Page 1
    </div>
  );
}
 
export default Page1;