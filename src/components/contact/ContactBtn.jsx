import message from '../../assets/images/header/conversation.png'

const ContactBtn = () => {
    return (
        <div className="contact fixed top-16 right-16 flex justify-center items-center font-consolasBold gap-4 z-[1]">
                <img className='w-8' src={message} alt="message" />
                <p className='text-base text-primary tracking-[0.1em] uppercase cursor-pointer hover:scale-110 ease duration-300'>
                    Contact me
                </p>
            </div>
    )
}

export default ContactBtn;