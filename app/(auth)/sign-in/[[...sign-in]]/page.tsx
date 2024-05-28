import { SignIn } from "@clerk/nextjs";

export default function page(){
    return (
    <div className="justify-center"> 
        <SignIn/>
        </div>
    )
}