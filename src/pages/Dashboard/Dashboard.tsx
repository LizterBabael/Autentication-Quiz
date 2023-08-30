import { useLocation } from "react-router-dom"
import { ApplicationBar } from "../../components"
import { BasicCard } from "../../components"
import { BasicButton } from "../../components"
import { Typography } from "@mui/material"
import { useEffect } from "react"



const QuatationFormDetails: React.FC = () => {
    const location = useLocation()
    const destructured = location.state
    const {
        obj 
    }: any = destructured
    

    
    const click = () => {
        alert(`Welcome  ${obj.Email}`)
    }
    return (
        
       <>
         
           <ApplicationBar 
                onHandleClick={click}
                titlebar="Back-to-login"
                title="Dashboard"
            /> 
          {alert(`Welcome ${obj.Email}`)}
         
        <Typography textAlign={"center"} fontSize={"50px"} marginTop={"100px"}> 
          {obj.Email}
        </Typography>
          
            
        </>
    )
}

export default QuatationFormDetails