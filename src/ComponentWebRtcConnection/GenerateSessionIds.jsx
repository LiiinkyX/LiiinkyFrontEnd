import Sqids from 'sqids'

 const GenerateSessionIds = () => {
     const sqids = new Sqids()
     const id = sqids.encode([Date.now()])  
     return id
 }
 
 export default GenerateSessionIds