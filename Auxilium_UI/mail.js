const mailer = require("nodemailer");
const  {userAccepted}  = require("./userAcceptedTemplate");

const getEmailData = (to, name, title, template) => {
    let data = null;

    switch(template){
        case "userApproved":
            data = {
                from : "Auxilium Resources <resources.auxilium@gmail.com>",
                to,
                subject: `Request for ${title} accepted`,
                html: `
                    <div>
                        <p> Hello ${name}, </p>
                        <p> This email is to inform you that your request for ${title} has been approved by the supplier and they will get in touch with you very soon. Please keep the contact number that you've submitted, active and available with you to avoid inconvenience for both the parties.</p>
                        <p>Stay safe, wear masks and maintain social distancing.</p>
                        <p>Best wishes,</p>
                        <p>Team Auxilium.</p>
                    </div>
                `
            }
            break;
        
        case "userNewRequest":
            data = {
                from : "Auxilium Resources <resources.auxilium@gmail.com>",
                to,
                subject: `Request for ${title} recieved`,
                html: `
                    <div>
                        <p> Hello ${name}, </p>
                        <p> This email is to inform you that your request for ${title} has been sent to the supplier and they will get in touch with you very soon. Please keep an eye on your email as you will hear from us as soon as the supplier approves your request.</p>
                        <p>Stay safe, wear masks and maintain social distancing.</p>
                        <p>Best wishes,</p>
                        <p>Team Auxilium.</p>
                    </div>
                `
            }
            break;
            
        default:
            data;

    }
    return data
}

const sendEmail = (to, name, title, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "resources.auxilium@gmail.com",
            pass: "gldnsparks21"
        }
    })

    const mail = getEmailData(to, name, title, type)

    smtpTransport.sendMail(mail, function(error, response){
        if (error) {
            console.log(error);
        }else{
            console.log("Mail sent successfully");
        }
    })
}

module.exports = {sendEmail}