import React, {useState } from 'react';


const Faq = () => {
    const [ faqopen, faqupdate ] = useState(false);
   
    return (
        <div id="faq" className='container py-5'>
                <h2 className='text-center pt-5 pb-3'>묻고 답하기</h2>
                <dl className='border col-8 mx-auto p-4'>
<dt onClick={ () => { faqupdate(!faqopen) } } >질문1</dt>
<dd className={ faqopen ? 'bg-dark text-white py-3' : 'd-none bg-dark text-white py-3' } >답1</dd>
                    <dt>질문2</dt>
                    <dd className='bg-dark d-none text-white py-3'>답2</dd>
                    <dt>질문3</dt>
                    <dd className='bg-dark d-none text-white py-3'>답3</dd>
                </dl>

            
        </div>
    );
}

export default Faq;
