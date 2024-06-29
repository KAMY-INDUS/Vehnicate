import React from "react"
import { useRouter } from "next/navigation";

const router=useRouter();
function verify_div(){
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <span className="formhead tg">Verify</span>
                <input id="createblog" className="verify-email" name="email" placeholder="enter your email" required />
                <input className="verify-pass" name="password" placeholder="enter your password" spellCheck="false" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

handleSubmit=(e)=>{
    if(e.target.email.value=="vehnicatemembers@gmail.com"){
        if(e.target.password.value=="hnmembers"){
            return(
                //blog input page
                router.push("/vehnicate/admin")
            );
        }
    }
    else{
        return(
            //homepage
            router.push("/")
        );
    }
}


export default verify_div()
