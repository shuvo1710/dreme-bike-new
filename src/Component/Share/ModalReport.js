import React from 'react';
import toast from 'react-hot-toast';

const ModalReport = ({ReportModal}) => {
     const { purchase_Price, sell_price, picture, verification, age, time, seller_name, product_name, phone, address } =ReportModal

     const handleReport = event=>{
        event.preventDefault()
        const message = event.target.report.value;
        console.log(message)
        const reportInfo ={
            purchase_Price,
            sell_price,
            picture,
            verification,
            age,
            time,
            seller_name,
            product_name,
            phone,
            address,
            message 
        }
        event.target.reset()
        fetch(`https://dream-bike-server.vercel.app/Report-product`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('successfully added on server')
                event.target.reset();
            })
            .catch(error => {
                toast.error(error.message)
                
            })
        

     }
    return (
        <div>

            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">

                <form onSubmit={handleReport}  className="modal-box">
                    <label htmlFor="report-modal" className="btn btn-sm bg-red-500 hover:bg-red-600 border-0 text-white absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{product_name}</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type your Report</span>
                        </label>


                        <textarea name='report' className="textarea textarea-bordered input-primary" placeholder="Type Your Message" required></textarea>
                    </div>
                    <input type="submit" className='btn bg-red-500 hover:bg-red-600 border-0 text-white w-full my-5' value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default ModalReport;