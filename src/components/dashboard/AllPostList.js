import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../views/spinner/Spinner";
import ViewSinglePost from "../../components/post/ViewSinglePost";
import { datatableTranslations } from "../../redux/constants";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom.css";

import {getAllPosts, approvePost} from "../../redux/post/Action";

const AllPostList = (props) => {
  const approve = (id)=>{
    
    dispatch(approvePost(id));
    setModal(!modal);
    setReload(!reload);
  }
      const toggle = () => {
        setModal(!modal);
      };
    const [modal, setModal] = useState(false);
    const [reload, setReload] = useState(false);
    const [obj, setObj] = useState({});

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postReducer.getAllPosts);
//   const singlePost = useSelector((state) => state.postReducer.singlePost);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, reload]);

 
  const data2 = posts.data.map((prop, key) => {
      
    return {
      id: key,
      postId: prop._id,
      title: prop.title,
      userId: prop.userId,
      createdAt: prop.createdAt,
      status: prop.status,
      context: prop.context,
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              let obj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(obj);
            }}
            color="inverse"
            size="sm"
            round="true"
            icon="true"
          >
            <i className="fa fa-edit" />
          </Button>
          {/* use this button to remove the data row */}
        </div>
      ),
    };
  });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Бичвэр</ModalHeader>
        <ModalBody>
          <ViewSinglePost
            title={obj.title}
            context={obj.context}
            createdAt={obj.createdAt}
            clapsNumber={obj.clapsNumber}
          />
          <div className="view_single_post-divider text-right">
            <Button
              color="success"
              onClick={() => {
                approve(obj.postId);
              }}
            >
              Батлах
            </Button>
            <Button
              color="secondary"
              className="ml-1"
              onClick={toggle.bind(null)}
            >
              Хаах
            </Button>
          </div>
        </ModalBody>
      </Modal>
      <ToastContainer />
      {posts.loading ? (
        <Spinner />
      ) : (
        <Card>
          <CardTitle className="mb-0 p-3 border-bottom bg-light">
            Нийт бичвэр
          </CardTitle>
          <CardBody>
            <ReactTable
              {...datatableTranslations}
              columns={[
                {
                  Header: "Гарчиг",
                  accessor: "title",
                },
                {
                  Header: "Хэрэглэгч",
                  accessor: "userId",
                },
                {
                  Header: "Үүсгэсэн огноо",
                  accessor: "createdAt",
                },
                {
                  Header: "Төлөв",
                  accessor: "status",
                },
                {
                  Header: "Үйлдэл",
                  accessor: "actions",
                  sortable: false,
                  filterable: false,
                },
              ]}
              defaultPageSize={10}
              showPaginationBottom={true}
              className="-striped -highlight"
              data={data2}
              filterable
            />
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default AllPostList;
