import { useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams(); // 'id' matches the :id in App.js

    return (
        <div>
            <h1>Product Details</h1>
            <p>Displaying info for Product ID: <strong>{id}</strong></p>
        </div>
    );
}