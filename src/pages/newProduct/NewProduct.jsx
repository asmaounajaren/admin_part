import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Product Title" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea rows="4" cols="50" placeholder="Describe your product here... " > </textarea>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="Product Price" />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Marketing, Ecomm,..." />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
