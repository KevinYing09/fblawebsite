:root {
    --primary-clr: #14213d;
}

body{
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    font-family: "Poppins", sans-serif;
}
header{
    margin: 0;
    padding: 0;
    background-color: #14213d;
    height: 100px;
}
#logo{
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
    float: left;
}
h1{
    margin: 5px;
    color:#fca311;
    float: left;
}
.navbar{
    margin-right: 20px;
    padding: 10px;
    float: right;
}
.navbar a{
    text-decoration: none;
    color: #004e9b;
    text-align: center;
    padding: 3px;
}
.navbar button{
    font-size: 16px;
    background-color: #fca311;
    color: #004e9b;
    border: none;
}
.navbar button:hover{
    background-color: #fca21191;
    cursor: pointer;
}
main{
    margin: 0;
    padding: 0;
}
.gym{
    width: 100%;
    height: 700px;
    background-position: center;
    background-size: cover;
    background-image: url("images/gym.png");
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
#scroll{
    font-size: 50px;
    background-color: #14213d;
    padding: 30px;
}

.container-cal{
    display: flex;
    position: relative;
    width: 1200px;
    min-height: 850px;
    margin: 0 auto;
    padding: 5px;
    color:#fff;
    border-radius: 10px;
    background-color: #14213d; 
}

.left{
    width: 60%;
    padding: 20px;
}
.calendar{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #878895;
    border-radius: 5px;
    background-color: #fff;
    align-items: center;
}

.calendar::before,
.calendar::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 12px;
    height: 97%;
    border-radius:0 5px 5px 0;
    background-color: #d3d5d6d7;
    transform: translateY(-50%);
}

.calendar::before{
    height: 94%;
    left: calc(100% + 12px);
    background-color: rgb(153, 153, 153);
}

.calendar .month{
    width: 85%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
}

.calendar .month .prev,
.calendar .month .next{
    cursor: pointer;
}
.calendar .month .prev:hover,
.calendar .month .next:hover{
    color: var(--primary-clr)
}

.calendar .weekdays{
    width: 85%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
}

.calendar .weedays div{
    width: 13.57%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.calendar .days{
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;
}
.calendar .days .day{
    width: 13.57%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-clr);
    border: 1px solid #f5f5f5;
}

.calendar .day:not(.prev-date, .next-date):hover {
    color: #fff;
    background-color: var(--primary-clr);
}
.calendar .days .active:hover{
    color: #fff
}
.calendar .days .prev-date,
.calendar .days .next-date{
    color: #b3b3b3;
}

.calendar .days .active{
    position: relative;
    color: var(--primary-clr);
}
.calendar .days .active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px 2px var(--primary-clr);
}

.calendar .days .today{
    color: red;
}

.calendar .days .event {
    position: relative;
}
.calendar .days .event::after {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 75%;
    height: 6px;
    border-radius: 30x;
    transform: translateX(-50%);
    background-color: var(--primary-clr);
}
.calendar .event:hover::after{
    background-color: #fff;
}

