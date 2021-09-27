import Image from 'next/image'
import { useState } from 'react';
import axios from 'axios';
import Popup from '../layouts/Popup';
import PopupData from '../layouts/PopupData';

export default function Form() {
    const [name, setname] = useState('');
    const [subject, setsubject] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    // VALIDATION
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState('');
    const [msg, setmsg] = useState('');
    
    const sendEmail = async e => {
        e.preventDefault();
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        const body = {name, email, subject, message}
        setloading(true)
        try{
            const data = await axios.post(`https://rania-portfolio.herokuapp.com/api/user/contact`, JSON.stringify(body), config )
            setmsg(data.data)
            setname('')
            setemail('')
            setsubject('')
            setmessage('')
        }catch(err){
            seterror(err.response.data.message)
            console.log(err.response.data.message)
            console.log(!!error || !!msg)
        }
        setloading(false)
        
    }
    return (
        <div>
            <div className='relative w-3/5 h-8 md:h-12 block mx-auto mt-5 lg:mt-0'>
                <Image src='/img/form.png' layout='fill'/>
            </div>
            <form className='bg-pink-light p-5 rounded-md -mt-3 md:-mt-7' onSubmit={sendEmail}>
                <p className='text-sm md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut </p>
                <div className='md:grid md:grid-cols-2 md:gap-x-3 mt-5'>
                    <input type="email" className='rounded-md border border-pink-dark px-3 py-1 w-full' placeholder='Email' value={email} onChange={e => setemail(e.target.value)} required />
                    <input type="text" className='rounded-md border border-pink-dark px-3 py-1 mt-5 md:mt-0 w-full' placeholder='Name' value={name} onChange={e => setname(e.target.value)} required />
                </div>
                <div className='mt-5'>
                    <input type="text" className='rounded-md border border-pink-dark px-3 w-full py-1' placeholder='Subject' value={subject} onChange={e => setsubject(e.target.value)} required/>
                </div>
                <div className='mt-5'>
                    <textarea cols="30" rows="10" className='rounded-md border border-pink-dark px-3 py-2 w-full' placeholder='Message' value={message} onChange={e => setmessage(e.target.value)} required/>
                </div>
                <button className='mt-5 bg-pink-dark px-5 py-2 text-white mx-auto block rounded-lg hover:scale-110 transition duration-100 ease-out disabled:hover:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed' type='submit' disabled={loading}>{loading ? 'submiting' : 'submit'}</button>
            </form>
            <Popup isOpen={!!msg || !!error} onClose={() => {setmsg(''), seterror('')}}>
                <PopupData type={msg ? 'success' : 'error'} data={msg ? msg : error}/>
            </Popup>
        </div>
    )
}
