import { useEffect, useState } from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";
import {
  Comment,
  CheckCircleRounded,
  Twitter,
  Schedule,
} from "@mui/icons-material";
import ReactPaginate from "react-paginate";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

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

  const [wishesResponseData, setWishesResponseData] = useState([
    {
      id: 0,
      person_name: "",
      wishes: "",
      attendance: null,
      createdAt: "",
    },
  ]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/weddingwish?page=${currentPage}`)
      .then((res) => {
        setTotalPage(res.data.totalPages);
        setWishesResponseData(res.data.wishesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const wishesRespData = () => {
    return wishesResponseData.map((item, ind) => {
      return (
        <>
          <div style={{ borderTop: "1px solid gray" }} />
          <div key={ind} className="p-3 d-flex align-items-start">
            <Comment sx={{ fontSize: "1.5rem", marginRight: "1rem" }} />
            <div>
              <div className="wishes-top d-flex">
                <div
                  className="wishes-person-name fontFam-quicksand"
                  style={{ fontWeight: "bold", marginRight: "0.5rem" }}
                >
                  {item.person_name}
                </div>
                <div
                  className="d-flex justify-content-start align-items-center"
                  style={{
                    backgroundColor: "black",
                    padding: "0.25rem",
                    borderRadius: "0.3rem",
                  }}
                >
                  <CheckCircleRounded
                    sx={{
                      fontSize: "0.7rem",
                      color: "white",
                      marginRight: "0.3rem",
                    }}
                  />
                  <div
                    className="wishes-attendace fontFam-quicksand"
                    style={{ fontSize: "0.7rem", color: "white" }}
                  >
                    {item.attendance ? "Hadir" : "Tidak Hadir"}
                  </div>
                </div>
              </div>

              <div className="wishes-middle d-flex justify-content-start align-items-center">
                <Schedule
                  sx={{
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                <div
                  className="fontFam-quicksand"
                  style={{ fontSize: "0.8rem" }}
                >
                  {moment(item.createdAt).fromNow()}
                </div>
              </div>

              <div className="wishes-bottom fontFam-quicksand">
                {item.wishes}
              </div>
            </div>
          </div>
        </>
      );
    });
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
            style={{
              borderRadius: "0.2rem",
            }}
            type="text"
            placeholder="Nama Anda"
            className="fontFam-quicksand w-100 mb-3 p-1"
          />
          <textarea
            onChange={(e) =>
              setWishesData({ ...wishesData, wishes: e.target.value })
            }
            style={{
              borderRadius: "0.2rem",
            }}
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
            style={{
              borderRadius: "0.2rem",
            }}
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

        {totalPage > 0 ? (
          <div className="wishes-content">
            {wishesRespData()}

            <div style={{ borderTop: "1px solid gray" }} />
            <div className="wishes-pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        ) : null}
      </div>
      <LoadingModal show={loadingModal} onHide={() => setLoadingModal(false)} />
    </div>
  );
}

export default Wishes;
