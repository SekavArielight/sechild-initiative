import React from 'react'
import { navigation } from '../constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50 flex items-center justify-between px-32 py-5">
        <a href="/"><img src="/src/assets/hilink-logo.svg" alt="logo" /></a>

        <div>
            {navigation.map((item) => (
                <a href={item.url} key={item.id} className="mx-3 text-sm text-[#fff]">
                    {item.title}
                </a>
            ))}
        </div>

        <Button title="Donate"></Button>
    </nav>
  )
}

export default Navbar