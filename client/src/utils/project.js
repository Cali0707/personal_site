const projects = [
    {
        name: "Personal Website",
        path: '/projects/personal-website',
        imageLink: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        description: "This is the website you are on right now.",
        descriptionLong: "This is the website you are on right now. I wanted a place where I could showcase my various projects and interests, and I also wanted a place" +
            "to play around with and learn web frameworks, so I put those to objectives together and created this.",
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
        description: "In this project I made a python script to calculate the optimal dimensions for a bridge.",
        descriptionLong: "A civil engineering course (CIV102) project required the class to design a simply supported beam out of Matboard that would span 950mm " +
            "and be subjected to two point loads. My team went further and developed a Python program that found all possible dimensions which could be cut from the " +
            "provided Matboard, and then looped through them to find the optimal set of dimensions.",
        technologies: [
            {
                name: "Python",
                use: "I used Python to iterate over all the dimensions which could be used to construct the bridge based off the project constraints and evaluated which dimensions were best.",
            }
        ],
        github: 'https://github.com/Cali0707/bridge_optimizer',
    },
    {
        name: "3d Wrist Mouse",
        path: "/projects/3d-wrist-mouse",
        imageLink: "https://images.unsplash.com/photo-1562877773-a37120131ec4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        description: "I constructed a working prototype of a computer 'mouse' that allows a user to control their cursor by moving their hand around in the air.",
        descriptionLong: "For a two week engineering design project, I constructed a working prototype of a computer 'mouse' that allows a user to control their cursor " +
            "by moving their hand around in the air or on a desk. The project's objective was to reduce or prevent carpal tunnel syndrome. We accomplished this by " +
            "minimizing the root cause, namely, pressure on the medial nerve in the wrist.",
        technologies: [
            {
                name: "Arduino",
                use: "I soldered an Inertial Measurement Unit onto an Arduino MKR 1010 wifi board which would communicate to my computer."
            },
            {
                name: "Python",
                use: "I used Python to handle the Bluetooth Low Energy connection from the Arduino, to filter the incoming data from the Inertial Measurement Unit, and then " +
                    "to calculate the appropriate distance to move the mouse."
            },
            {
                name: "Bluetooth Low Energy",
                use: "I used Bluetooth Low Energy to stream data from the Inertial Measurement Unit to my computer."
            },
            {
                name: "C++",
                use: "I programmed all the code on the Arduino in C++, allowing it to read in the values from the IMU and send them via Bluetooth Low Energy to my computer."
            }
        ],
        github: "https://github.com/Cali0707/bluetooth_mouse"
    },
    {
        name: "Workout App",
        path: "/projects/workout-app",
        imageLink: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        description: "As a personal project I made a basic workout app to generate personalized workouts.",
        descriptionLong: "As a personal project starting in the spring of 2020, I developed an app to generate personalized workouts. Workouts take account of the user's ability " +
            "level, desired length of the work out, and the intended focus of the workout (eg. core, arms, etc.).",
        technologies: [
            {
                name: "Dart",
                use: "I developed all of the logic to create workouts in Dart."
            },
            {
                name: "Flutter",
                use: "I created all of the UI for the app in Flutter."
            }
        ]
    }
];

export default projects
