import styled, { keyframes, css } from 'styled-components'
import { Members } from './data/MyFollowers'
import * as md from 'react-icons/md'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { identity } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import DirectModal from './DirectModal'
import ReactDOM from 'react-dom'

const zoom = keyframes`
from {
  transform:translateX(none)
  opacity:0;
}
to {
  transform:translateX(10px);
  opacity:1;
}
`
const translate = keyframes`
from{
transform:translateY(0px);
opacity:0;

}
to {
  transform:translateY(20px);
  opacity:1;
  
}
`
const ParentPattern = css`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 5px;
`;


const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";

const Follower = styled.div`
  opacity:0;
  position: relative;
  width: 510px;
  height: auto;
  background-color: ${SecondaryColor};
  margin: 0px 0px 50px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${ParentPattern};
  color:white;
  animation:${translate} 400ms ease-in-out ;
  animation-delay:${props => (props.id / 7) + `s`};
  animation-fill-mode:forwards;
  /* flex-grow:1; */
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 2px;

    }

`

const FollowerHeader = styled.div`
position:relative;
width:100%;
padding:20px;
display:flex;
flex-direction:row;
`

const FollowerDescription = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const FollowerImage = styled.img`
width:16%;
height:90%;
border-radius:15px;
margin:10px;
cursor: pointer;

`
const FollowerDescriptionName = styled.div`
padding:15px 15px 10px 0;
width:fit-content;
display:flex;
justify-content:flex-start;
align-items:center;
width:100%;
`
const FollowerInfo = styled.span`
display:flex;
justify-content:flex-start;
padding:0 15px  ;
font-size:12px;
`
const IsFollowed = styled.span`
background-color:${MainColor};
font-size:10px;
border-radius:4px;
margin:0 10px;
padding:4px 7px;
display:flex;
cursor: pointer;


`
const Icon = styled.span`
padding:0px 0px 0px 7px;
display:flex;
align-items:center;
font-size:12px;

`

const Posts = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const FirstPostImage = styled.div`
overflow:hidden;
width:200px;
height:170px;
margin:30px 30px 30px 15px ;
position:relative;
border-radius:20px;
cursor: pointer;
transition:all 0.5s ease ;
img{
  
    object-fit:cover;
    height:170px;
}
/* 
&:after{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        z-index:9;
        display:block;
        content:'';
        background-color:rgb(0,0,0,0.4);
        transition: all 0.3s ease-in-out;

    }*/
 &:hover{
  transform:scale(1.05);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
 } 

`



// const SecondPostImage = styled.div`
// position:relative;
// overflow:hidden;
// width:200px;
// z-index:10;
// animation:${ZoomSlide} 250ms ease-in-out 3s;
// border-radius:20px;
// cursor: pointer;
// img{
//     object-fit:cover;
//     height:300px;
// }
//     &:after{
//         width:100%;
//         height:100%;
//         position:absolute;
//         left:0;
//         top:0;
//         z-index:20;
//         display:block;
//         content:'';
//         background-color:rgb(0,0,0,0.4);
//         transition: all 0.3s ease-in-out;

//     }
//  &:hover{
//      z-index:30;
//      &:after{
// opacity:0;
//      }
//  }



// `
const ThirdPostImage = styled.div`
overflow:hidden;
position:relative;
margin:30px 15px 30px 30px;
height:170px;
width:220px;
border-radius:20px;
cursor: pointer;
transition:all 0.5s ease ;
img{
    object-fit:cover;
    height:170px;
}
/* 
&:after{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        z-index:9;
        display:block;
        content:'';
        background-color:rgb(0,0,0,0.4);
        transition: all 0.3s ease-in-out;

    }*/
&:hover{
  transform:scale(1.05);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
 } 

`

