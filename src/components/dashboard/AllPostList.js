import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../views/spinner/Spinner";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom.css";

import {getAllPosts} from "../../redux/post/Action";

const AllPostList = (props) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      let id = event.target.id.value;
      let name = event.target.name.value;
      let designation = event.target.designation.value;
      let location = event.target.location.value;
      let age = event.target.age.value;
    //   let newObj = JSON.parse(JSON.stringify(jsonData));
    //   newObj[id] = [name, designation, location, age];
    //   setJsonData(newObj);
      setModal(!modal);
    };
      const toggle = () => {
        setModal(!modal);
      };
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState({});
  const [reloadList, setReloadList] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [dataId, setDataId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [customerRd, setCustomerRd] = useState("");
  const [searchValue, setSearchValue] = useState(false);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postReducer.getAllPosts);
//   const singlePost = useSelector((state) => state.postReducer.singlePost);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

 
  const data2 = posts.data.map((prop, key) => {
      
    return {
      id: key,
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
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
            <FormGroup>
              <Label for="name">Хэрэглэгч</Label>
              <Input
                type="text"
                name="name"
                id="name"
                disabled={true}
                defaultValue={obj.userId}
              />
            </FormGroup>
            <FormGroup>
              <Label for="designation">Гарчиг</Label>
              <Input
                type="text"
                disabled={true}
                name="designation"
                id="designation"
                defaultValue={obj.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Огноо</Label>
              <Input
                type="text"
                name="location"
                disabled={true}
                id="location"
                defaultValue={obj.createdAt}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Бичлэг</Label>
              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: obj.context }}
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Батлах
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggle.bind(null)}
              >
                Хаах
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <ToastContainer />
      {posts.loading ? (
        <Spinner />
      ) : (
        <Card>
          <CardTitle className="mb-0 p-3 border-bottom bg-light">
            <i className="mdi mdi-border-right mr-2"></i>Нийт бичвэр
          </CardTitle>
          <CardBody>
            <ReactTable
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
                  Header: "Actions",
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
        // <Card>
        //   <CardTitle className="mb-0 p-3 border-bottom bg-light">
        //     <i className="mdi mdi-account-multiple mr-2"></i>Ний оруулсан бичвэр
        //   </CardTitle>
        //   <CardBody>

        //     <ReactTable
        //       columns={columns}
        //       defaultPageSize={10}
        //       showPaginationBottom={false}
        //       className="-striped -highlight"
        //       data={posts.data}
        //     />
        //     <div className="paginationCustom">
        //       <div className="previousCustom">
        //         <button className="btnCustom" onClick={gotoPrevious}>
        //           Өмнөх
        //         </button>
        //       </div>
        //       <div className="centerCustom">
        //         <span className="pageInfoCustom">
        //           Хуудас: {pageNumber + 1}/
        //         </span>
        //         <span className="pageInfoCustom">Нийт:</span>
        //       </div>

        //       <div className="nextCustom">
        //         <button className="btnCustom" onClick={gotoNext}>
        //           Дараах
        //         </button>
        //       </div>
        //     </div>
        //   </CardBody>
        // </Card>
      )}
    </div>
  );
};

export default AllPostList;
