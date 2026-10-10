import express from 'express'
const app = express();

const port = process.env.PORT || 3001;

const vans = [
    {
        id: 1,
        name: "Trekker",
        price: 70,
        description: "A reliable van for your travels",
        imageUrl: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=500&auto=format&fit=crop",
        type: "simple"
    },
    {
        id: 2,
        name: "Explorer",
        price: 80,
        description: "A spacious van for your travels",
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop",
        type: "luxury"
    },
    {
        id: 3,
        name: "Pathfinder",
        price: 90,
        description: "A rugged van for your travels",
        imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format&fit=crop",
        type: "rugged"
    },
    {
        id: 4,
        name: "Green Wonder",
        price: 60,
        description: "A classic van for budget travel.",
        imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&auto=format&fit=crop",
        type: "simple"
    },
    {
        id: 5,
        name: "Beach Bum",
        price: 100,
        description: "Enjoy the luxury of the beach with this spacious van.",
        imageUrl: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=500&auto=format&fit=crop",
        type: "luxury"
    },
    {
        id: 6,
        name: "Mountain Gorilla",
        price: 85,
        description: "Conquer any terrain with this rugged beast.",
        imageUrl: "https://images.unsplash.com/photo-1533036665798-963d76b1fbe1?w=500&auto=format&fit=crop",
        type: "rugged"
    },
    {
        id: 7,
        name: "City Cruiser",
        price: 75,
        description: "Navigate the city in style with this compact van.",
        imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&auto=format&fit=crop",
        type: "simple"
    },
    {
        id: 8,
        name: "Desert Rose",
        price: 95,
        description: "A luxurious van designed for the adventurous soul.",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e28c2426069?w=500&auto=format&fit=crop",
        type: "luxury"
    },
    {
        id: 9,
        name: "Alpine Rover",
        price: 88,
        description: "Built to handle the mountains, this van is your perfect companion.",
        imageUrl: "https://images.unsplash.com/photo-1511023440523-dfaa493d58b7?w=500&auto=format&fit=crop",
        type: "rugged"
    },
    {
        id: 10,
        name: "Forest Hideaway",
        price: 65,
        description: "A cozy and affordable choice for nature lovers.",
        imageUrl: "https://images.unsplash.com/photo-1501475133849-4761353b6107?w=500&auto=format&fit=crop",
        type: "simple"
    }
]







app.get('/api/vans', (req, res) => {

    if (req.query.search) {
        const filterVans = vans.filter((van) => {
            return van.type.includes(req.query.search)
        })
        return res.json({ vans: filterVans })
    }

    setTimeout(() => {
        res.json({ vans: vans })
    }, 3000)

})




app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})