import fireburger from '@/app/fireburger.png'
import Image from 'next/image'
function Gyan() {
    return (
        <>
            <hr className='w-1/2 mx-auto mb-14' />
            <section className="flex flex-col md:flex-row gap-y-7 px-8 gap-x-5 md:pr-14 h-full w-screen items-center  ">
                <div className="flex-1 rounded-2xl overflow-clip">
                    <Image src={fireburger} className="max-w-[500px] w-[90vw] sm:w-full rounded-2xl overflow-clip  aspect-square mx-auto object-center" alt="fire burger illustration " />
                </div>
                <div className="flex-1  font-playfair space-y-7">
                    <h3 className='font-semibold text-3xl '>Cosmic Insights: Aligning Your Diet with Your Body and Challenging Misguided Beliefs About Pleasure and Pain.</h3>
                    <p className='font-sans text-base'>A key element of achieving success may involve consuming foods that are in alignment with your body's natural processes and personal preferences, allowing for optimal nourishment and health. Furthermore, it's essential to examine the origins of the misguided belief that pleasure should be rejected and pain should be celebrated.</p>
                </div>
            </section>
            <hr className='w-1/2 mx-auto  my-14' />
        </>
    )
}

export default Gyan