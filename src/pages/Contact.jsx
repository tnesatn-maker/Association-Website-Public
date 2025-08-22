import React from 'react'

export default function Contact(){
  const [sent, setSent] = React.useState(false)
  const onSubmit = (e)=>{
    e.preventDefault()
    setSent(true)
  }
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section className="card">
        <h1 className="text-2xl font-semibold">Contact TNESA</h1>
        {!sent ? (
          <form className="grid gap-3 mt-4" onSubmit={onSubmit}>
            <input className="border rounded-xl p-2" placeholder="Your Name" required />
            <input className="border rounded-xl p-2" type="email" placeholder="Email" required />
            <input className="border rounded-xl p-2" placeholder="Phone" />
            <textarea className="border rounded-xl p-2" rows="4" placeholder="Message" required />
            <button className="btn btn-primary">Send</button>
          </form>
        ) : (
          <p className="text-green-700">Thank you! We will get back to you shortly.</p>
        )}
      </section>
      <aside className="card">
        <h2 className="font-semibold">Association Address</h2>
        <p className="text-gray-700 mt-2">Tamil Nadu, India</p>
        <p className="text-gray-700 mt-1">Email: contact@tnesa.org</p>
      </aside>
    </div>
  )
}
