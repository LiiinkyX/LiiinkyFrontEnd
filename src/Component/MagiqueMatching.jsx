 
import { Img } from './Img'
 

const MaqueMatching = ({ListMatch , indexMatch }) => {
   //console.log(ListMatch,indexMatch)
    return (
    <div className="magiqueMatching">
        {ListMatch.map((link, index) => (
        <Img
          key={index}
          size={[64,64]}
          radius={100}
          happy={index==indexMatch?true:false}
          linkImage={link}
        />
      ))}
                
    </div>
  )
}

export default MaqueMatching