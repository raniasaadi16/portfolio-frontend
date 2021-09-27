import Header from "../components/contact/Header";
import Text from "../components/contact/Text";
import Form from "../components/contact/Form";

export default function contact() {
    return (
        <div>
            <div className='relative h-full bg-white  rounded-lg pb-36'>
                <Header/>
                <div className='mt-8 md:mt-28 px-7 md:px-24 grid lg:grid-cols-2 md:gap-x-8'>
                    <Text/>
                    <Form/>
                </div>
            </div>          
        </div>
    )
}
