const projects = [
    {
        name: "My Project",
        path: '/projects/my-project',
        imageLink: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        description: "This is a sample project, I did this as I was working on my website to see if it worked.",
        technologies: [
            {
                name: "React",
                use: "I made all the UI for my website in React"
            },
            {
                name: "Express",
                use: "I used Express to handle http requests for my website"
            }
        ],
        github: "https://github.com/Cali0707/personal_site"
    },
    {
        name: "Personal Website",
        path: '/projects/personal-website',
        imageLink: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        description: "This is the website you are on right now!",
        technologies: [
            {
                name: "React",
                use: "I made all the UI for my website in React"
            },
            {
                name: "Express",
                use: "I used Express to handle http requests for my website"
            }
        ],
        github: "https://github.com/Cali0707/personal_site"
    },
    {
        name: "Bridge Optimizer",
        path: "/projects/bridge-optimizer",
        imageLink: "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        description: "In this project I made a python script to calculate the optimal dimensions for a bridge. I used Python to iterate over all the dimensions which could be used to construct the bridge based off the project constraints and evaluated which dimensions were best.",
        technologies: [
            {
                name: "Python",
                use: "I used Python to iterate over all the dimensions which could be used to construct the bridge based off the project constraints and evaluated which dimensions were best.",
            }
        ],
        github: 'https://github.com/Cali0707/bridge_optimizer',
    },

];

export default projects
