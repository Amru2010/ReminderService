const express= require('express');
const bodyParser=require('body-parser');

const {PORT,DB_SYNC}=require('./config/serverConfig');
const apiRoutes=require('./routes/index');
const db=require('./models/index');
const setUpJobs=require('./utils/jobs');
// const {sendBasicEmail}=require('./services/email-service');
// const cron= require('node-cron');

const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server running at port: ${PORT}`);
        setUpJobs();
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
    // sendBasicEmail(
    //     'support@admin.com',
    //     'amrutanshjha2010@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the support'
    // );
    // cron.schedule('*/1 * * * *',()=>{
    //     console.log("Hello");
    // });
}

setupAndStartServer();