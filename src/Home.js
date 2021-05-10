import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Card,
    IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import './Home.css'
function Home({
    item,
    setitem,
    price,
    setprice,
    qty,
    setqty,
    list,
    setlist,
    getData,
    user,
}) {
    const history = useHistory()

    const handleChange = (e) => {
        setitem(e.target.value)
    }
    const handleQtyChange = (e) => {
        setqty(e.target.value)
    }
    const handlePriceChange = (e) => {
        setprice(e.target.value)
    }
    const handleSubmit = (e) => {
        const newItem = {
            item: item,
            qty: qty,
            price: price,
        }
        e.preventDefault()
        if (item) {
            setlist([...list, newItem])
            setitem('')
            setprice(0)
            setqty(0)
        }
    }

    const handleDelete = (product) => {
        list = list.filter(item => item !== product)
        setlist(list);
    }

    return (
        <div>
            <div className='header'>
                <AppBar position='fixed' style={{ background: '#48466d' }}>
                    <Toolbar variant='dense'>
                        <Typography variant='h5' color='inherit'>
                            City Store
            </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='container'>
                <Button
                    variant='outlined'
                    size='large'
                    color='secondary'
                    onClick={getData}
                    className='new-btn'
                >
                    New User
        </Button>
                <Typography variant='h3' className='heading'>
                    Welcome to City Store {user.name.first}
                </Typography>
                <div className='first-ctn'>
                    <TextField
                        id='outlined-basic'
                        label='Item Name'
                        variant='outlined'
                        value={item}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-ctn'>
                    <TextField
                        id='outlined-number'
                        label='Quantity'
                        type='number'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        value={qty}
                        onChange={handleQtyChange}
                    />
                </div>
                <div className='input-ctn'>
                    <TextField
                        id='outlined-number'
                        label='Price'
                        type='number'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <Button
                    variant='outlined'
                    color='secondary'
                    style={{ marginRight: '10px' }}
                    onClick={handleSubmit}
                >
                    ADD
        </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    style={{ marginRight: '10px' }}
                    onClick={() => { setlist([]) }}
                >
                    Clear All
                 </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={() => history.push('/invoice')}
                >
                    Checkout
        </Button>
                <div>
                    <Card className='list' style={{ background: '#f4eee8' }}>
                        <List disablePadding>
                            {list.map((product) => (
                                <ListItem key={product.item}>
                                    <ListItemText
                                        primary={product.item}
                                        secondary={product.qty}
                                    />
                                    <ListItemText
                                        primary={product.price}
                                    />
                                    <IconButton edge="end" aria-label="delete" value={product} onClick={() => { handleDelete(product) }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home
