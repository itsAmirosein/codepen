import styled, { css } from 'styled-components'
import * as mi from '@material-ui/core'
import { useState } from 'react'
import Followers from './Followers'
import IconButton from '@material-ui/core/IconButton';

const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";


export const IconBtn = styled(IconButton)`
color:${FadeWhite} !important;
font-family:'irsans';

`

const MembersWrapper = styled.div`
 width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
  gap: 20px 35px;
`


const FollowersWrapper = styled.div`
background-color:${MainColor};
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
gap:20px 30px ;
justify-content:center;
`
const FollowingWrapper = styled.div`
`

const useStyles = mi.makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        transition: "all 0.3s ease-in -out",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 3px 0px",
        backgroundColor: SecondaryColor,
        borderRadius: "90px",

    },

});
const MyTabs = mi.withStyles({
    indicator: {
        backgroundColor: Red,

    }

})((props) => <mi.Tabs {...props} />);
const MyTab = mi.withStyles({
    root: {
        fontFamily: 'irsans',
        '&:first-child': {
            margin: '0 20px'
        },
        '& > span': {
            padding: '8px',
            width: '100%',
            color: White,
        },
    },

})((props) => <mi.Tab disableRipple {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function MyFollowers() {
    const classes = useStyles();

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        console.log(event, newValue)
        setValue(newValue);
    };
    return (
        <MembersWrapper>
            <mi.Paper className={classes.root}>
                <MyTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <MyTab label="دنبال کننده ها " />
                    <MyTab label="دنبال شونده ها " />

                </MyTabs>
            </mi.Paper>
            {value === 0 && <FollowersWrapper >
                <Followers/>
            </FollowersWrapper>}
            {value === 1 && <FollowingWrapper>followings</FollowingWrapper>}
        </MembersWrapper>
    )
}
