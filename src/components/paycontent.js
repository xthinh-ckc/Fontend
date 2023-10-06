export default function PayContent()
{
    return(
        <>
        <div className="mainpay">
        <table className="table table-dark ">
                <thead>
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
        
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                    <th scope="row"><img src="a6.png"/></th>
                    <td>$5000</td>
                    <td>1</td>
                
                    </tr>
                    <tr>
                    <th scope="row"><img src="a7.png"/></th>
                    <td>$9000</td>
                    <td>1</td>
                   
                    </tr>
                </tbody>
        </table>
        <div className="totalprice">   
            <h3>   <span>Total price :</span> 
            <span>$14000</span></h3>

            <h3>We Accept Payments:</h3>
            <h4>  <a className="Cash">Cash</a></h4>
            <h4> <a className="CCard">Credit Card</a></h4>
            <h4> <a className="Wallet">Electronic wallet</a></h4>
            <button className="btnpay">Pay</button>
           
           
        </div>
           
        </div>
        </>
    );
}