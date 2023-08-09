function submit(){
    var info = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    const serviceId = "service_7kmw8fm";
    const templateId = "template_rny3xmr";

    emailjs.send("service_7kmw8fm","template_rny3xmr", info)

    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Sent successfully");
    })
    .catch(err=>console.log(err));
}
