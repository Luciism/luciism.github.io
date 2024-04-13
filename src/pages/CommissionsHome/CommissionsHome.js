import { useContext, useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

import Modal from "components/Modal/Modal";
import ScrollToTop from "ScrollToTop";
import { DataContext } from "DataContext";
import "./CommissionsHome.css"


const CommissionCard = ({option}) => {
  const appData = useContext(DataContext);

  const [modalOpen, setModalOpen] = useState(false);

  const handleNextBtnClick = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => setModalOpen(false);

  const [selectedOption, setSelectedOption] = useState();

  const modalOptionsListRef = useRef();
  const updateSelectedOption = () => {
    const selected = modalOptionsListRef.current.querySelector(
      'input[type="radio"]:checked'
    );
    const label = selected.labels[0].textContent;
    setSelectedOption(label);
    console.log(label);
  }

  useEffect(() => {
    updateSelectedOption();
  });

  return (
    <div className="option">
      <div className="option-intro">
        <h2 className="option-title">
          <Icon className="title-icon" icon={option.title.icon} />
          <span>{option.title.text}</span>
        </h2>
        <p>{option.description}</p>
      </div>
      <div className="option-description">
        <figure>
          <figcaption>Options</figcaption>
          <ul>
            {option.options.map((optionSuboption, i) => (
              <li key={i}>{optionSuboption.option}</li>
            ))}
          </ul>
        </figure>
      </div>
      <button className="next-btn" onClick={handleNextBtnClick}>
        <span>Next</span>
        <Icon className="right-arrow-icon" icon="quill:arrow-right" />
      </button>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div className="modal-top-section">
          <div className="modal-intro">
            <h2 className="modal-title">
              <Icon className="title-icon" icon={option.title.icon} />
              <span>{option.title.text}</span>
            </h2>
            <p className="modal-description">{option.description}</p>
          </div>
          <figure>
            <figcaption>Options (prices may vary):</figcaption>
            <ul ref={modalOptionsListRef}>
              {option.options.map((optionSuboption, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    name={option.title.text + " form"}
                    id={optionSuboption.option + " radio input" + i}
                    defaultChecked={i === 0}
                    onChange={updateSelectedOption}
                  />
                  <label htmlFor={optionSuboption.option + " radio input" + i}>
                    {optionSuboption.option} {optionSuboption.price}
                  </label>
                </li>
              ))}
            </ul>
          </figure>
        </div>
        <hr className="divider" />
        <div className="modal-bottom-section">
          <p className="call-to-action-text">Get in touch</p>
          <div className="buttons">
            <a
              href={
                modalOptionsListRef.current &&
              `
              mailto:${appData.commissions.email_address}
              ?subject=${encodeURIComponent(
                `Commission Inquiry - ${option.title.text}`
              )}
              &body=Option:%20${selectedOption}%0D%0ABudget:%0D%0ADetails:
            `}>
              <Icon icon="ic:outline-email" />
              <span>Contact Via Email</span>
            </a>
            <a
              href={appData.links.discord}
              className="discord"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ic:baseline-discord" />
              <span>Contact Via Discord</span>
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const CommissionsHome = () => {
  const appData = useContext(DataContext);

  return (
    <div className="commissions-page">
      <ScrollToTop />
      <div className="commissions-text">
        <h1>COMMISSIONS</h1>
        <p>
          Need specific work done? I can help! I specialize in a variety of
          different things.
        </p>
      </div>
      <div className="commission-options">
        {
          appData.commissions.options.map(
            (option, i) => <CommissionCard option={option} key={i} />
          )
        }
      </div>
    </div>
  );
};

export default CommissionsHome;
