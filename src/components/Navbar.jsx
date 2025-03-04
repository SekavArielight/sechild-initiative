import React from 'react'
import { navigation } from '../constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav>
        <a href="/"><img src="/src/assets/hilink-logo.svg" alt="logo" /></a>

        <div>
            {navigation.map((item) => (
                <a href={item.url} key={item.id}>
                    {item.title}
                </a>
            ))}
        </div>

        <Button title="Donate"></Button>
    </nav>
  )
}

export default Navbar