.calendar .goto-today{
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 0 20px;
    color: var(--primary-clr);
}
.calendar .goto-today .goto{
    display: flex;
    align-items: center;
}
.calendar .goto-today .goto input{
    height: 30px;
    border-radius: 4px 0 0 4px;
}
.calendar .goto-today button{
    height: 30px;
    padding: 5px 10px;
    border: 2px solid var(--primary-clr);
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    color: var(--primary-clr);
}
.calendar .goto-today .goto button{
    border-left: 0;
    border-radius: 0 4px 4px 0;
}
.calendar .goto-today button:hover{
    background-color: var(--primary-clr);
    color: #fff;
}
.container-cal .right{
    position: relative;
    width: 40%;
    min-height: 100%;
    padding: 20px 0;
}
.right .today-date{
    font-size: 2rem;
    width: 78%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    padding-left: 50px;
    margin-top: 50px;
    margin-bottom: 20px;
    text-transform: capitalize;
}
.events{
    width: 100%;
    height: 100%;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 4px;
}
.events .event {
    position: relative;
    width: 95%;
    min-height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 0 20px;
    padding-bottom: 10px;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #1e2d4f, transparent);
}
.events .event:nth-child(even){
    background: transparent;
}
.events .event:hover{
    background: linear-gradient(90deg, #fca311, transparent);
}
.events .event .title{
    display: flex;
    align-items: center;
    pointer-events: none;
}
.events .event .title .event-title {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 20px;
    color: #fff;
}
.events .event .title i {
   color: #fca311;
   font-size: 0.5rem;
}
.events .event:hover .title i {
    color: #fff;
 }
.events .event .event-time {
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 15px;
    color: #878895;
    pointer-events: none;
}

.events .no-event {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -20px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #878895;
}

.events .no-event .event-none{
    color: #878895;
}

h2, h3{
    margin-left: 30px;
    color: #14213d;
}
footer{
    margin: 0;
    background-color: #14213d;
    display:block;
    left:0;
    right:0;
    bottom:0;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
}
#f1{
    margin: 0;;
}
.f{
    color: #fca311;
}

/* Styling the Information Page */
#fp{
    margin-left: auto;
    margin-right: auto;
}
ul{
    list-style-type: none;
    margin-left: 40px;
    margin-top: -10px;
    padding: 0;
    overflow: hidden;
    color: #14213d;
}
li{
    padding: 5px;
}

/* Styling Forms */
form{
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 10px;
    color: #14213d;
}
input[type=text], input[type=number], input[type=time], input[type=date] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #14213d;
    border-radius: 4px;
}
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 2px solid #14213d;
    border-radius: 4px;
}
input[type=button], input[type=submit], input[type=reset] {
    background-color: #14213d;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
.ball{
    width: 100%;
    height: 400px;
    background-position: right;
    background-size: cover;
    background-image: url("images/hoop.png");
    background-attachment: fixed;
    display: flex;
    justify-content: left;
    align-items: center;
}
.concert{
    width: 100%;
    height: 400px;
    background-position: center bottom;
    background-size: cover;
    background-image: url("images/concert.png");
    background-attachment: fixed;
    display: flex;
    justify-content: left;
    align-items: center;
}
#support{
    font-size: 50px;
    background-color: #14213d;
    padding: 30px;
    margin: 100px;
}
.chart{
    display: grid;
    justify-content: center;
    overflow: visible;
    width: auto;
    height: 680px;
    background-image: url("images/fries.png");
    background-size: cover;
    background-attachment: fixed;
}
#fpTitle{
    left: 325px;
    font-size: 60px;
    color:#fca311;
    position: relative;
    width: 450px;
    bottom: 30px;
    background-color:#14213d;
    text-align: center;
}
#fp-image{
    width:fit-content;
    height:auto;
    padding: 50px;
    position: relative;
    bottom: 110px;
}
#icon1{
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:#f5f5f5;
    border-color:#f5f5f5;
    border-style: solid;
    position: absolute;
    top: 235px;
    left: -470px;
    margin-right: 50%;
    margin-left: 50%;
}
/* #open1{
    color:#f5f5f5
}
#open2{
    background-color:#f5f5f5
}
#open3{
    background-color:#f5f5f5
}
#student{
    background-color:#f5f5f5
} */
#fpText{
    text-align: center;
    font-size: 30px;
    color:#fca311;
    position: relative;
    bottom: 260px;
}

@media (max-width: 600px){
    header{
        font-size: 11px;
        height: 160px;
    }

    h1{
        margin-left: 30px;
        color:#fca311;
        float: left;
    }

    .navbar{
        margin-left: 30px;
        padding: 10px;
        float: left;
    }
  	
  	.navbar button{
      	font-size: 12px;
  	}

    /* #fp{
        margin-left: 25px;
        float: right;
    } */
}
