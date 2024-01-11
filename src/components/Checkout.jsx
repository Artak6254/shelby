export function Checkout({ checkin, checkout, setCheckout, bookingPageLabel }) {
  return (
    <div>
        <p>{bookingPageLabel[0]?.checkOut}</p>
        <input id='checkout' type='date' min={checkin} value={checkout} onChange={(e) => setCheckout(e.target.value)} />
    </div>
  )
}
