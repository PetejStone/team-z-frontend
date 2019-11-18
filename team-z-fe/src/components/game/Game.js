import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Game() {

    useEffect(()=> {
        axios.get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
        .then( res => {
            console.log(res)
        })

    }, [])

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Game