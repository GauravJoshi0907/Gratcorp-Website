using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mail;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [System.Web.Services.WebMethod]
    public static string SendMessage(string name, string email, string phone, string message)
    {
        string res = "";
        string userMessage = "Thanks for your interest in Traicon Services.We will be pleased to help you to achieve your objectives." + "\n\n" +"We are reviewing your query and will get in touch with you shortly within next 24 hours."+ "\n\n" +"Hope you have checked out our website and the services we offer."+ "\n\n" +"We will have a detailed discussion with you to understand your requirements and how can we take it forward."+"\n\n" +"Please feel free to contact us on 9933891467 if it is urgent."+ "\n\n" +"Thanks and Regards"+"\n" +"Traicon Services";
        try
        {
            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtpout.secureserver.net");

            mail.From = new MailAddress("info@traiconservices.com");
            mail.To.Add(email);
            mail.Subject = "Thanks for your interest in Traicon Services";
            mail.Body = "Hello " + name + "," + "\n\n" + userMessage;

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("info@traiconservices.com", "Traicon@1234");
            SmtpServer.EnableSsl = true;

            SmtpServer.Send(mail);
            res = "success";
        }
        catch (Exception ex)
        {

        }
        return res;
    }

    [System.Web.Services.WebMethod]
    public static string insiderSendMessage(string name, string email, string phone, string message)
    {
        string res = "";
        string inputBody = "Name : " + name + "\n" + "Phone No: " + phone + "\n" + "Email : "+ email + "\n\n\n\n" +  message;
        try
        {
            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtpout.secureserver.net");

            mail.From = new MailAddress("info@traiconservices.com");
            mail.To.Add("info@traiconservices.com");
            mail.Subject = "Traicon Services Website Email";
            mail.Body = "Hello Traicon Services," + "\n\n" + inputBody;

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("info@traiconservices.com", "Traicon@1234");
            SmtpServer.EnableSsl = true;

            SmtpServer.Send(mail);
            res = "success";
        }
        catch (Exception ex)
        {

        }
        return res;
    }
}