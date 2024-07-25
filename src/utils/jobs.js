const cron=require('node-cron');

const {sendBasicEmail,fetchPendingEmails,updateTicket}=require('../services/email-service');
const sender=require('../config/emailConfig');

const setUpJobs=()=>{
    cron.schedule('*/2 * * * *',async ()=>{
        const response=await fetchPendingEmails();
        response.forEach((email) => {
            console.log(email);
            sender.sendMail({
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            }, async (err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await updateTicket(email.id,{status:"SUCCESS"});
                }
            });
        });
        console.log(response);
    });
}

module.exports=setUpJobs;