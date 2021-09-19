
const SHOP_DATA = [
    {
        name: "Red Bench",
        id: 0,
        category: "people",
        price: 3.89,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "woman-leaning-back-on-tree-trunk-using-black-dslr-camera-during-day"
        },
        bestseller: true,
        featured: false,
        details: null,
    },
    {
        name: "Egg Balloon",
        id: 1,
        category: "food",
        price: 93.89,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/6453402/pexels-photo-6453402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "smiling-woman-doing-yoga-excercises"
        },
        bestseller: false,
        featured: false,
        details: null,
    },
    {
        name: "Man",
        id: 2,
        category: "people",
        price: 500,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/7084502/pexels-photo-7084502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "smiling-young-male-friends-drinking-beer-during-st-patricks-day-party"
        },
        bestseller: true,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Architecture",
        id: 3,
        category: "landmarks",
        price: 43.5,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1677275/pexels-photo-1677275.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Samurai King Restling",
        id: 4,
        category: "landmarks",
        price: 101,
        currency: "USD",
        image: {
            src: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
            alt: "toddle-wearing-gray-button-collared-shirt-with-curly-hair"
        },
        bestseller: false,
        featured: true,
        details: {
            dimmentions: {
                width: 1020,
                height: 1020
            },
            size: 15000,
            description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            recommendations: [
                { src: "https://images.pexels.com/photos/8964916/pexels-photo-8964916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt: "grayscale-photo-of-toddler-with-braided-hair" },
                { src: "https://images.pexels.com/photos/4056969/pexels-photo-4056969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt: "person-wearing-high-top-sneakers" },
                { src: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", alt: "photo-of-girl-wearing-half-sleeved-dress-near-green-leaf-plant" }
            ]
        }
    },
    {
        name: "Oliver Sjöström",
        id: 5,
        category: "boats",
        price: 29.0,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Jennifer Alex",
        id: 6,
        category: "boats",
        price: 83.4,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Eyush bokman",
        id: 7,
        category: "boats",
        price: 11,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1030870/pexels-photo-1030870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Daria Shevtsova",
        id: 8,
        category: "boats",
        price: 29,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7716396/pexels-photo-7716396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Daniel nwosa",
        id: 9,
        category: "trees",
        price: 4.5,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Marlene Leppänen",
        id: 10,
        category: "boats",
        price: 101,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Mikhail Nilov",
        id: 11,
        category: "boats",
        price: 101,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7530429/pexels-photo-7530429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Dmitriy Ganin",
        id: 12,
        category: "boats",
        price: 101,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7716385/pexels-photo-7716385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Pixabay",
        id: 13,
        category: "boats",
        price: 183,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/415188/pexels-photo-415188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Angela Roma",
        id: 14,
        category: "boats",
        price: 140,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7479737/pexels-photo-7479737.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Sarah chai",
        id: 15,
        category: "boats",
        price: 160,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7282349/pexels-photo-7282349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Maraim sunday",
        id: 16,
        category: "boats",
        price: 738,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7585740/pexels-photo-7585740.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Miriam Alonso",
        id: 17,
        category: "boats",
        price: 300,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/7592373/pexels-photo-7592373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "olia danilevich",
        id: 18,
        category: "boats",
        price: 45.89,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/8964938/pexels-photo-8964938.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: false,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },
    {
        name: "Leah Kelley",
        id: 19,
        category: "boats",
        price: 2.3,
        currency: "USD",
        dimmentions: {
            width: 1020,
            height: 1020
        },
        image: {
            src: "https://images.pexels.com/photos/8964900/pexels-photo-8964900.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            alt: "woman-in-white-dress-shirt"
        },
        bestseller: true,
        featured: false,
        details: null,
        description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely ",
    },

]

export default SHOP_DATA; 