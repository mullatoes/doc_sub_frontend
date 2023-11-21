import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CompanyCard = ({ companyName, documentText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send data to the server)
    console.log("Company Name submitted:", formData.companyName);
    handleCloseModal(); // Close the modal after submission
  };

  return (
    <div className="p-4 bg-white rounded">
      <span className="block mb-2 font-semibold">{companyName}</span>
      <p className="text-gray-500">{documentText}</p>

      <Button variant="primary" onClick={handleOpenModal} className="mt-4">
        Open Form
      </Button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {companyName} Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="mt-1 p-2.5 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <div className="mt-4">
              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button
                variant="secondary"
                className="ml-2"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CompanyCard;

// Determine background color class based on click count
