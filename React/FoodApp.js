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

const styleCard = {
    backgroundColor: "#f0f0f0" // Inline styling but this is a JS object.
}

const RestaurantCard = (props) => {
    return (
        <div className="rest-card" style={styleCard}>
            <img className="img" src={props.img} alt={props.resName}/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars} stars</h4>
            <h4>{props.time}</h4>
        </div>
    )

}

const Footer = () => {
    return (
        <></>
    )
}

const restList = [
    {
        resName: "KFC",
        cuisine: "Chicken Nuggets",
        stars: 4.2,
        time: "30 minutes",
        img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=300&h=200&fit=crop"
    },
    {
        resName: "MCD",
        cuisine: "Burger",
        stars: 4.1,
        time: "25 minutes",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
    },
    {
        resName: "Pizza Hut",
        cuisine: "Pizza",
        stars: 4.3,
        time: "28 minutes",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop"
    },
    {
        resName: "Domino's",
        cuisine: "Pizza",
        stars: 4.0,
        time: "32 minutes",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop"
    },
    {
        resName: "Subway",
        cuisine: "Sandwiches",
        stars: 4.2,
        time: "20 minutes",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=200&fit=crop"
    },
    {
        resName: "Starbucks",
        cuisine: "Coffee",
        stars: 4.6,
        time: "15 minutes",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop"
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                {restList.map((restaurant) => (
                    <RestaurantCard key={restaurant.resName} {...restaurant} />
                ))}
            </div>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
