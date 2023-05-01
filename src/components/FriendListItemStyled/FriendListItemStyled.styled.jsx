import styled from '@emotion/styled';

export const Friend = styled.li`
display: flex;
width: 500px; 
border: solid grey 1px;
margin: 0 auto;
gap:50px;
align-items: center;
margin-bottom:25px;
box-shadow:20px -16px teal;
`
export const FriendPhoto = styled.img`
display:block;
margin: 0;
width: 75px;
height:75px;
border: none;
border-radius:10%;
box-shadow:20px -16px teal;
`

export const FriendName = styled.p`
 color: teal;
 font-size: 45px;
 font-weight:bold;
`
export const IsFriendOnline = styled.span`
display: block;
margin-left: 50px;
width: 20px;
height:20px;
border: none;
border-radius:100%; 
background-color:${(props=>{
    switch(props.type){
        case "true":
            return 'teal';
        case "false":
            return 'pink';
        default:
            return 'blue';
    }
})};
`