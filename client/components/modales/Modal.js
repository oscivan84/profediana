
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <article className={`modal ${isOpen && 'isOpen'} `} onClick={closeModal}>
      <div
        className="modalContainer  shadow-lg rounded"
        onClick={handleModalClick}
      >
        <button
          className="modalClose bg-primary text-white  w-10 h-10 rounded-full text-3xl font-bold"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </article>
  )
}

export default Modal
