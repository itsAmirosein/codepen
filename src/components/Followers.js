import styled from 'styled-components'
import { Members } from './data/MyFollowers'
const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";

const Follower = styled.div`
  position: relative;
  width: 510px;
  height: 350px;
  background-color: ${SecondaryColor};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 2px;
  margin: 0px 0px 50px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;
  color:white;


`
const FollowerImage = styled.img`
width:16%;
height:90%;
border-radius:15px;
margin:10px;


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

const FollowerName = styled.div`
padding:15px 15px 10px 0;
width:100%;
display:flex;
justify-content:flex-start;
`
const FollowersPosts = styled.span`
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

`
export default function Followers() {
    const { followers } = Members
    return (
        followers.map(item => <Follower>
            <FollowerHeader>
                <FollowerImage src={`https://www.unsplash.it/400/300/?${item.id}`} />
                <FollowerDescription>
                    <FollowerName>{item.firsName + ' ' + item.lastName}</FollowerName>
                    <FollowersPosts>
                        {item.postCount}
                        {" پست "}
                        <IsFollowed>دنبال کردن </IsFollowed>
                        </FollowersPosts>
                   
                </FollowerDescription>
            </FollowerHeader>
        </Follower>
        )
    )
}
