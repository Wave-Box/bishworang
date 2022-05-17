import swal from 'sweetalert';


const AlertWraning = (msg) => {
    return swal("Oh No!", `${msg}`, "warning", {
        timer: 3000,
        icon: "warning",
        buttons: false
    });
};

export default AlertWraning;