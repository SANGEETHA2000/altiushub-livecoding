import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UserProfile() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        bio: "",

    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // await axios.post("http://localhost:8000/core/", userDetails)
            console.log(userDetails)
        } catch (error) {
            console.log(error)
        }
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

  return (
    <div className="h-full w-full flex justify-center items-center content-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 border-2 p-3">
            <TextField id="username" name="username" label="User Name" variant="standard" value={userDetails.username} onChange={handleChange} />
            <TextField id="bio" name="bio" label="Bio" variant="standard" value={userDetails.bio} onChange={handleChange} />
            <Button id="fileupload" name="fileupload" component="label" variant="contained">
                Modify Image
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
            /></Button>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default UserProfile;