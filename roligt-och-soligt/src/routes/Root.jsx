import '../App.css'
import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'
import HamburgerMenu from '../components/hamburgermenu/HamburgerMenu'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../recoil/atom/showHamburger/showHamburger'
import styled from 'styled-components'
import isLoadingAPI from '../recoil/atom/isLoadingAPI/isLoadingAPI'
import productList from '../recoil/atom/products/products'
import staffList from '../recoil/atom/staffList/staffList'

export default function Root() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)
    const [isLoading, setIsLoading] = useRecoilState(isLoadingAPI)
    const [products, setProducts] = useRecoilState(productList)
    const [users, setUsers] = useRecoilState(staffList)

    const Space = styled.div`
        margin: 3em;
    `

    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
    const shopId = 3001

    async function getAllProducts() {
        try {
            let response = await fetch(baseUrl + '?action=get-products&shopid=' + shopId)
            const data = await response.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log('error !')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    async function fetchUsers() {
        const response = await fetch((baseUrl + '?action=get-users&shopid=' + shopId))
        const statusObject = await response.json()
        console.log(statusObject)
        statusObject.stats === 'success' ? true : false
        setUsers(statusObject)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='body'>
            <header>
                <Header />
            </header>
            <main>
            <Space/>
                {showHamburgerMenu && <HamburgerMenu />}
                { isLoading ? <p> Laddar ... </p> : <Outlet /> }
            </main>
        </div>
    )
}