import swal from 'sweetalert';


const AlertSuccess = (title, msg) => {
  return swal(title, msg, "success", {
    timer: 2500,
        icon: "success",
        buttons: false
  });
};

export default AlertSuccess;