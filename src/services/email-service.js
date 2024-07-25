const sender= require('../config/emailConfig');
const {TicketRepository}=require('../repository/index');

const ticketRepository=new TicketRepository();

const sendBasicEmail=async (mailFrom,mailTo,mailSubject,mailBody)=>{
    try {
        const response= await sender.sendMail({
            from:mailFrom, 
            to:mailTo,
            subject:mailSubject,
            text:mailBody,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timeStamp)=>{
    try {
        const response=await ticketRepository.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const create=async (data)=>{
    try {
        const response=await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket=async (id,data)=>{
    try {
        const ticket=await ticketRepository.update(id,data);
        return ticket;
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    create,
    updateTicket,
}