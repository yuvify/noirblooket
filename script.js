var blooks = [
    "Old Boot",
    "Jellyfish",
    "Clownfish",
    "Frog",
    "Crab",
    "Pufferfish",
    "Blobfish",
    "Octopus",
    "Narwhal",
    "Dolphin",
    "Baby Shark",
    "Megalodon",
    "Snowy Owl",
    "Polar Bear",
    "Arctic Fox",
    "Baby Penguin",
    "Penguin",
    "Arctic Hare",
    "Seal",
    "Walrus",
    "Snow Globe",
    "Holiday Gift",
    "Hot Chocolate",
    "Holiday Wreath",
    "Stocking",
    "Gingerbread Man",
    "Gingerbread House",
    "Reindeer",
    "Snowman",
    "Santa Claus",
    "Lil Bot",
    "Lovely Bot",
    "Angry Bot",
    "Happy Bot",
    "Watson",
    "Buddy Bot",
    "Brainy Bot",
    "Mega Bot",
    "Toast",
    "Cereal",
    "Yogurt",
    "Breakfast Combo",
    "Orange Juice",
    "Milk",
    "Waffle",
    "Pancakes",
    "French Toast",
    "Pizza",
    "Light Blue",
    "Black",
    "Red",
    "Purple",
    "Pink",
    "Orange",
    "Lime",
    "Green",
    "Teal",
    "Tan",
    "Maroon",
    "Gray",
    "Mint",
    "Salmon",
    "Burgandy",
    "Baby Blue",
    "Dust",
    "Brown",
    "Dull Blue",
    "Yellow",
    "Blue",
    "Amber",
    "Dino Egg",
    "Dino Fossil",
    "Stegosaurus",
    "Velociraptor",
    "Brontosaurus",
    "Triceratops",
    "Tyrannosaurus Rex",
    "Chick",
    "Chicken",
    "Cow",
    "Goat",
    "Horse",
    "Pig",
    "Sheep",
    "Duck",
    "Alpaca",
    "Bear",
    "Moose",
    "Fox",
    "Raccoon",
    "Squirrel",
    "Owl",
    "Hedgehog",
    "Deer",
    "Wolf",
    "Beaver",
    "Rainbow Jellyfish",
    "Blizzard Clownfish",
    "Lovely Frog",
    "Lucky Frog",
    "Spring Frog",
    "Poison Dart Frog",
    "Lucky Hamster",
    "Chocolate Rabbit",
    "Lemon Crab",
    "Pirate Pufferfish",
    "Donut Blobfish",
    "Crimson Octopus",
    "Rainbow Narwhal",
    "Frost Wreath",
    "Tropical Globe",
    "New York Snow Globe",
    "London Snow Globe",
    "Japan Snow Globe",
    "Egypt Snow Globe",
    "Paris Snow Globe",
    "Red Sweater Snowman",
    "Blue Sweater Snowman",
    "Elf Sweater Snowman",
    "Santa Claws",
    "Cookies Combo",
    "Chilly Flamingo",
    "Snowy Bush Monster",
    "Nutcracker Koala",
    "Sandwich",
    "Ice Slime",
    "Frozen Fossil",
    "Ice Crab",
    "Rainbow Panda",
    "White Peacock",
    "Tiger Zebra",
    "Teal Platypus",
    "Red Astronaut",
    "Orange Astronaut",
    "Yellow Astronaut",
    "Lime Astronaut",
    "Green Astronaut",
    "Cyan Astronaut",
    "Blue Astronaut",
    "Pink Astronaut",
    "Purple Astronaut",
    "Brown Astronaut",
    "Black Astronaut",
    "Lovely Planet",
    "Lovely Peacock",
    "Haunted Pumpkin",
    "Pumpkin Cookie",
    "Ghost Cookie",
    "Red Gummy Bear",
    "Blue Gummy Bear",
    "Green Gummy Bear",
    "Chick Chicken",
    "Chicken Chick",
    "Raccoon Bandit",
    "Owl Sheriff",
    "Vampire Frog",
    "Pumpkin King",
    "Anaconda Wizard",
    "Spooky Pumpkin",
    "Spooky Mummy",
    "Agent Owl",
    "Master Elf",
    "Party Pig",
    "Wise Owl",
    "Spooky Ghost",
    "Phantom King",
    "Tim the Alien",
    "Rainbow Astronaut",
    "Hamsta Claus",
    "Ice Bat",
    "Ice Bug",
    "Ice Elemental",
    "Rock Monster",
    "Dink",
    "Donk",
    "Bush Monster",
    "Yeti",
    "Witch",
    "Wizard",
    "Elf",
    "Fairy",
    "Slime Monster",
    "Jester",
    "Dragon",
    "Queen",
    "Unicorn",
    "King",
    "Dingo",
    "Echidna",
    "Koala",
    "Kookaburra",
    "Platypus",
    "Joey",
    "Kangaroo",
    "Crocodile",
    "Sugar Glider",
    "Dog",
    "Cat",
    "Rabbit",
    "Goldfish",
    "Hamster",
    "Turtle",
    "Kitten",
    "Puppy",
    "Panda",
    "Sloth",
    "Tenrec",
    "Flamingo",
    "Zebra",
    "Elephant",
    "Lemur",
    "Peacock",
    "Chameleon",
    "Lion",
    "Earth",
    "Meteor",
    "Stars",
    "Alien",
    "Planet",
    "UFO",
    "Spaceship",
    "Astronaut",
    "Pumpkin",
    "Swamp Monster",
    "Frankenstein",
    "Vampire",
    "Zombie",
    "Mummy",
    "Caramel Apple",
    "Candy Corn",
    "Werewolf",
    "Ghost",
    "Tiger",
    "Orangutan",
    "Cockatoo",
    "Parrot",
    "Anaconda",
    "Jaguar",
    "Macaw",
    "Toucan",
    "Panther",
    "Capuchin",
    "Gorilla",
    "Hippo",
    "Rhino",
    "Giraffe",
    "Two of Spades",
    "Eat Me",
    "Drink Me",
    "Alice",
    "Queen of Hearts",
    "Dormouse",
    "White Rabbit",
    "Cheshire Cat",
    "Caterpillar",
    "Mad Hatter",
    "King of Hearts",
    "Deckhand",
    "Buccaneer",
    "Swashbuckler",
    "Treasure Map",
    "Seagull",
    "Jolly Pirate",
    "Pirate Ship",
    "Kraken",
    "Captain Blackbeard",
],
    botinfo = {},
    gameobject = {},
    cheats = {
        Hack: [
            {
                type: "button",
                name: "Crash host(crypto)",
                action: function (e) {
                    setUserVal("cr/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("tat/t", "t") : setUserVal("tat", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "button",
                name: "Turn Host Screen Green",
                action: function (e) {
                    null != e.green ? (e.green = !e.green) : (e.green = !0),
                        e.green
                            ? setUserVal(
                                "cr",
                                (function () {
                                    for (
                                        var e =
                                            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                                        t = 0;
                                        t < 3e5;
                                        t++
                                    )
                                        (e += String.fromCharCode(3655)),
                                            t % 61 == 0 && (e += String.fromCharCode(32));
                                    return (e +=
                                        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                                })()
                            )
                            : setUserVal("cr", 0),
                        (e.innerText = e.green
                            ? "Ungreen Host Screen"
                            : "Turn Host Screen Green");
                },
            },
            {
                type: "button",
                name: "Set Crash Password",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen
                            ? setUserVal("p/toString", "t")
                            : setUserVal("p", "DogLover3"),
                        (e.innerText = e.frozen
                            ? "Remove Crash Password"
                            : "Set Crash Password");
                },
            },
            {
                type: "input",
                name: "Set Crypto",
                action: function (e) {
                    setUserVal("cr", e);
                },
            },
            {
                type: "input",
                name: "Set Password",
                action: function (e) {
                    setUserVal("p", e);
                },
            },
            {
                type: "select",
                name: "Steal Crypto From",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:${prompt("How much crypto do you want to steal?")}`
                    );
                },
            },
            {
                type: "input",
                name: "Advertise Text",
                action: function (e) {
                    setUserVal(
                        "cr",
                        (function () {
                            for (var t = "", n = 0; n < 100; n++) t += "1";
                            for (n = 0; n < 500; n++)
                                (t += e), (t += n % 10 == 0 ? "\n\r" : " ");
                            return t;
                        })()
                    );
                },
            },
            {
                type: "select",
                name: "Send Ad Text",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    var t = prompt(
                        "Enter the text you would like to send (this will override your blook):"
                    );
                    if (t) {
                        if (t.includes(":"))
                            return void alert("Ad text cannot include a colon!");
                        setUserVal(
                            "b",
                            "Parrot:" +
                            (function () {
                                for (var e = "", n = 0; n < 500; n++) e += t + " ";
                                return e;
                            })()
                        ),
                            setUserVal("tat", `${e}:100`);
                    }
                },
            },
        ],
        Gold: [
            {
                type: "button",
                name: "Crash host(gold)",
                action: function (e) {
                    setUserVal("g/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("tat/t", "t") : setUserVal("tat", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "select",
                name: "Steal Gold From",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:${prompt("How much gold do you want to steal?")}`
                    );
                },
            },
            {
                type: "select",
                name: "Set Player's Gold",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:swap:${prompt("What do you want to set it to?")}`
                    );
                },
            },
            {
                type: "input",
                name: "Set Gold",
                action: function (e) {
                    setUserVal("g", e);
                },
            },
            {
                type: "select",
                name: "Send Ad Text",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    var t = prompt(
                        "Enter the text you would like to send (this will override your blook):"
                    );
                    if (t) {
                        if (t.includes(":"))
                            return void alert("Ad text cannot include a colon!");
                        setUserVal(
                            "b",
                            "Parrot:" +
                            (function () {
                                for (var e = "", n = 0; n < 500; n++) e += t + " ";
                                return e;
                            })()
                        ),
                            setUserVal("tat", `${e}:100`);
                    }
                },
            },
        ],
        Defense2: [
            {
                type: "button",
                name: "Crash host(defense2)",
                action: function (e) {
                    setUserVal("d/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("r/toString", "t") : setUserVal("r", 1),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set Damage",
                action: function (e) {
                    setUserVal("d", e);
                },
            },
            {
                type: "input",
                name: "Set Round",
                action: function (e) {
                    setUserVal("r", e);
                },
            },
        ],
        Defense: [
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("d/toString", "t") : setUserVal("d", 0),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set Damage",
                action: function (e) {
                    setUserVal("d", e);
                },
            },
        ],
        Fish: [
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("f/t", "t") : setUserVal("f", "Old Boot"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set Weight",
                action: function (e) {
                    setUserVal("w", e);
                },
            },
            {
                type: "input",
                name: "Set Caught Fish",
                action: function (e) {
                    setUserVal("f", e);
                },
            },
            {
                type: "input",
                name: "Send Distraction",
                action: function (e) {
                    setUserVal("s", !0), setUserVal("f", e);
                },
            },
        ],
        Pirate: [
            {
                type: "button",
                name: "Crash host(pirate)",
                action: function (e) {
                    setUserVal("d/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("tat/t", "t") : setUserVal("tat", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "select",
                name: "Steal Doubloons From",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:${prompt("How many doubloons do you want to steal?")}`
                    );
                },
            },
            {
                type: "input",
                name: "Set Doubloons",
                action: function (e) {
                    setUserVal("d", e);
                },
            },
            {
                type: "select",
                name: "Send Ad Text",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    var t = prompt(
                        "Enter the text you would like to send (this will override your blook):"
                    );
                    if (t) {
                        if (t.includes(":"))
                            return void alert("Ad text cannot include a colon!");
                        setUserVal(
                            "b",
                            "Parrot:" +
                            (function () {
                                for (var e = "", n = 0; n < 500; n++) e += t + " ";
                                return e;
                            })()
                        ),
                            setUserVal("tat", `${e}:100`);
                    }
                },
            },
        ],
        Dino: [
            {
                type: "button",
                name: "Crash host(dino)",
                action: function (e) {
                    setUserVal("f/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "input",
                name: "Set Fossils",
                action: function (e) {
                    setUserVal("f", e);
                },
            },
            {
                type: "staticsel",
                name: "Set Cheating",
                values: ["true", "false"],
                action: function (e) {
                    setUserVal("ic", e);
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("tat/t", "t") : setUserVal("tat", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
        ],
        Cafe: [
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("tat/t", "t") : setUserVal("tat", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set Cash",
                action: function (e) {
                    setUserVal("ca", e);
                },
            },
            {
                type: "input",
                name: "Set Upgrade(ex. Cereal:1)",
                action: function (e) {
                    setUserVal("up", e);
                },
            },
            {
                type: "select",
                name: "Attack player",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:${prompt("What attack do you want(inspect, pay, etc)?")}`
                    );
                },
            },
        ],
        Brawl: [
            {
                type: "button",
                name: "Crash host(brawl)",
                action: function (e) {
                    setUserVal("xp/t", "t"), (e.innerText = "Crashing");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen
                            ? setUserVal("up/t", "t")
                            : setUserVal("up", "Dark Energy:2"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set XP",
                action: function (e) {
                    setUserVal("xp", e);
                },
            },
            {
                type: "input",
                name: "Set Upgrade(upgrade:level)",
                action: function (e) {
                    setUserVal("up", e);
                },
            },
        ],
        Racing: [
            {
                type: "button",
                name: "Freeze Scoreboard and Attacks",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("pr/toString", "t") : setUserVal("pr", 0),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard and Attacks"
                            : "Freeze Scoreboard and Attacks");
                },
            },
            {
                type: "input",
                name: "Set Questions Left",
                action: function (e) {
                    setUserVal("pr", gameobject.s.a - parseInt(e));
                },
            },
            {
                type: "select",
                name: "Attack player",
                computed: function (e) {
                    return (
                        Object.keys(gameobject.c).length !==
                        Array.from(e.children).length && Object.keys(gameobject.c)
                    );
                },
                action: function (e) {
                    setUserVal(
                        "tat",
                        `${e}:${prompt("Which attack do you want to perform(rocket,etc)?")}`
                    );
                },
            },
        ],
        Classic: [
            {
                type: "button",
                name: "Freeze Question",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("a/toString", "t") : setUserVal("a", 1),
                        (e.innerText = e.frozen ? "Unfreeze Question" : "Freeze Question");
                },
            },
        ],
        Royale: [
            {
                type: "button",
                name: "Send Crash Answer",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen
                            ? setVal(`${botinfo.gid}/a/${botinfo.name}/a/toString`, "t")
                            : setVal(`${botinfo.gid}/a/${botinfo.name}/a/toString`, 2),
                        (e.innerText = e.frozen
                            ? "Unsend Crash Answer"
                            : "Send Crash Answer");
                },
            },
        ],
        Rush: [
            {
                type: "button",
                name: "Freeze Host's Computer",
                action: function (e) {
                    setUserVal("bs", 1e307),
                        (e.innerHTML = "He aint coming back from this one!");
                },
            },
            {
                type: "button",
                name: "Freeze Scoreboard",
                action: function (e) {
                    null != e.frozen ? (e.frozen = !e.frozen) : (e.frozen = !0),
                        e.frozen ? setUserVal("d/toString", "t") : setUserVal("d", "t"),
                        (e.innerText = e.frozen
                            ? "Unfreeze Scoreboard"
                            : "Freeze Scoreboard");
                },
            },
            {
                type: "input",
                name: "Set Blooks",
                action: function (e) {
                    setUserVal("bs", e);
                },
            },
            {
                type: "input",
                name: "Set Defense",
                action: function (e) {
                    setUserVal("d", e);
                },
            },
            {
                type: "input",
                name: "Advertise Text",
                action: function (e) {
                    setUserVal(
                        "d",
                        (function () {
                            for (var t = "", n = 0; n < 100; n++) t += "1";
                            for (n = 0; n < 500; n++)
                                (t += e), (t += n % 10 == 0 ? "\n\r" : " ");
                            return t;
                        })()
                    );
                },
            },
        ],
        "Rush (teams)": [
            {
                type: "button",
                name: "Freeze Host's Computer",
                action: function (e) {
                    setTeamVal("bs", 1e307),
                        (e.innerHTML = "He aint coming back from this one!");
                },
            },
            {
                type: "input",
                name: "Set Blooks",
                action: function (e) {
                    setTeamVal("bs", parseInt(e));
                },
            },
            {
                type: "input",
                name: "Set Defense",
                action: function (e) {
                    setTeamVal("d", parseInt(e));
                },
            },
        ],
    },
    global = [
        {
            type: "staticsel",
            name: "Set Blook",
            values: blooks,
            action: function (e) {
                setUserVal("b", e);
            },
        },
        {
            type: "input",
            name: "Set Banner",
            action: function (e) {
                setUserVal("bg", e);
            },
        },
        {
            type: "button",
            name: "Leave Game",
            action: function (e) {
                leaveGame(), finishG(), (e.innerText = "Leaving");
            },
        },
        {
            type: "button",
            name: "Crash host",
            action: function (e) {
                setUserVal("b/toString", "t"), (e.innerText = "Crashing");
            },
        },
    ];
function setTeamVal(e, t) {
    return setVal(`/${botinfo.gid}/a/${botinfo.name}/${e}`, t);
}
function onUpdateData(e) {
    gameobject && gameobject.s ? onData(e) : onFirstData(e), (gameobject = e);
}
function joinGame(e, t, n) {
    if (botinfo.connecting) {
        errorBar("Connecting to game, please wait...");
    } else {
        connect(e, t, n);
    }
}

function onFirstData(e) {
    var t = e.s.t;
    "Rush" === t && "Teams" === e.s.m && (t = "Rush (teams)"),
        console.log("Game type: " + t),
        renderCheats(t);
}
function onData(e) {
    return e
        ? "fin" === e.stg && botinfo.connected
            ? ((botinfo.connected = !1),
                console.log("Game ended!"),
                console.log("Time: " + getTime()),
                leaveGame(),
                void finishG())
            : void 0
        : (console.log("Game disconnected!"),
            errorBar("Game crashed!"),
            leaveGame(),
            void finishG());
}
function leaveGame() {
    botinfo.connected &&
        (setUserVal("", {}),
            (botinfo.fbdb = !1),
            deleteApp(botinfo.liveApp),
            (botinfo.connected = !1),
            (botinfo.liveApp = !1),
            (gameobject = {}),
            updateStatus("Ready"));
}
function setUserVal(e, t) {
    botinfo.connected
        ? (console.log(e, t),
            setVal({ path: "c/" + botinfo.name + "/" + e, val: t }))
        : alert("You must be connected to a game to set values!");
}
function getTime() {
    var e = (Date.now() - new Date(gameobject.s.d).getTime()) / 6e4;
    return Math.floor(e) + ":" + (Math.floor(60 * e) % 60);
}
function createNormText(e) {
    var t = document.createElement("div");
    return (t.className = "normtext"), (t.innerText = e), t;
}
function createCheatContainer() {
    var e = document.createElement("div");
    return (e.className = "cheatcontainer"), e;
}
function updateStatus(e) {
    document.getElementById("status").innerText = "Status: " + e;
}
function createButton(e, t) {
    var n = document.createElement("button");
    return (
        (n.innerText = e),
        n.addEventListener("click", function () {
            t(n);
        }),
        n
    );
}
function renderCheats(e) {
    var t = document.getElementById("ctrlpanel");
    if (
        ((document.getElementById("cc").style.display = "none"),
            t.appendChild(createNormText("Noir is activated! Game mode: " + e)),
            cheats[e])
    ) {
        t.appendChild(createNormText("Cheats: "));
        var n = createCheatContainer();
        cheats[e].forEach((e) => {
            switch (e.type) {
                case "button":
                    n.appendChild(createButton(e.name, e.action));
                    break;
                case "input":
                    n.appendChild(createInp(e.name, e.action));
                    break;
                case "select":
                    n.appendChild(createSel(e.name, e.computed, e.action));
                    break;
                case "staticsel":
                    n.appendChild(createStaticSel(e.name, e.values, e.action));
                    break;
                default:
                    console.log("Unsupported!");
            }
        }),
            t.appendChild(n);
    }
    t.appendChild(createNormText("Global Cheats:")),
        t.appendChild(createGlobalContainer());
}
function finishG() {
    var e = document.getElementById("ctrlpanel"),
        t = document.getElementById("cc");
    (e.innerHTML = ""), (t.style.display = "block"), errorBar("Game Ended!");
}
function createInp(e, t) {
    var n = document.createElement("div");
    n.className = "inputcontainer";
    var a = document.createElement("div");
    (a.innerText = e + ":"), n.appendChild(a);
    var o = document.createElement("input");
    return (
        n.appendChild(o),
        n.addEventListener("click", function (e) {
            e.target !== o && t(o.value);
        }),
        n
    );
}
function createSel(e, t, n) {
    var a = document.createElement("div");
    a.className = "inputcontainer";
    var o = document.createElement("div");
    (o.innerText = e + ":"), a.appendChild(o);
    var r = document.createElement("select");
    return (
        (r.innerHTML = "<option>Click to update</option>"),
        r.addEventListener("click", function (e) {
            var n = t(r);
            n &&
                ((r.innerHTML = ""),
                    n.sort().forEach((e) => {
                        var t = document.createElement("option");
                        (t.innerText = e), r.appendChild(t);
                    }));
        }),
        a.appendChild(r),
        a.addEventListener("click", function (e) {
            e.target !== r && n(r.value);
        }),
        a
    );
}
function createGlobalContainer() {
    var e = createCheatContainer();
    return (
        global.forEach((t) => {
            switch (t.type) {
                case "button":
                    e.appendChild(createButton(t.name, t.action));
                    break;
                case "input":
                    e.appendChild(createInp(t.name, t.action));
                    break;
                case "select":
                    e.appendChild(createSel(t.name, t.computed, t.action));
                    break;
                case "staticsel":
                    e.appendChild(createStaticSel(t.name, t.values, t.action));
                    break;
                default:
                    console.log("Unsupported!");
            }
        }),
        e
    );
}
function createStaticSel(e, t, n) {
    var a = document.createElement("div");
    a.className = "inputcontainer";
    var o = document.createElement("div");
    (o.innerText = e + ":"), a.appendChild(o);
    var r = document.createElement("select");
    return (
        t.sort().forEach((e) => {
            var t = document.createElement("option");
            (t.innerText = e), r.appendChild(t);
        }),
        a.appendChild(r),
        a.addEventListener("click", function (e) {
            e.target !== r && n(r.value);
        }),
        a
    );
}
function findGameCode(e) {
    const t = e.match(/\b\d{7}\b/);
    return t ? t[0] : null;
}
async function recogText(e, t) {
    const n = await Tesseract.createWorker("eng");
    t((await n.recognize(e)).data.text), await n.terminate();
}
async function getCode() {
    return await recogText("stream.png", function (e) {
        var t = findGameCode(e);
        t
            ? (document.querySelector("#gcode").value = t)
            : errorBar("No game code found but found text: " + e);
    });
}
function genMessage(e, t) {
    for (var n = "", a = 0; a < t; a++) n += e + " ";
    return n;
}
async function connect(e, t, n) {
    (botinfo.connected = !1),
        (botinfo.connecting = !0),
        (botinfo.name = t),
        (botinfo.gid = e),
        updateStatus("Fetching token...");
    const a = await fetch(
        "https://blooket.schoolcheats.net/api/proxy/blooketfb/c/firebase/join",
        {
            body: JSON.stringify({ id: e, name: t }),
            headers: { "x-cookie": window.bcookie },
            method: "PUT",
        }
    ).then((e) => e.json());
    if ((updateStatus("Connecting to game..."), a.success)) {
        const o = initializeApp(
            {
                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                authDomain: "blooket-2020.firebaseapp.com",
                projectId: "blooket-2020",
                storageBucket: "blooket-2020.appspot.com",
                messagingSenderId: "741533559105",
                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                measurementId: "G-S3H5NGN10Z",
                databaseURL: a.fbShardURL,
            },
            t + "tt"
        ),
            r = getAuth(o);
        await signInWithCustomToken(r, a.fbToken);
        const c = getDatabase(o);
        await set(ref(c, `${e}/c/${t}`), {
            b: n
                ? blooks[Math.floor(Math.random() * blooks.length)]
                : "Rainbow Astronaut",
            bg: n ? "" : "fire",
            rt: !0,
        }),
            (botinfo.fbdb = c),
            (botinfo.liveApp = o),
            (botinfo.connecting = !1),
            (botinfo.connected = !0),
            updateStatus("Connected to game"),
            onValue(ref(c, `${e}`), (e) => {
                botinfo.connected && onUpdateData(e.val());
            });
    } else
        updateStatus("Ready"),
            (botinfo.connecting = !1),
            errorBar("Connect error: " + a.msg);
}
function bypassFilter(e) {
    for (var t = e.split(""), n = "", a = 0; a < t.length; a++) n += "­" + t[a];
    return n;
}
function setVal(e, t) {
    botinfo.connected
        ? botinfo.fbdb
            ? set(ref(botinfo.fbdb, e), t)
            : errorBar("Cannot set value when there is no game!")
        : errorBar("Cannot set value while disconnected!");
}
function setUserVal(e, t) {
    console.log(e, t), setVal(`/${botinfo.gid}/c/${botinfo.name}/${e}`, t);
}
document.querySelectorAll("checkbox").forEach((e) => {
    e.addEventListener("click", function () {
        e.getAttribute("checked")
            ? e.removeAttribute("checked")
            : e.setAttribute("checked", "true");
    });
}),
    document.querySelector("#gcode").addEventListener("keydown", function (e) {
        13 === e.keyCode && join();
    }),
    document.querySelector("#gname").addEventListener("keydown", function (e) {
        13 === e.keyCode && join();
    }),
    fetch("https://blooket.schoolcheats.net/api/proxy/play.blooket.com/play")
        .then((e) => {
            window.bcookie = e.headers.get("X-Set-Cookie").split(";")[0];
        })
        .then((e) => {
            updateStatus("Ready");
        });
