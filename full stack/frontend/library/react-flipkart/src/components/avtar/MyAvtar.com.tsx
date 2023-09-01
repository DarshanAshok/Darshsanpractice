import { Avatar } from "@mui/material"
import img from '../../static/images/1.jpg'
import img1 from '../../static/images/2.jpg'
import img2 from '../../static/images/3.jpg'
export const MyAvtar:React.FC<{}>=()=>{
    return <div>
        <Avatar alt="Remy Sharp" src={img} />
<Avatar alt="Travis Howard" src={img1} />
<Avatar alt="Cindy Baker" src={img2} />
    </div>
}


// import Stack from '@mui/material/Stack';

// export default function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//     </Stack>
//   );
// }