const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const dataValue = params.get('status');
const adminStatus = params.get('adminStatus');
if(dataValue === "logout"){
    localStorage.removeItem("userID");
}
if (adminStatus) {
    localStorage.removeItem("adminID");
}