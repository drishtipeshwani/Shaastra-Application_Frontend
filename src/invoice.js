import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid,
    Card,
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'
import './invoice.css'

function Invoice({ user, list, setlist }) {
    const history = useHistory()
    let total = 0
    list.map((product) => (total += parseInt(product.price)))
    const handleFinish = () => {
        setlist([])
        history.push('/')
    }

    return (
        <div>
            <React.Fragment>
                <div className='header'>
                    <AppBar position='fixed' style={{ background: '#48466d' }}>
                        <Toolbar variant='dense'>
                            <Typography variant='h5' color='inherit'>
                                City Store
              </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Card className='invoice-card' style={{ background: '#f4eee8' }}>
                    <Typography variant='h5' gutterBottom>
                        Invoice
          </Typography>
                    <List disablePadding>
                        {list.map((product) => (
                            <ListItem key={product.item}>
                                <ListItemText primary={product.item} secondary={product.qty} />
                                <Typography variant='body2'>{product.price}</Typography>
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemText primary='Total' />
                            <Typography variant='subtitle1'>{total}</Typography>
                        </ListItem>
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h6' gutterBottom>
                                Shipping
              </Typography>
                            <Typography gutterBottom>
                                {user.name.title + ' ' + user.name.first + ' ' + user.name.last}
                            </Typography>
                            <Typography gutterBottom>
                                {user.location.street.number +
                                    ',' +
                                    user.location.street.name +
                                    ',' +
                                    user.location.city +
                                    ',' +
                                    user.location.country +
                                    '-' +
                                    user.location.postcode}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h6' gutterBottom>
                                Contact Details
              </Typography>
                            <Typography gutterBottom>Email- {user.email}</Typography>
                            <Typography gutterBottom>Phone- {user.phone}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <div className='btn-grp'>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={() => history.push('/')}
                        style={{ marginRight: '10px' }}
                    >
                        Go Back
          </Button>
                    <Button variant='outlined' color='secondary' onClick={handleFinish}>
                        Finish
          </Button>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Invoice
