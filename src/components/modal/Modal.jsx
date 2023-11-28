import { Modal } from "antd";

import "./Modal.scss";

const MyModal = ({ isModalVisible, handleOk, handleCancel, src }) => {
    return (
        <Modal
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            centered={true}
            footer={null}
            destroyOnClose={true}
        >
            <iframe width="420" height="315" src={src}></iframe>
        </Modal>
    );
};

export default MyModal;
