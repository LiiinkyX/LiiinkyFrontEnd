
export const Img = ({linkImage ,size = [64,64],radius,happy}) => {
  return  <img
 
  width={`${size[0]}}px`} 
  height={`${size[1]}}px`} 
  style={{margin:"4px",borderRadius:`${radius}%`,border:happy? "2.5px solid purple":"none",boxShadow:
  happy ? "2px  2px 5px grey":"none"}}
  src={linkImage}
  />
}
