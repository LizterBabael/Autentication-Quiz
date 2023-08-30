import {Switch, Route} from 'react-router-dom'
import { DataForm, Home} from '../pages'
import { Pageprops } from './route'
import { GlobalContextProvider } from '../core/context/GlobalContext'


interface IRouterWithLoad {
    Component: React.ComponentType
    exact?: any
    path?: string
}


const DynamicRouting : React.FC<IRouterWithLoad> = ({Component, ...rest}) => { 

    return (

        <>
        <Route
        {...rest}
        render={(props: any) => (
            <>
            <Component {...props} />
            </>
        )} 
        />     
        </>
    )
}


const ApplicationRouter = () => {
 
    return (
        
   <Switch>
     <GlobalContextProvider>
     <DynamicRouting exact path={Pageprops.homepage.path} Component={Home} />
     <DynamicRouting exact path={Pageprops.QuatationForm.path} Component={DataForm} />
     
     </GlobalContextProvider>

    </Switch>
 )
}


export default ApplicationRouter

    