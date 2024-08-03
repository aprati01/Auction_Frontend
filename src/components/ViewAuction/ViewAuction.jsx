import './cssss.css'
import axios from "axios";
import {useState} from "react";

const CroplItem = ({ image, title, catagory, price, comment, onPay ,isLoading}) => {
    return (
        <div className="crop-available">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{catagory}</p>
            <p>MSP Price: Rs. {price}</p>
            <button onClick={() => onPay(price)} disabled={isLoading}>
                {isLoading ? 'Processing...' : comment}
            </button>
        </div>
    );
};

const ViewAuction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const checkoutHandler = async (amount) => {
        setIsLoading(true);
        setError(null);
        try {

            const { data: { key } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/getkey`);

            const { data: { order } } = await axios.post(`${process.env.REACT_APP_API_URL}/api/checkout`, {
                amount
            });


            console.log(order)

            const options = {
                key, // Enter the Key ID generated from the Dashboard
                amount: order.amount, 
                currency: "INR",
                name: "Arnab Pratihar",
                description: "Bidding of crops",
                image: "https://example.com/your_logo",
                order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response 
                callback_url: "http://localhost:4000/api/paymentverification",
                prefill: {
                    name: "Arnab Pratihar",
                    email: "aprati@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razor = new window.Razorpay(options);
            razor.on('payment.failed', function (response){
                alert("Payment failed. Please try again. Error: " + response.error.description);
                // Handle payment failure here
            });
            razor.open();
        } catch (error) {
            console.error("Error during checkout", error);
            setError("Failed to initiate payment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const cropItems = [
        {
            image: 'https://www.apnikheti.com/upload/crops/5431idea99rice1.JPG',
            tittle: 'Rice',
            catagory: 'Staple Food',
            price: '20',
            comment: 'Pay Now'
        },
        {
            image: 'https://goodineverygrain.ca/wp-content/uploads/2021/06/wheat-berries-bowl.png',
            tittle: 'wheet',
            catagory: 'Staple Food',
            price: '30',
            comment: 'Pay Now'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaf3TEFO4KbCFclBB2QQSmeS_2eaetg2qpXg&s',
            tittle: 'Mug Dal',
            catagory: 'Staple Food',
            price: '100',
            comment: 'Pay Now'
        },
        {
            image: 'https://www.apnikheti.com/upload/crops/7175idea99red_lentil_16x9.jpg',
            tittle: 'Musur Dal',
            catagory: 'Staple Food',
            price: '100',
            comment: 'Pay Now'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvvaS2Jv4uXwmVV-1wQC6xXrx7hhhPF52aw&s',
            tittle: 'Chandramukhi Alu',
            catagory: 'Vegetable',
            price: '16',
            comment: 'Pay Now'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9qPDZYT7GbDYOM5FRebrq07Wo4WY0HHxFA&usqp=CAU',
            tittle: 'Jyoti Alu',
            catagory: 'Vegetable',
            price: '15',
            comment: 'Pay Now'
        },
        {
            image: 'https://media.licdn.com/dms/image/D5612AQGVHhTesMlc5g/article-cover_image-shrink_600_2000/0/1707287047851?e=2147483647&v=beta&t=UtdJFWQTlgxXRAdePNZh9TA3Dha9xu4IDKgbabpVSxk',
            tittle: 'Murtard seeds',
            catagory: 'Cooking Oil',
            price: '50',
            comment: 'Pay Now'
        },
        {
            image: 'https://www.shutterstock.com/image-photo/green-bananas-growing-on-trees-600nw-2332642151.jpg',
            tittle: 'Banana',
            catagory: 'Fruits',
            price: '48',
            comment: 'Pay Now'
        },
        {
            image: 'https://images.news18.com/news18marathi/uploads/2022/05/Untitled-design-64-16522773383x2.jpg?im=FitAndFill=(540,360)',
            tittle: 'chola',
            catagory: 'Proteins',
            price: '30',
            comment: 'Pay Now'
        },
        {
            image: 'https://plantix.net/en/library/assets/custom/crop-images/peanut.jpeg',
            tittle: 'Peanuts',
            catagory: 'Proteins',
            price: '28',
            comment: 'Pay Now'
        },
    ];

    const newcropItems = [
        {
            image: 'https://www.apnikheti.com/upload/crops/5431idea99rice1.JPG',
            tittle: 'Rice',
            catagory: 'Staple Food',
            price: '1',
            comment: 'Register to Bid'
        },
        {
            image: 'https://goodineverygrain.ca/wp-content/uploads/2021/06/wheat-berries-bowl.png',
            tittle: 'wheet',
            catagory: 'Staple Food',
            price: '30',
            comment: 'Register to bid'
        },
    ];

    return (
        <div className="crop-menu">
            <div className="our-crop-items">
                {cropItems.map((item, index) => (
                    <CroplItem
                        key={index}
                        image={item.image}
                        title={item.tittle}
                        catagory={item.catagory}
                        price={item.price}
                        comment={item.comment}
                        onPay={checkoutHandler}
                        isLoading={isLoading}
                    />
                ))}
            </div>
            <hr />
            <div className="our-new-items">
                {newcropItems.map((item, index) => (
                    <CroplItem
                        key={index}
                        image={item.image}
                        title={item.tittle}
                        catagory={item.catagory}
                        price={item.price}
                        comment={item.comment}
                        onPay={checkoutHandler}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    )
}

export default ViewAuction;
