export const profile = {
    name: "Tomer",
    jobTitle: "Full Stack Developer",
    description: "I’m passionate about software development and I’m skilled in Java, Node.js, and React. I’m now looking for a entry level dev position."
}

export const projects = [
    {
        name: "Food Delivery App",
        slug: "Food-Delivery-App",
        image: "/assets/images/foodDelivery.png",
        description: "The Food Delivery App is a web-based application that allows customers to order food from restaurants. Restaurant owner can register to the app and add their restaurant and items to the menu.",
        videoSrc: "https://www.youtube.com/embed/ymoaX2B9ULE",
        stack: ["Node.js" , "React" ],
        technologies: {
            backend: ["Node.js", "Express.js", "MongoDB" ],
            frontend: ["React", "Redux", "TypeScript" ],
        },
        github: "https://github.com/TA-CodeProjects/food-delivery"
    },
    {
        name: "Stock Dashboard",
        slug: "Stock-Dashboard",
        image: "/assets/images/stock.png",
        description: "Stock Dashboard is a virtual platform that allows users to simulate trading stocks without risking real money.",
        videoSrc: "https://www.youtube.com/embed/IdxYufVa-rc",
        stack: ["Java" , "React" ],
        technologies: {
            backend: ["Spring Framework", "Spring Security", "MySql", "MongoDB" ],
            frontend: ["React", "Redux", "TypeScript", "Bootstrap" ],
        },
        github: "https://github.com/TA-CodeProjects/stocks_portofilo"
    },
    {
        name: "Convert App",
        slug: "Convert-App",
        image: "/assets/images/springCloud.png",
        description: "Simple money convert application build with spring cloud microservices and run on docker.",
        videoSrc: "",
        stack: ["MicroServices"],
        technologies: {
            backend: ["Spring cloud", "Discovery service", "Circuit Breaker", "Load Balancer", "Gateway", "Prometheus", "Docker" ],
            frontend: [],
        },
        github: "https://github.com/TA-CodeProjects/ms-spring"
    },
    {
        name: "Coupon System",
        slug: "Coupon-System",
        image: "/assets/images/couponsSystem.jpg",
        description: "The Coupon System App is a web-based application that allows customers to purchase coupons and companies to create and manage their own coupons. With this app, customers can easily find and purchase coupons for various products and services, while companies can attract new customers and increase sales by offering discounts and special promotions.",
        videoSrc: "https://www.youtube.com/embed/55iJHOVk2C0",
        stack: ["Java" , "React" ],
        technologies: {
            backend: ["Spring Framework", "Spring Security", "MySql" ],
            frontend: ["React", "Redux", "TypeScript", "Bootstrap" ],
        },
        github: "https://github.com/TA-CodeProjects/coupons_system"
    },
    {
        name: "Todo App",
        slug: "Todo-App",
        image: "/assets/images/todoApp.png",
        description: "Simple todo application users can register, submit a task, edit, delete and check it when completed.",
        videoSrc: "https://www.youtube.com/embed/L3zZmfNnQmk",
        stack: ["Java" , "React" ],
        technologies: {
            backend: ["Spring Framework", "Spring Security", "MySql" ],
            frontend: ["React", "Redux", "TypeScript", "Bootstrap" ],
        },
        github: "https://github.com/TA-CodeProjects/taas"
    },

   

]