const Level = styled.span`
cursor:default;
margin:0 10px;
padding:2px 5px;
color:${White};

font-size:.65rem;
background-color:${Red};
border-radius:5px;

`
const MenuIcon = styled.span`
color:white;
font-family:'irsans';
cursor: pointer;
position:absolute;
left:0;
margin-top:15px ;
padding:0 15px  ;
font-size:25px;
`
const FollowerName = styled.span`
cursor: pointer;

`
const FollowerMenu = styled.div`
display:flex;
flex-direction:column;
background-color:${White};
border-radius:5px;
position:absolute;
left:35px;
top:45px;
animation:${zoom} 0.5s ease;
animation-fill-mode:forwards;
opacity:0;
`
const MenuIcons = withStyles({
  root: {
    color: White,
    fontFamily: 'irsans',
    position: "absolute",
    left: "5px",
    fontSize: "25px",
    borderRadius: 0,
  }
})(IconButton);
const MenuItems = withStyles({
  root: {
    display: "flex",
    justifyContent: 'flex-start',
    color: "black",
    fontSize: "12px",
    fontFamily: 'irsans',


  }
})(Button);

export default function Followers() {
  const { followers } = Members
  const [allFollowers, setAllFollowers] = useState(followers)
  const [followId, setFollowedId] = useState(0)
  const [followerMenu, setFollowerMenu] = useState(0)
  const handleFollowId = (id) => {
    if (followId === 0) {
      setFollowedId(id)
    }
    else {
      setFollowedId(0)
    }
  }
  const handleFollowMenu = (id) => {
    if (followerMenu !== id) {
      setFollowerMenu(id)
    }
    else {
      setFollowerMenu(0)
    }
  }

  const handleDeleteButtom = (id) => {

    const copyFollowers = [...allFollowers]
    const followerIndex = copyFollowers.findIndex(item => item.id === id)
    copyFollowers.splice(followerIndex, 1)
    setAllFollowers(copyFollowers)
    setFollowerMenu(0)
  }


  const handleNotifictions = (id) => {
    const copyFollowers = [...allFollowers]
    const followerFound = { ...copyFollowers.find(item => item.id === id) }
    const followerIndex = allFollowers.findIndex(item => item.id === id)
    if (followerFound.notifictios) {
      followerFound.notifictios = false
    }
    else {
      followerFound.notifictios = true

    }
    copyFollowers[followerIndex] = followerFound;
    setAllFollowers(copyFollowers)
    setFollowerMenu(0)

  }
  return (allFollowers.map(item => <Follower id={item.id}>
    <FollowerHeader>

      <FollowerImage src={`https://www.unsplash.it/400/300/?${item.id}`} />
      <FollowerDescription>
        <FollowerDescriptionName>
          <FollowerName>{item.firsName + ' ' + item.lastName} </FollowerName>
          <Level>{item.level}</Level>
          {item.notifictios && <md.MdNotificationsActive />}
          <MenuIcons onClick={() => handleFollowMenu(item.id)}>
            <md.MdMoreVert />
          </MenuIcons>
          {followerMenu === item.id && <FollowerMenu>
            <MenuItems onClick={() => setFollowerMenu(0)}>پیام شخصی</MenuItems>
            {!item.notifictios && <MenuItems onClick={() => handleNotifictions(item.id)}>فعال کردن اعلان ها </MenuItems>}
            {item.notifictios && <MenuItems onClick={() => handleNotifictions(item.id)}>غیر فعال کردن اعلان ها </MenuItems>}
            <MenuItems onClick={() => handleDeleteButtom(item.id)}>حذف </MenuItems>
          </FollowerMenu>}
        </FollowerDescriptionName>

        <FollowerInfo>
          {item.postCount}
          {" پست "}
          <IsFollowed onClick={() => handleFollowId(item.id)}>

            {followId !== item.id && <><Icon> <md.MdAdd /></Icon>دنبال کردن</>}
            {followId === item.id && <><Icon><md.MdDone /></Icon>دنبال نکردن</>}

          </IsFollowed>
        </FollowerInfo>
      </FollowerDescription>
    </FollowerHeader>
    <Posts>
    {/* <CircularProgress /> */}

     { <><FirstPostImage><img width='100%' height='100%' src={`https://www.unsplash.it/200/150/?${1}`} /></FirstPostImage>
      {/* <SecondPostImage ><img width='100%' height='100%'src={`https://www.unsplash.it/400/300/?${2}`} /></SecondPostImage> */}
      <ThirdPostImage><img width='100%' height='100%' src={`https://www.unsplash.it/200/150/?${3}`} /></ThirdPostImage></>}
    </Posts>
{ReactDOM.createPortal(<DirectModal />,document.body)}
  </Follower>

  )

  )
}
