import message from '../assets/images/conversation.png'

const ContactBtn = () => {
    return (
        <div className="contact fixed top-16 right-16 flex justify-center items-center font-consolasBold gap-4">
                <img className='w-8' src={message} alt="message" />
                <p className='text-base text-primary tracking-[0.1em] uppercase cursor-pointer'>
                    Contact me
                </p>
            </div>
    )
}

export default ContactBtn;