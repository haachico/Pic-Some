const CartCard = ({ img, id, handleDelete }) => {
  return (
    <div className="card--card">
      <img src={img} />
      <i class="fa-solid fa-trash trash" onClick={() => handleDelete(id)}></i>
      <p>$5.30</p>
    </div>
  );
};

export default CartCard;
