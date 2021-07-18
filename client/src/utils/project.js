const projects = [
    {
        name: "Ski Airbags",
        path: '/projects/avalanche-airbag-trigger-system',
        imageLink: 'https://images.unsplash.com/photo-1555104876-061df4ef2c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        description: "As part of a design project I worked on a team to improve the safety and ease of use of triggers for ski airbags",
        descriptionLong: "Avalanche safety has come very far in the past few decades, and one of the main technologies which has proven to be effective has been Avalanche Airbags. " +
            "These work by increasing the volume of the wearer without greatly increasing their mass, allowing the Granular Convection effect to lift them to the top of the avalanche. " +
            "As a majority of deaths in avalanches come from asphyxiation due to being buried under multiple feet of snow, this technology saves lives quite effectively. However, " +
            "the current method of triggering these airbags (by pulling a strap on the shoulder of a backpack) is quite difficult and non-intuitive, particularly for skiers who have poles in their hands. " +
            "As such, my group set out to redesign this trigger system. We ended up taking a two-pronged approach which is also backwards-compatible with the original trigger method. " +
            "The primary method of triggering our system is by voice activation of an app, which triggers a motor that deploys the airbag. The secondary, backup method of triggering our " +
            "system is automatic, and is controlled by a microcontroller housed in the backpack which is connected to a set of pressure sensors strategically placed around the backpack. " +
            "Finally, after consulting with stakeholders, we found that while our system was more intuitive for new skiers, many older skiers who were already used to the existing system " +
            "would have a hard time learning anything new, so we made sure our system was backwards-compatible and supported the old method of trigger.",
        technologies: [
            {
                name: "Arduino",
                use: "I used an Arduino MKR 1010 wifi board to receive data via Bluetooth Low Energy (BLE) from an app, triggering a motor which would open the airbag."
            },
            {
                name: "Bluetooth Low Energy",
                use: "I used Bluetooth Low Energy (BLE) to communicate from the Flutter application to the Arduino."
            },
            {
                name: "Flutter",
                use: "I used Flutter to create the UI for the iOS/Android app which would allow users to choose a trigger word, and then would listen for said trigger word, triggering the airbag when it hears the word"
            },
            {
                name: "C++",
                use: "I used C++ to write all of the code for the Arduino to receive the incoming trigger message and power a motor."
            },
            {
                name: "Dart",
                use: "I used Dart to write all the logic for the iOS/Android app, allowing users to select a word, and also listening for said trigger word and use Bluetooth Low Energy to trigger the Arduino."
            }
        ],
        github: "https://github.com/Cali0707/ski_avalanche_app"
    },
    {
        name: "F!rosh Website",
        path: "/projects/f!rosh-website",
        imageLink: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        description: "I worked with the F!rosh week tech team to make the website for F!rosh week 2021",
        descriptionLong: "I worked with four other UofT engineering students to create the website for F!rosh week 2021. My responsibilities included making the React components " +
            "for the schedule and timeline, as well as for the FAQ page. Additionally, I worked in the backend to generate a PDF confirming the Frosh's information after their registration " +
            "and email it to them, confirming their registration.",
        technologies: [
            {
                name: "React",
                use: "I used React to create a Schedule component and a Timeline component. Additionally, I used React to create a FAQ page with a search bar and tabs by category."
            },
            {
                name: "Express",
                use: "I used Express to handle the backend requests showing that a frosh had registered, triggering the generation of a PDF and emailing that to them with nodemailer"
            },
            {
                name: "MongoDB",
                use: "I worked with others on the team to revise the schemas we used for our collections in MongoDB, specifically to store Frosh data."
            }
        ],
        link: "orientation.skule.ca"
    },
    {
        name: "F!rosh App",
        path: "/projects/f!rosh-app",
        imageLink: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        description: "I am currently working on creating an application to handle registration, scheduling, and push notifications during F!rosh week 2021.",
        descriptionLong: "I am currently making an application that will handle daily registration, scheduling, and push notifications for F!rosh week 2021. " +
            "With the ongoing pandemic, we are trying to minimize the number of interactions between leaders and frosh at F!rosh week, so having an app where the users " +
            "can register themselves and see their schedule will help with that. Additionally, as many of the frosh and even many leaders have never been on campus before, " +
            "the push notifications from the app can help remind them where to go at the right time, as well as how to get there.",
        technologies: [
            {
                name: "Flutter",
                use: "I used Flutter to make all the UI for the app, including to generate QR codes."
            },
            {
                name: "Dart",
                use: "I used Dart to handle all the logic including https requests to the orientation backend, and reading QR codes."
            },
            {
                name: "Express",
                use: "I used Express to create some API routes on the orientation backend to handle the needs of the app."
            },
            {
                name: "MongoDB",
                use: "I used MongoDB to store frosh registration information."
            }
        ]
    },
    {
        name: "F!rosh Discord Bot",
        path: '/projects/f!rosh-discord-bot',
        imageLink: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        description: "I worked with members of the F!rosh week tech team to create a discord bot to handle submissions during the F!rosh week scavenger hunt.",
        descriptionLong: "",
        technologies: [
            {
                name: "Python",
                use: "I used python to write all the functions to handle the backend logic of the discord bot, from handling user login, content submission, to querying the MongoDB instance."
            },
            {
                name: "MongoDB",
                use: ""
            }
        ]
    },
    {
        name: "Personal Website",
        path: '/projects/personal-website',
        imageLink: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        description: "This is the website you are on right now.",
        descriptionLong: "This is the website you are on right now. I wanted a place where I could showcase my various projects and interests, and I also wanted a place" +
            "to play around with and learn more about React, Express, and Node.js. So I put those two objectives together and created this.",
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
                use: "I soldered an Inertial Measurement Unit onto an Arduino MKR 1010 wifi board which communicated to my computer."
            },
            {
                name: "Python",
                use: "I used Python on my personal computer to handle the Bluetooth Low Energy connection from the Arduino, to filter the incoming data from the Inertial Measurement Unit, and then " +
                    "to calculate the appropriate distance to move the mouse."
            },
            {
                name: "Bluetooth Low Energy",
                use: "I used Bluetooth Low Energy to stream data from the Arduino to my computer."
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
        descriptionLong: "As a personal project starting in the spring of 2020, I developed an app to generate personalized workouts similar to those my coach wrote, with the " +
            "added objective of learning Dart and Flutter. Workouts take account of the user's ability " +
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
    },

];

export default projects
