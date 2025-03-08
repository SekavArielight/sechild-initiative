import React from 'react'
import { navigation } from '../constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-32 py-5">
        <a href="/"><img src="/src/assets/hilink-logo.svg" alt="logo" /></a>

        <div>
            {navigation.map((item) => (
                <a href={item.url} key={item.id} className="mx-3 text-sm">
                    {item.title}
                </a>
            ))}
        </div>

        <Button title="Donate"></Button>
    </nav>
  )
}

export default Navbar