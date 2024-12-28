import Hbtn from "../headButton/Hbtn" 

const tableData = [{
    index:1,
    btn: <Hbtn title="Professional"/>,
    price: "49",
    detail:["1 User","10 Social accounts", "Unlimited posts", "Post scheduling", "Access to messages in one inbox"]
     

 },
{
    index:2,
    btn: <Hbtn title="Team"/>,
    price: 249,
    detail: ["3 user","20 Social accounts", "Unlimited posts","Post scheduling","Access to messages in one inbox","Roles & permissions","Assign posts to team members"]
},
{
    index:3,
    btn: <Hbtn title="Business"/>,
    price: 739,
    detail: ["5 Users","35 Social accounts", "Unlimited posts","Post scheduling","Access to messages in one inbox","Roles & permissions","Assign posts to team members","Approval workflows","Access to messages in one inbox","Inbound/outbound tagging","Content & asset library","Hootsuite customer support"],
 

 },
{
    btn: <Hbtn title="Enterprise"/>,
    price: "Custom",
    detail:["Starts at 5 users","50 Social accounts", "Unlimited posts","Post scheduling","Access to messages in one inbox","Roles & permissions","Assign posts to team members","Approval workflows","Access to messages in one inbox","Inbound/outbound tagging","Content & asset library","Hootsuite customer support","Social ads management","Social ads analytics & reporting","Employee advocacy","Team productivity reporting"],
  }
];

export default tableData;