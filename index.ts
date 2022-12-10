#!/usr/bin/env node

console.log('hey there!')

import axios from 'axios'

axios.get('https://httpbin.org/ip')
    .then((response) => {
        console.log(`Your IP is ${response.data.origin}`)
    })
