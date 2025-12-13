import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="rest-card">
            <img className="img" src="/test" />
            <p>Kusum Roll</p>
        </div>
    )

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                <RestaurantCard />
            </div>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
