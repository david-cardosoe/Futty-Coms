import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Futty Coms</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Home</Link></li>
                    <li>
                        <Link href={"/Leagues"}>Leagues</Link>
                    </li>
                    <li>
                        <Link href={"/Rooms"}>Rooms</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Nav