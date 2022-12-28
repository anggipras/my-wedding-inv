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
import MediaQuery from "../Util/MediaQuery";
import { ClickHeader } from "../Util/HeaderMethod";

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

function Wishes({ currentId, guestName }) {
  const [loadingModal, setLoadingModal] = useState(false);
  const [wishesData, setWishesData] = useState({
    person_name: guestName,
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
  const [totalItem, setTotalItem] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getWishesData();
  }, [currentPage]);

  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  const getWishesData = () => {
    axios
      .get(
        `https://anggi-golda-wedding-api.onrender.com/api/weddingwish?page=${currentPage}`
      )
      .then((res) => {
        const { totalPages, totalItems, wishesData } = res.data;
        setTotalPage(totalPages);
        setTotalItem(totalItems);
        setWishesResponseData(wishesData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    } else {
      fetchWishAPI();
    }
  };

  const fetchWishAPI = () => {
    setLoadingModal(true);
    axios
      .post(
        "https://anggi-golda-wedding-api.onrender.com/api/weddingwish",
        wishesData
      )
      .then(() => {
        setLoadingModal(false);
        setWishesData({
          ...wishesData,
          person_name: "",
          wishes: "",
        });
        setCurrentPage(1);
        getWishesData();
      })
      .catch((err) => {
        console.log(err);
        setLoadingModal(false);
      });
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
    <>
      <div
        id="wishes"
        style={{
          borderRadius: "1rem",
          position: "relative",
          margin: MediaQuery().isMobile ? "1rem" : "5rem",
          backgroundColor: "rgba(163, 221, 204, 0.7)",
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
              {totalItem} Wishes
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid gray" }} />

        <div className="p-3">
          <input
            onChange={(e) =>
              setWishesData({ ...wishesData, person_name: e.target.value })
            }
            value={wishesData.person_name}
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
            value={wishesData.wishes}
            style={{
              borderRadius: "0.2rem",
            }}
            rows="3"
            placeholder="Wishes and Prayer"
            className="fontFam-quicksand w-100 mb-4 p-1"
          />
          <select
            onChange={(e) =>
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
            <div className="d-flex justify-content-center align-items-center mt-3">
              <ReactPaginate
                breakLabel="..."
                forcePage={currentPage - 1}
                nextLabel=">"
                onPageChange={handlePageClick}
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </div>
        ) : null}
      </div>
      <LoadingModal show={loadingModal} onHide={() => setLoadingModal(false)} />
    </>
  );
}

export default Wishes;
