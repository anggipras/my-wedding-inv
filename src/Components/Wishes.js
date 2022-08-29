import { useState } from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import { Twitter } from "@mui/icons-material";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";

function LoadingModal(props) {
  return (
    <Modal
      {...props}
      backdrop="static"
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ColorRing
          visible={true}
          height="150"
          width="150"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </Modal>
  );
}

function Wishes() {
  const [loadingModal, setLoadingModal] = useState(false);
  const [wishesData, setWishesData] = useState({
    person_name: "",
    wishes: "",
    attendance: null,
  });

  const swalAlert = (str) => {
    let timerInterval;
    Swal.fire({
      title: str,
      timer: 2000,
      timerProgressBar: false,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    return;
  };

  const sendWish = () => {
    if (wishesData.attendance === null) {
      swalAlert("Konfirmasi kehadiran juga ya");
    }

    fetchWishAPI();
  };

  const fetchWishAPI = () => {
    setLoadingModal(true);
    setTimeout(() => {
      setLoadingModal(false);
    }, 3000);
  };

  return (
    <div>
      <div
        style={{
          borderRadius: "1rem",
          margin: "1rem",
          backgroundColor: "#a3ddcc",
        }}
      >
        <div className="wishes-head-layout p-2">
          <div
            className="wishes-head"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Twitter sx={{ fontSize: "1rem" }} />
            <div
              className="fontFam-quicksand ms-2"
              style={{ fontWeight: "bold" }}
            >
              77 Wishes
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid gray" }} />

        <div className="p-3">
          <input
            onChange={(e) =>
              setWishesData({ ...wishesData, person_name: e.target.value })
            }
            type="text"
            placeholder="Nama Anda"
            className="fontFam-quicksand w-100 mb-3 p-1"
          />
          <textarea
            onChange={(e) =>
              setWishesData({ ...wishesData, wishes: e.target.value })
            }
            rows="3"
            placeholder="Wishes and Prayer"
            className="fontFam-quicksand w-100 mb-4 p-1"
          />
          <select
            onClick={(e) =>
              setWishesData({
                ...wishesData,
                attendance: e.target.value === "true" ? true : false,
              })
            }
            class="w-100 mb-5"
          >
            <option hidden value="0">
              Konfirmasi Kehadiran
            </option>
            <option value={true}>Hadir</option>
            <option value={false}>Tidak Hadir</option>
          </select>
          <button
            disabled={wishesData.person_name === "" || wishesData.wishes === ""}
            style={{
              border: "none",
              padding: "0.3rem 0.6rem",
              borderRadius: "0.3rem",
            }}
            onClick={() => sendWish()}
          >
            Kirim
          </button>
        </div>
      </div>
      <LoadingModal show={loadingModal} onHide={() => setLoadingModal(false)} />
    </div>
  );
}

export default Wishes;
