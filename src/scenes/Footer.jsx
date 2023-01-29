import SocialMedia from "../components/SocialMedia";

export default function Footer(){
    return (
        <footer className="py-5 sm:py-10 sm:mt-16 w-10/12 mx-auto">
                <div className="sm:flex justify-center sm:justify-between text-center ">
                <SocialMedia size={"w-5"} margin={"my-2"}/>
                <p className="font-playfair font-semibold text-xl text-yellow">
                    STEFANIA STEABURDEA
                </p>
                <p className="font-playfair text-white">
                    ©2022 Stefania. All Rights Reserved.
                </p>
                </div>
    </footer>
    )
}