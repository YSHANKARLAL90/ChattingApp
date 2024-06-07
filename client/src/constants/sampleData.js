


export const sampleChats = [{
    avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Doe",
    _id:"1",
    groupChat : false,
    members:["1","2"],
},
{
    avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Boe",
    _id:"2",
    groupChat : true,
    members:["1","2"],
}
];


export const sampleUsers = [{
    avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Doe",
    _id:"1",
},
{
    avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Boe",
    _id:"2",
}
];


export const sampleNotifications = [{
    sender:{
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name:"John Doe",
    },
    _id:"1",
},
{
    sender:{
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name:"John Boe",
    },
    _id:"2",
}
];

export const sampleMessage = [
    {
        attachments:[],
        content:"Jai shree shyam",
        _id:"sfnjkdbdsjbsdv",
        sender:{
            _id:"user._id",
            name:"Chaman",
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },
    {
        attachments:[
            {
                public_id:"asdsad 2",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content:"",
        _id:"sfnjkdbdsjbshbjdv",
        sender:{
            _id:"hjbdscjh",
            name:"Chaman 2",
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },
];

export const dashboardData = {
    users: [
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name:"John Doe",
            _id:"1",
            username:"john_doe",
            friends:20,
            groups:5,
        },
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name:"John Boe",
            _id:"2",
            username:"john_boe",
            friends:20,
            groups:25,
        }
    ],

    chats:[
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name:"John Doe",
            _id:"1",
            groupChat:false,
            members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar : "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name:"John Boe",
            _id:"2",
            groupChat:true,
            members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Boe",
                avatar : "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],
    
    messages:[
        {
            attachments:[],
            content:"Jai shree shyam",
            _id:"sfnjkdbdsjbsdv",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman",
            },
            chat:"chatId",
            groupChat:false,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
        {
            attachments:[
                {
                    public_id:"asdsad 2",
                    url:"https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content:"",
            _id:"sfnjkdbdsjbshbjdv",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman 2",
            },
            chat:"chatId",
            groupChat:true,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
    ],
}