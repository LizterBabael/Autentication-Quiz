import React, { useState, useEffect, useCallback, ChangeEvent, ReactElement } from 'react'
import { ApplicationBar, BasicTextField, BasicCard, BasicButton, } from '../../components'
import { Container, Grid, List, ListItem, Typography } from '@mui/material'
import { useGlobalContext } from '../../core/context/GlobalContext'
// import axios , {AxiosResponse} from 'axios'
// import { config } from '../../core/config'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const [names, setNames] = useState([])
    const router = useHistory()
    const {
        state,
        setState
    } = useGlobalContext()
    const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState : any) => ({
            ...prevState,
            [name] : value
        }))
    }
    

   const Autenticator = () => { 
        if(state.IsAutenticated === true && state.Email === "admin@gmail.com" && state.Password === "123"){
            router.push({
                pathname: '/QuatationDetails',
                state: {
                    obj: state
                }
            }) 

        } else {
            alert("Error you are not autenticated you cant access the dashboard")
        }
   }

    const navigateToQuationDetails = () => {

        router.push({
            pathname: '/QuatationDetails',
            state: {
                obj: state
            }
        })
    }
    return ( 
        <>
            <ApplicationBar 
                onHandleClick={navigateToQuationDetails}
                title="Home-Page"
                titlebar='QuatationForm'
            />
            <Container sx={{
                marginTop: '100px'
            }} maxWidth='lg'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <BasicCard>
                            <Typography textAlign={'center'} fontSize={"30px"} fontFamily={"Helvetica Neue"}> LOGIN FORM </Typography>
                            <hr />
                            <BasicTextField 
                                label='Emai'
                                placeholder='Enter email'
                                name='Email'
                                onChange={handleChangeEvent}
                                value={state.Email}
                            />
                            <BasicTextField 
                                label='Password'
                                placeholder='Enter password'
                                name='Password'
                                onChange={handleChangeEvent}
                                value={state.Password}
                            />
                            
                            <BasicButton 
                                sx={{ float: 'right', mt: 2, mb: 2}}
                                children='Submit'
                                variant='contained'
                                color='primary'
                                onClick={Autenticator}
                            />
                        </BasicCard>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <List>
                    {names.map((data: any, i) => (
                        <ListItem key={i}>{data.name}</ListItem>
                    ))}
                </List>
            </Container>
            
            
        </>
    )
}

export default HomePage
