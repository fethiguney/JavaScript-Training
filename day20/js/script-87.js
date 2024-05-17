

const ocPrivacy=new bootstrap.Offcanvas("#ocPrivacy");

 const isPrivacyPolicy=localStorage.getItem("privacy-policy");
if (isPrivacyPolicy==null || isPrivacyPolicy==undefined) localStorage.setItem("privacy-policy", false);

if(isPrivacyPolicy=="false")  ocPrivacy.show();


document.getElementById("btnAcceptPrivacy").addEventListener("click",()=>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
})


document.getElementById("btnRejectPrivacy").addEventListener("click", ()=>{
    localStorage.setItem("privacy-policy", false);
    ocPrivacy.hide();
})

